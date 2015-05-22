var argv = require('minimist')(process.argv.slice(2));

// show help
if(!(argv.index && argv.type))
{
	console.log("Usage: node importer.js --index TYPE --type TYPE [--batchSize 10]")
	// console.log("\nAvailable sources:\n\n", Object.keys(datasources));
	// console.log("\nAvailable targets:\n\n", Object.keys(exporters));
	process.exit(-1);
}

var elasticsearch = require('elasticsearch');
var options = require('./config').elasticsearch;
var host = options.host || 'localhost';
var port = options.port || 9200;
var logLevel = options.logLevel || 'error';

var client = new elasticsearch.Client({
  host: host + ':' + port,
  log: logLevel
});

var datasources= require('./datasources.js');
var datasource = datasources['schools'];

var mappings = {
	school: {
		properties: {
			geoLocation: {
				type: 'geo_point',
				fielddata: {
					format: 'compressed',
					precision: '3m'
				}
			}
		}
	}
}
			
// add keyword (not analyzed fields)
datasource.keywordFields.forEach(function(fieldName){
	mappings.school.properties[fieldName] = {
		type: 'string',
		index: 'not_analyzed'
	};
});

// create the index
client.indices
	.create({
		index: argv.index,
		body: {
			settings: {
				number_of_replicas: 0,
				number_of_shards: 5
			},
			mappings: mappings
		}				
	})
	.then(function(result){
		var sculpt = require('sculpt');
		var csvParser = require("fast-csv");
		var util = require('./src/rowUtils.js');

		var through = require('through');


		var s = sculpt
			.map(util.compose([
				util.mapColumns(datasource.mapping, datasource.initial),
				util.computeIdHash(datasource.idFields),
				util.parseIntegers(datasource.integerFields || []),
				util.parseGeoLocation(datasource.geoLocation || [])
			]));

		var t = through(function(data){
			this.pause();
			client
				.index({
					index: argv.index,
					type: argv.type,
					id: data.id,
					body: data
				})
				.then(function(result){
					this.push({school: data, result: result});
					this.resume();
				}.bind(this));	
		});

		process.stdin
			.pipe(csvParser({headers:true}))
			.pipe(s)
			.pipe(t)
			.on('data', function(z){
				x = z.school;
				console.log("SCHOOL =>", x.id, '[', z.result._version, '] ~', x.building_number, '#', x.title);
			})
			.on('error',function(x){
				console.log(x);
			});
	})