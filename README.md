
import using

	node gvd2.js --index schoolregister --type school < data/PO-schoolvestigingen.csv


This script needs to be rewritten (again)

- highlandjs is broken.
- rxjs is crazy.
- sculpt is too limited.

argh.

to run this, we need a `config.json` file like this

	{
	   "dynamodb": {
	      "table": "schoolregister-geotable",
	      "region": "eu-west-1",
	      "sslEnabled": true,
	      "accessKeyId": "AKI---------------WZQ",
	      "secretAccessKey": "BCj-----------------------------x0+l/N8"
	   },
	   "elasticsearch": {
	      "index": "schoolregister",
	      "host": "localhost",
	      "port": 9200
	   }
	}
