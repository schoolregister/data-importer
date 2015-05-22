
// CSB header ~> fieldname mappings for each datasource
var mappings = {}

mappings.statistics = {
	'Account: Accountnaam': 'title',
	'Account: Schooltype': 'phase',
	'Account: Vestigingsnummer': 'building_number',
	Jaar: 'year',
	Schooljaar: 'yearRange',
	'Schoolprestaties Score': 'score',
	'Cito Rendement': 'cito_rendement',
	'Cito Score (positie)': 'cite_score',
	'Leerlingen Aantal leerlingen': 'number_of_students',
	'Personeel Leerkrachten M': 'number_of_male_teachers',
	'Leerkrachten V': 'number_of_female_teachers',
	'Gemiddelde leeftijd Man': 'average_age_male_teachers',
	'Gemiddelde leeftijd Vrouw': 'average_age_female_teachers',
	'aantal ondersteunend personeel': 'number_of_support_personnel',

// student distribution

	'Leerlingen < 4 jr (0,00)': 'students_lt_4yr_0_00',
	'Leerlingen < 4 jr (0,30)': 'students_lt_4yr_0_30',
	'Leerlingen < 4 jr (1,20)': 'students_lt_4yr_1_20',
	'Leerlingen 10 jr (0,00)': 'students_10yr_0_00',
	'Leerlingen 10 jr (0.30)': 'students_10yr_0_30',
	'Leerlingen 10 jr (1,20)': 'students_10yr_1_20',
	'Leerlingen 11 jr (0,00)': 'students_11yr_0_00',
	'Leerlingen 11 jr (0.30)': 'students_11yr_0_30',
	'Leerlingen 11 jr (1,20)': 'students_11yr_1_20',
	'Leerlingen 12 jr (0,00)': 'students_12yr_0_00',
	'Leerlingen 12 jr (0.30)': 'students_12yr_0_30',
	'Leerlingen 12 jr (1,20)': 'students_12yr_1_20',
	'Leerlingen 13 jr (0,00)': 'students_13yr_0_00',
	'Leerlingen 13 jr (0.30)': 'students_13yr_0_30',
	'Leerlingen 13 jr (1,20)': 'students_13yr_1_20',
	'Leerlingen 14 jr (0,00)': 'students_14yr_0_00',
	'Leerlingen 14 jr (0.30)': 'students_14yr_0_30',
	'Leerlingen 14 jr (1,20)': 'students_14yr_1_20',
	'Leerlingen 4 jr (0,00)': 'students_4yr_0_00',
	'Leerlingen 4 jr (0,30)': 'students_4yr_0_30',
	'Leerlingen 4 jr (1,20)': 'students_4yr_1_20',
	'Leerlingen 5 jr (0,00)': 'students_5yr_0_00',
	'Leerlingen 5 jr (0.30)': 'students_5yr_0_30',
	'Leerlingen 5 jr (1,20)': 'students_5yr_1_20',
	'Leerling Gewichten Leerlingen 6 jr (0,00)': 'students_6yr_0_00',
	'Leerlingen 6 jr (0.30)': 'students_6yr_0_30',
	'Leerlingen 6 jr (1,20)': 'students_6yr_1_20',
	'Leerlingen 7 jr (0,00)': 'students_7yr_0_00',
	'Leerlingen 7 jr (0.30)': 'students_7yr_0_30',
	'Leerlingen 7 jr (1,20)': 'students_7yr_1_20',
	'Leerlingen 8 jr (0,00)': 'students_8yr_0_00',
	'Leerlingen 8 jr (0.30)': 'students_8yr_0_30',
	'Leerlingen 8 jr (1,20)': 'students_8yr_1_20',
	'Leerlingen 9 jr (0,00)': 'students_9yr_0_00',
	'Leerlingen 9 jr (0.30)': 'students_9yr_0_30',
	'Leerlingen 9 jr (1,20)': 'students_9yr_1_20',

// different advices given

	'Schooladvies VSO': 'advice_VSO',
	PrO: 'advice_PrO',
	'VMBO-BL': 'advice_VMBO_BL',
	'VMBO-BL-KL': 'advice_VMBO_BL_KL',
	'VMBO GT': 'advice_VMBO_GT',
	'VMBO GT-HAVO': 'advice_VMBO_GT_HAVO',
	'VMBO-KL': 'advice_VMBO_KL',
	'VMBO KL-GT': 'advice_VMBO_KL_GT',
	HAVO: 'advice_HAVO',
	'HAVO-VWO': 'advice_HAVO_VWO',
	VWO: 'advice_VWO'
}

mappings.vestigingen = {

	'Accountnaam': 'title',
	'BRIN nummer': 'brin_number',

	'Vestigingsnummer': 'building_number',
	'Type Locatie': 'building_type',

	'Geo Locatie (Latitude)': 'geo_latitude',
	'Geo Locatie (Longitude)': 'geo_longitude',

	'Gemeente': 'municipality',

	'Vestiging - huisnr': 'address_number',
	'Vestiging - Land': 'address_country',
	'Vestiging - straat': 'address_street',
	'Vestiging - woonplaats': 'address_place',
	'Vestiging - postcode': 'address_postalcode',

	'Correspondentie-huisnr': 'corresponence_number',
	'Correspondentie-Land': 'correspondence_country',
	'Correspondentie-straat': 'correspondence_street',
	'Correspondentie-woonplaats': 'correspondence_place',
	'Correspondentie-postcode': 'correspondence_postalcode',

	// board
	Bestuur: 'board',

	// director
	'Geslacht directeur': 'director_gender',
	'Naam Directeur': 'director_name',
	'Email directie': 'director_email',

	// contact details
	Contactpersoon: 'contact',
	Telefoon: 'phone_number',
	'Email school': 'general_email',
	'Email beheerder': 'administrative_email',

	// properties
	'Taal': 'language',
	'Schooltype': 'phase',
	'Categorie': 'category',
	'Denominatie': 'denomination',
	'Onderwijsmethode': 'method',
	'Brede School?': 'broad',
	Populatie: 'population',
	Cluster: 'cluster',
	'Soort onderwijs': 'kind_of_education',
	Streng_Vrij: 'strict_or_free'
	
}

// data sources
exports.statistics = {
	filename: './data/PO-scores.csv',
	table: 'schoolregister-stats',
	mapping: mappings.statistics,
	
	// default fields
	initial: { country: 'nl' }, 

	idFields: ['building_number'],
	
	// matchings are converted to numbers
	integerFields: ['year',
		/^students/, /^advice_/,
		/^number_of_/, /^average_age_/,
		/score$/, /rendement$/]
}

exports.schools = {
	filename: './data/PO-schoolvestigingen.csv',
	table: 'schools',
	mapping: mappings.vestigingen,

	initial: { country: 'nl' },
	
	idFields: ['building_number'],
	integerFields: ['latitude', 'longitude']
}