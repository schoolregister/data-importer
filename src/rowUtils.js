var _ = require('lodash')

// compose from initial
// fs:[A -> A] -> a:A -> (f(f(f(a))))
exports.compose = function seqmap(fns){
	return function(s) {
		return fns.reduce(function(x, fn){
			return fn(x);
		}, s)
	}
}
exports.seqmap = exports.compose;

// Returns a function that renames dictionary keys,
// according to some `mapping`,
// starting with optional `initial` dictionary
//
// Example:
//
// var f = mapColumns({a:'b'}, {c:123})
// f({a:456}) => {b: 456, c:123}
//
exports.mapColumns = function(mapping, initial) {
	return function(row) {
		return _.transform(mapping, function(acc, val, key){
				// insert changed row name
				if(row[key])
					acc[mapping[key]] = row[key];
		}, _.extend(initial) || {});
	}
}

// Returns a function that hashes some dictionary values
// into a property 'id'
//
// Example:
//
//  var f = computeIdHash(['a','b'])
//  f({a:1, b:2, c:3}) => {id: SHA1(1 <*> 2)>, a:1, b:2, c:3}
//
var crypto = require('crypto')
exports.computeIdHash = function(idFields)
{
	return function(row) {

		// compute ID hash
		var shasum = crypto.createHash('sha224');

		idFields.forEach(function(idField){
			shasum.update(row[idField])
		});

		row.id = shasum.digest('hex').substr(0, 18);

		// console.log('SHA =>', idFields.map(function(idField){return row[idField]}).join(" (+) "), row.id);
		// console.log(row);

		return row;
	}
}

// Returns a function that parses dictionary fields
// into integer values
//
// Example:
//
//  var f = parseIntegers(['a','b'])
//  f({a:'88', b:'99', c:'boo'}) => {a:88, b:99, c:'boo'}
//
exports.parseIntegers = function(integerFields){
	return function(row){
		// for every field in the spec, parse it to an integer
		integerFields.forEach(function(fieldSpec){

			if(_.isRegExp(fieldSpec))
			{
				// for a regex, parse all matching keys
				_.keys(row).forEach(function(key){
					if(fieldSpec.test(key))
						row[key] = parseInt(row[key]);
				});

				return;
			}

			// otherwise, if the field exists, parse it
			if(row[fieldSpec])
				row[fieldSpec] = parseInt(row[fieldSpec]);

		});
		return row;
	}
}


exports.parseGeoLocation = function(geoFields) {
	return function(row)
	{
		// both latitude and longitude fields must be specified
		if((!geoFields.lat) || (!geoFields.lon))
			return row;
		
		// check if we have both latitude & longitude fields
		if((!row[geoFields.lat]) || (!row[geoFields.lon]))
			return row;

		var latitude = parseFloat(row[geoFields.lat]);
		var longitude = parseFloat(row[geoFields.lon]);
		
		// sometimes the locations needs to be scaled by 10, this is an error in the dataset
		// TODO fix dataset
		if((row.country == 'nl') && (latitude < 6))
		{
			latitude *= 10;
			longitude *= 10;
		}
		
		// add parsed geolocation, remove unparsed
		row.geoLocation = [latitude, longitude];
		delete row[geoFields.lat];
		delete row[geoFields.lon];
		
		return row;
	}
}
