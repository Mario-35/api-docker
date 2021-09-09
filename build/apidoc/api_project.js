define({
  "title": "Custom apiDoc browser title",
  "version": "1.0.0",
  "url": "http://sensorthings.geosas.fr/v1.0",
  "proxy": "http://sensorthings.geosas.fr",
  "withGenerator": false,
  "header": {
    "title": "Introduction",
    "content": "<p>Introduction</p>\n"
  },
  "footer": {
    "title": "Errors",
    "content": "<p>The SensorThings API uses the following error codes :</p>\n"
  },
  "order": [
    "Root",
    "Things",
    "Locations",
    "HistoricalLocations",
    "Datastreams",
    "Sensors",
    "ObservedProperties",
    "Observations",
    "CreateObservations",
    "FeaturesOfInterest",
    "Query",
    "Format"
  ],
  "name": "inrae-sensorthing-api",
  "description": "Sensorthing API for INRAE",
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2021-09-09T15:56:36.838Z",
    "url": "https://apidocjs.com",
    "version": "0.25.0"
  }
});
