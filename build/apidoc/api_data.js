define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "$",
            "description": "<p>{tab.replace(&quot;[&quot;, &quot;&quot;).replace(&quot;]&quot;, &quot;&quot;)}<code>);                 });             } else if (key === &quot;apiParam&quot; &amp;&amp; value) {                 value.forEach((tab: string) =&gt; {                     lines.push(</code>*    @apiParam ${tab}<code>);                 });             } else if (key === &quot;apiExample&quot; &amp;&amp; value) {                 lines.push(</code>*    @${key} {js} Example usage:<code>);                 lines.push(</code>*          ${value}<code>);             } else if (key === &quot;apiError&quot; &amp;&amp; value) {                 value.forEach((tab: string) =&gt; {                     lines.push(</code>*    @apiError ${tab}<code>);                 });             } else if (Object.keys(_HEADERS).includes(key) &amp;&amp; value) {                 lines.push(</code>*    @${key} ${_HEADERS[key]}<code>);                 const successLines: string[] = value.split(&quot;\\n&quot;);                 successLines.forEach((successLine: string) =&gt; {                     lines.push(</code>*    ${successLine}<code>);                 });             } else if (value) {                 lines.push(</code>*    @${key} ${value}`); } }</p> <pre><code>    lines.push(&quot;</code></pre>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "C:/api/src/test/integration/constant.ts",
    "group": "C:\\api\\src\\test\\integration\\constant.ts",
    "groupTitle": "C:\\api\\src\\test\\integration\\constant.ts",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "$",
            "description": "<p>{tab.replace(&quot;[&quot;, &quot;&quot;).replace(&quot;]&quot;, &quot;&quot;)}<code>);                 });             } else if (key === &quot;apiParam&quot; &amp;&amp; value) {                 value.forEach((tab: string) =&gt; {                     lines.push(</code>*    @apiParam ${tab}<code>);                 });             } else if (key === &quot;apiExample&quot; &amp;&amp; value) {                 lines.push(</code>*    @${key} {js} Example usage:<code>);                 lines.push(</code>*          ${value}<code>);             } else if (key === &quot;apiError&quot; &amp;&amp; value) {                 value.forEach((tab: string) =&gt; {                     lines.push(</code>*    @apiError ${tab}<code>);                 });             } else if (Object.keys(_HEADERS).includes(key) &amp;&amp; value) {                 lines.push(</code>*    @${key} ${_HEADERS[key]}<code>);                 const successLines: string[] = value.split(&quot;\\n&quot;);                 successLines.forEach((successLine: string) =&gt; {                     lines.push(</code>*    ${successLine}<code>);                 });             } else if (value) {                 lines.push(</code>*    @${key} ${value}`); } }</p> <pre><code>    lines.push(&quot;</code></pre>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "C:/api/src/test/temp/constant.ts",
    "group": "C:\\api\\src\\test\\temp\\constant.ts",
    "groupTitle": "C:\\api\\src\\test\\temp\\constant.ts",
    "name": ""
  },
  {
    "type": "infos",
    "url": "/CreateObservations",
    "title": "[11] infos.",
    "version": "1.0.0",
    "name": "CreateObservations_Infos",
    "group": "CreateObservations",
    "description": "<p>Create observations</p>",
    "filename": "C:/api/src/test/apiDocs/CreateObservations.js",
    "groupTitle": "CreateObservations"
  },
  {
    "type": "post",
    "url": "/CreateObservations",
    "title": "[12] CreateObservations FOI.",
    "version": "1.0.0",
    "name": "PostObservationsCreateObservationsFoiCreateObservations",
    "group": "CreateObservations",
    "description": "<p>CreateObservations</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/CreateObservations",
        "type": "js"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"Datastream\": {\n        \"@iot.id\": 1\n    },\n    \"components\": [\n        \"phenomenonTime\",\n        \"result\",\n        \"FeatureOfInterest/id\"\n    ],\n    \"dataArray@iot.count\": 3,\n    \"dataArray\": [\n        [\n            \"2017-01-13T10:20:00.000Z\",\n            90,\n            1\n        ],\n        [\n            \"2017-01-13T10:21:00.000Z\",\n            91,\n            1\n        ],\n        [\n            \"2017-01-13T10:22:00.000Z\",\n            92,\n            1\n        ]\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    \"http://sensorthings.geosas.fr/v1.0/Observations(15)\",\n    \"http://sensorthings.geosas.fr/v1.0/Observations(16)\",\n    \"http://sensorthings.geosas.fr/v1.0/Observations(17)\"\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"No id found for : 9007199254740991\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/CreateObservations.js",
    "groupTitle": "CreateObservations"
  },
  {
    "type": "infos",
    "url": "/Datastreams",
    "title": "[11] infos.",
    "version": "1.0.0",
    "name": "Datastreams_Infos",
    "group": "Datastreams",
    "description": "<p>A Datastream groups a collection of Observations measuring the same ObservedProperty and produced by the same Sensor.</p>",
    "filename": "C:/api/src/test/apiDocs/apiDocDatastreams.js",
    "groupTitle": "Datastreams"
  },
  {
    "type": "delete",
    "url": "/Datastreams",
    "title": "[19] one.",
    "version": "1.0.0",
    "name": "DeleteDatastreams",
    "group": "Datastreams",
    "description": "<p>Delete a Datastreams.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Datastreams(13)",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocDatastreams.js",
    "groupTitle": "Datastreams"
  },
  {
    "type": "get",
    "url": "/Datastreams",
    "title": "[12] all.",
    "version": "1.0.0",
    "name": "GetAllDatastreams",
    "group": "Datastreams",
    "description": "<p>Retrieve all Datastreams.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Datastreams",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>@iot.id</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "selfLink",
            "description": "<p>@iot.selfLink</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>A property provides a label for Datastream entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the Datastream entity.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "observationType",
            "description": "<p>The type of Observation (with unique result type), which is used by the service to encode observations.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSONObject",
            "optional": false,
            "field": "unitOfMeasurement",
            "description": "<p>The encoding type of the feature property.</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "observedArea",
            "description": "<p>The spatial bounding box of the spatial extent of all FeaturesOfInterest that belong to the Observations associated with this Datastream.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "phenomenonTime",
            "description": "<p>The temporal interval of the phenomenon times of all observations belonging to this Datastream.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "resultTime",
            "description": "<p>The temporal interval of the result times of all observations belonging to this Datastream.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSONObject",
            "optional": false,
            "field": "properties",
            "description": "<p>The detailed description of the feature. The data type is defined by encodingType.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Thing",
            "description": "<p>Thing@iot.navigationLink</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Sensor",
            "description": "<p>Sensor@iot.navigationLink</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "ObservedProperty",
            "description": "<p>ObservedProperty@iot.navigationLink</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Observations",
            "description": "<p>Observations@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"10\",\n    \"value\": [\n        {\n            \"@iot.id\": \"1\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(1)\",\n            \"description\": \"Air quality Number one\",\n            \"name\": \"air_quality_readings1\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"observedArea\": null,\n            \"phenomenonTime\": null,\n            \"properties\": null,\n            \"resultTime\": null,\n            \"unitOfMeasurement\": {\n                \"name\": \"PM 2.5 Particulates (ug/m3)\",\n                \"symbol\": \"μg/m³\",\n                \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n            },\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(1)/Observations\",\n            \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(1)/ObservedProperty\",\n            \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(1)/Sensor\",\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(1)/Thing\"\n        },\n        {\n            \"@iot.id\": \"2\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(2)\",\n            \"description\": \"Air quality Number two\",\n            \"name\": \"air_quality_readings2\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"observedArea\": null,\n            \"phenomenonTime\": null,\n            \"properties\": null,\n            \"resultTime\": null,\n            \"unitOfMeasurement\": {\n                \"name\": \"PM 2.5 Particulates (ug/m3)\",\n                \"symbol\": \"μg/m³\",\n                \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n            },\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(2)/Observations\",\n            \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(2)/ObservedProperty\",\n            \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(2)/Sensor\",\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(2)/Thing\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Datastreams"
      }
    ],
    "filename": "C:/api/src/test/apiDocs/apiDocDatastreams.js",
    "groupTitle": "Datastreams"
  },
  {
    "type": "get",
    "url": "/Datastreams(:id)",
    "title": "[13] one.",
    "version": "1.0.0",
    "name": "GetDatastreams",
    "group": "Datastreams",
    "description": "<p>Get a specific Datastreams.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Datastreams(1)",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Datastreams(1"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"1\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(1)\",\n    \"description\": \"Air quality Number one\",\n    \"name\": \"air_quality_readings1\",\n    \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n    \"observedArea\": null,\n    \"phenomenonTime\": null,\n    \"properties\": null,\n    \"resultTime\": null,\n    \"unitOfMeasurement\": {\n        \"name\": \"PM 2.5 Particulates (ug/m3)\",\n        \"symbol\": \"μg/m³\",\n        \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n    },\n    \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(1)/Observations\",\n    \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(1)/ObservedProperty\",\n    \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(1)/Sensor\",\n    \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(1)/Thing\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"id : 9007199254740991 not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocDatastreams.js",
    "groupTitle": "Datastreams"
  },
  {
    "type": "get",
    "url": "/Datastreams(:id)",
    "title": "[15] Expands.",
    "version": "1.0.0",
    "name": "GetExpandObservationsDatastreams",
    "group": "Datastreams",
    "description": "<p>Get a specific Datastreams and expand Observations, and ObservedProperty.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Datastreams(10)?$expand=Observations,ObservedProperty",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Datastreams(10?$expand=Observations,ObservedProperty"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"10\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)\",\n    \"description\": \"Air quality Number ten\",\n    \"name\": \"air_quality_readings10\",\n    \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n    \"observedArea\": null,\n    \"phenomenonTime\": null,\n    \"properties\": null,\n    \"resultTime\": null,\n    \"unitOfMeasurement\": {\n        \"name\": \"PM 2.5 Particulates (ug/m3)\",\n        \"symbol\": \"μg/m³\",\n        \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n    },\n    \"Observations\": [\n        {\n            \"@iot.id\": \"8\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(8)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T02:15:15.790Z\",\n            \"result\": 45,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T12:30:30.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(8)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(8)/FeatureOfInterest\"\n        },\n        {\n            \"@iot.id\": \"9\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(9)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T02:15:15.790Z\",\n            \"result\": 45,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T11:30:30.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(9)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(9)/FeatureOfInterest\"\n        },\n        {\n            \"@iot.id\": \"10\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(10)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T08:15:15.790Z\",\n            \"result\": 45,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T18:30:30.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(10)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(10)/FeatureOfInterest\"\n        },\n        {\n            \"@iot.id\": \"11\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(11)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2017-02-07T18:02:00.000Z\",\n            \"result\": 21.6,\n            \"resultQuality\": null,\n            \"resultTime\": \"2017-02-07T18:02:05.000Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(11)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(11)/FeatureOfInterest\"\n        },\n        {\n            \"@iot.id\": \"13\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(13)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2017-02-07T18:02:00.000Z\",\n            \"result\": 21.6,\n            \"resultQuality\": null,\n            \"resultTime\": \"2017-02-07T18:02:05.000Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(13)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(13)/FeatureOfInterest\"\n        },\n        {\n            \"@iot.id\": \"14\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(14)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2017-02-07T18:02:00.000Z\",\n            \"result\": 21.6,\n            \"resultQuality\": null,\n            \"resultTime\": \"2017-02-07T18:02:05.000Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(14)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(14)/FeatureOfInterest\"\n        }\n    ],\n    \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)/Observations\",\n    \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)/ObservedProperty\",\n    \"ObservedProperty\": {\n        \"@iot.id\": \"8\",\n        \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(8)\",\n        \"definition\": \"https://airnow.gov/index.cfm$1action=aqibasics.particle\",\n        \"description\": \"PM something Number eight\",\n        \"name\": \"PM 8 observedProperties\",\n        \"properties\": null,\n        \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(8)/Datastreams\"\n    },\n    \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)/Sensor\",\n    \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)/Thing\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocDatastreams.js",
    "groupTitle": "Datastreams"
  },
  {
    "type": "get",
    "url": "/Things(6)/Datastreams(:id)",
    "title": "[14] specific Thing .",
    "version": "1.0.0",
    "name": "GetThingsDatastreams",
    "group": "Datastreams",
    "description": "<p>Get Datastreamss from Things.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things(6)/Datastreams",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Things(6/Datastreams"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"3\",\n    \"value\": [\n        {\n            \"@iot.id\": \"8\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)\",\n            \"description\": \"Air quality Number eight\",\n            \"name\": \"air_quality_readings8\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"observedArea\": null,\n            \"phenomenonTime\": null,\n            \"properties\": null,\n            \"resultTime\": null,\n            \"unitOfMeasurement\": {\n                \"name\": \"PM 2.5 Particulates (ug/m3)\",\n                \"symbol\": \"μg/m³\",\n                \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n            },\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)/Observations\",\n            \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)/ObservedProperty\",\n            \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)/Sensor\",\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)/Thing\"\n        },\n        {\n            \"@iot.id\": \"9\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)\",\n            \"description\": \"Air quality Number nine\",\n            \"name\": \"air_quality_readings9\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"observedArea\": null,\n            \"phenomenonTime\": null,\n            \"properties\": null,\n            \"resultTime\": null,\n            \"unitOfMeasurement\": {\n                \"name\": \"PM 2.5 Particulates (ug/m3)\",\n                \"symbol\": \"μg/m³\",\n                \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n            },\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)/Observations\",\n            \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)/ObservedProperty\",\n            \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)/Sensor\",\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)/Thing\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"No id for : Things(9007199254740991)\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocDatastreams.js",
    "groupTitle": "Datastreams"
  },
  {
    "type": "patch",
    "url": "/Datastreams",
    "title": "[18] one.",
    "version": "1.0.0",
    "name": "PatchDatastreams",
    "group": "Datastreams",
    "description": "<p>Patch a Datastreams.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Datastreams(13)",
        "type": "js"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"unitOfMeasurement\": {\n        \"name\": \"Degrees Fahrenheit\",\n        \"symbol\": \"degF\",\n        \"definition\": \"http://www.qudt.org/qudt/owl/1.0.0/unit/Instances.html#DegreeFahrenheit\"\n    },\n    \"description\": \"Water Temperature of Bow river\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"13\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(13)\",\n    \"description\": \"Water Temperature of Bow river\",\n    \"name\": \"Air Temperature DS\",\n    \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n    \"observedArea\": null,\n    \"phenomenonTime\": null,\n    \"properties\": null,\n    \"resultTime\": null,\n    \"unitOfMeasurement\": {\n        \"name\": \"Degrees Fahrenheit\",\n        \"symbol\": \"degF\",\n        \"definition\": \"http://www.qudt.org/qudt/owl/1.0.0/unit/Instances.html#DegreeFahrenheit\"\n    },\n    \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(13)/Observations\",\n    \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(13)/ObservedProperty\",\n    \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(13)/Sensor\",\n    \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(13)/Thing\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"No id found for : 9007199254740991\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocDatastreams.js",
    "groupTitle": "Datastreams"
  },
  {
    "type": "post",
    "url": "/Datastreams",
    "title": "[16] with existing Thing.",
    "version": "1.0.0",
    "name": "PostDatastreams",
    "group": "Datastreams",
    "description": "<p>Post a new datastream.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Datastreams",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>A property provides a label for Datastream entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the Datastream entity.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "observationType",
            "description": "<p>The type of Observation (with unique result type), which is used by the service to encode observations.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": false,
            "field": "unitOfMeasurement",
            "description": "<p>The encoding type of the feature property.</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": true,
            "field": "observedArea",
            "description": "<p>The spatial bounding box of the spatial extent of all FeaturesOfInterest that belong to the Observations associated with this Datastream.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "phenomenonTime",
            "description": "<p>The temporal interval of the phenomenon times of all observations belonging to this Datastream.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "resultTime",
            "description": "<p>The temporal interval of the result times of all observations belonging to this Datastream.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "properties",
            "description": "<p>The detailed description of the feature. The data type is defined by encodingType.</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Thing",
            "description": "<p>Thing@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Sensor",
            "description": "<p>Sensor@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "ObservedProperty",
            "description": "<p>ObservedProperty@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Observations",
            "description": "<p>Observations@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"unitOfMeasurement\": {\n        \"symbol\": \"μg/m³\",\n        \"name\": \"PM 2.5 Particulates (ug/m3)\",\n        \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n    },\n    \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n    \"description\": \"Air quality readings\",\n    \"name\": \"air_quality_readings\",\n    \"Thing\": {\n        \"@iot.id\": 1\n    },\n    \"ObservedProperty\": {\n        \"@iot.id\": 1\n    },\n    \"Sensor\": {\n        \"@iot.id\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"12\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(12)\",\n    \"description\": \"Air quality readings\",\n    \"name\": \"air_quality_readings\",\n    \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n    \"observedArea\": null,\n    \"phenomenonTime\": null,\n    \"properties\": null,\n    \"resultTime\": null,\n    \"unitOfMeasurement\": {\n        \"name\": \"PM 2.5 Particulates (ug/m3)\",\n        \"symbol\": \"μg/m³\",\n        \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n    },\n    \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(12)/Observations\",\n    \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(12)/ObservedProperty\",\n    \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(12)/Sensor\",\n    \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(12)/Thing\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Bad Request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocDatastreams.js",
    "groupTitle": "Datastreams"
  },
  {
    "type": "post",
    "url": "/Datastreams",
    "title": "[17] with a Thing.",
    "version": "1.0.0",
    "name": "PostLocationThingDatastreams",
    "group": "Datastreams",
    "description": "<p>POST with existing Thing.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things(1)/Datastreams",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>A property provides a label for Datastream entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the Datastream entity.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "observationType",
            "description": "<p>The type of Observation (with unique result type), which is used by the service to encode observations.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": false,
            "field": "unitOfMeasurement",
            "description": "<p>The encoding type of the feature property.</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": true,
            "field": "observedArea",
            "description": "<p>The spatial bounding box of the spatial extent of all FeaturesOfInterest that belong to the Observations associated with this Datastream.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "phenomenonTime",
            "description": "<p>The temporal interval of the phenomenon times of all observations belonging to this Datastream.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "resultTime",
            "description": "<p>The temporal interval of the result times of all observations belonging to this Datastream.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "properties",
            "description": "<p>The detailed description of the feature. The data type is defined by encodingType.</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Thing",
            "description": "<p>Thing@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Sensor",
            "description": "<p>Sensor@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "ObservedProperty",
            "description": "<p>ObservedProperty@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Observations",
            "description": "<p>Observations@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Air Temperature DS\",\n    \"description\": \"Datastream for recording temperature\",\n    \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n    \"unitOfMeasurement\": {\n        \"name\": \"Degree Celsius\",\n        \"symbol\": \"degC\",\n        \"definition\": \"http://www.qudt.org/qudt/owl/1.0.0/unit/Instances.html#DegreeCelsius\"\n    },\n    \"ObservedProperty\": {\n        \"name\": \"Area Temperature\",\n        \"description\": \"The degree or intensity of heat present in the area\",\n        \"definition\": \"http://www.qudt.org/qudt/owl/1.0.0/quantity/Instances.html#AreaTemperature\"\n    },\n    \"Sensor\": {\n        \"name\": \"DHT22\",\n        \"description\": \"DHT22 temperature sensor\",\n        \"encodingType\": \"application/pdf\",\n        \"metadata\": \"https://cdn-shop.adafruit.com/datasheets/DHT22.pdf\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"13\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(13)\",\n    \"description\": \"Datastream for recording temperature\",\n    \"name\": \"Air Temperature DS\",\n    \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n    \"observedArea\": null,\n    \"phenomenonTime\": null,\n    \"properties\": null,\n    \"resultTime\": null,\n    \"unitOfMeasurement\": {\n        \"name\": \"Degree Celsius\",\n        \"symbol\": \"degC\",\n        \"definition\": \"http://www.qudt.org/qudt/owl/1.0.0/unit/Instances.html#DegreeCelsius\"\n    },\n    \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(13)/Observations\",\n    \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(13)/ObservedProperty\",\n    \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(13)/Sensor\",\n    \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(13)/Thing\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocDatastreams.js",
    "groupTitle": "Datastreams"
  },
  {
    "type": "delete",
    "url": "/FeaturesOfInterest",
    "title": "[8] one.",
    "version": "1.0.0",
    "name": "DeleteFeaturesOfInterest",
    "group": "FeaturesOfInterest",
    "description": "<p>Delete a FeaturesOfInterest.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/FeaturesOfInterest(10)",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocFeaturesOfInterest.js",
    "groupTitle": "FeaturesOfInterest"
  },
  {
    "type": "infos",
    "url": "/FeaturesOfInterest",
    "title": "[1] infos.",
    "version": "1.0.0",
    "name": "FeaturesOfInterest_Infos",
    "group": "FeaturesOfInterest",
    "description": "<p>An Observation results is a value being assigned to a phenomenon.<br>The phenomenon is a property of a feature, the latter being the FeatureOfInterest of the Observation.<br> In the context of the Internet of Things, many Observations’ FeatureOfInterest can be the Location of the Thing. For example, the FeatureOfInterest of a wifi-connect thermostat can be the Location of the thermostat (the living room where the thermostat is located in).<br>In the case of remote sensing, the FeatureOfInterest can be the geographical area or volume that is being sensed.</p>",
    "filename": "C:/api/src/test/apiDocs/apiDocFeaturesOfInterest.js",
    "groupTitle": "FeaturesOfInterest"
  },
  {
    "type": "get",
    "url": "/FeaturesOfInterest",
    "title": "[2] all.",
    "version": "1.0.0",
    "name": "GetAllFeaturesOfInterest",
    "group": "FeaturesOfInterest",
    "description": "<p>Retrieve all FeaturesOfInterest.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/FeaturesOfInterest",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>@iot.id</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "selfLink",
            "description": "<p>@iot.selfLink</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>A property provides a label for FeatureOfInterest entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>The description about the FeatureOfInterest.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "encodingType",
            "description": "<p>The encoding type of the feature property.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSONObject",
            "optional": false,
            "field": "feature",
            "description": "<p>The detailed description of the feature. The data type is defined by encodingType.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Observations",
            "description": "<p>Observations@iot.navigationLink</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Locations",
            "description": "<p>Locations@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"9\",\n    \"value\": [\n        {\n            \"@iot.id\": \"1\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/FeaturesOfInterest(1)\",\n            \"description\": null,\n            \"encodingType\": null,\n            \"feature\": null,\n            \"name\": \"Default Feature of Interest\",\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/FeaturesOfInterest(1)/Observations\"\n        },\n        {\n            \"@iot.id\": \"2\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/FeaturesOfInterest(2)\",\n            \"description\": \"This is the weather station Number one\",\n            \"encodingType\": \"application/vnd.geo+json\",\n            \"feature\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    \"-153.06\",\n                    \"29.05\"\n                ]\n            },\n            \"name\": \"Weather Station 1\",\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/FeaturesOfInterest(2)/Observations\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/FeaturesOfInterest"
      }
    ],
    "filename": "C:/api/src/test/apiDocs/apiDocFeaturesOfInterest.js",
    "groupTitle": "FeaturesOfInterest"
  },
  {
    "type": "get",
    "url": "/FeaturesOfInterest(:id)",
    "title": "[4] one and expand.",
    "version": "1.0.0",
    "name": "GetExpandObservationsFeaturesOfInterest",
    "group": "FeaturesOfInterest",
    "description": "<p>Get a specific FeaturesOfInterest and expand Observations.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/FeaturesOfInterest(1)?$expand=Observations",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/FeaturesOfInterest(1?$expand=Observations"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"1\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/FeaturesOfInterest(1)\",\n    \"description\": null,\n    \"encodingType\": null,\n    \"feature\": null,\n    \"name\": \"Default Feature of Interest\",\n    \"Observations\": [\n        {\n            \"@iot.id\": \"1\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T11:04:15.790Z\",\n            \"result\": 11.6666666666667,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T11:04:15.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)/FeatureOfInterest\"\n        },\n        {\n            \"@iot.id\": \"6\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(6)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T01:15:15.790Z\",\n            \"result\": 17.5,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T17:30:30.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(6)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(6)/FeatureOfInterest\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocFeaturesOfInterest.js",
    "groupTitle": "FeaturesOfInterest"
  },
  {
    "type": "get",
    "url": "/FeaturesOfInterest(:id)",
    "title": "[3] one.",
    "version": "1.0.0",
    "name": "GetFeaturesOfInterest",
    "group": "FeaturesOfInterest",
    "description": "<p>Get a specific FeaturesOfInterest.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/FeaturesOfInterest(1)",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/FeaturesOfInterest(1"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"1\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/FeaturesOfInterest(1)\",\n    \"description\": null,\n    \"encodingType\": null,\n    \"feature\": null,\n    \"name\": \"Default Feature of Interest\",\n    \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/FeaturesOfInterest(1)/Observations\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"id : 9007199254740991 not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocFeaturesOfInterest.js",
    "groupTitle": "FeaturesOfInterest"
  },
  {
    "type": "patch",
    "url": "/FeaturesOfInterest",
    "title": "[7] one.",
    "version": "1.0.0",
    "name": "PatchFeaturesOfInterest",
    "group": "FeaturesOfInterest",
    "description": "<p>Patch a sensor.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"My New Name\",\n    \"feature\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n            -115.06,\n            55.05\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"10\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/FeaturesOfInterest(10)\",\n    \"description\": \"This is a weather station located at the Calgary Airport.\",\n    \"encodingType\": \"application/vnd.geo+json\",\n    \"feature\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n            -115.06,\n            55.05\n        ]\n    },\n    \"name\": \"My New Name\",\n    \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/FeaturesOfInterest(10)/Observations\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"No id found for : 9007199254740991\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocFeaturesOfInterest.js",
    "groupTitle": "FeaturesOfInterest"
  },
  {
    "type": "post",
    "url": "/FeaturesOfInterest",
    "title": "[5] basic.",
    "version": "1.0.0",
    "name": "PostFeaturesOfInterest",
    "group": "FeaturesOfInterest",
    "description": "<p>Post a new featureofinterest.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/FeaturesOfInterest",
        "type": "js"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Weather Station YYC.\",\n    \"description\": \"This is a weather station located at the Calgary Airport.\",\n    \"encodingType\": \"application/vnd.geo+json\",\n    \"feature\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n            -114.06,\n            51.05\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"10\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/FeaturesOfInterest(10)\",\n    \"description\": \"This is a weather station located at the Calgary Airport.\",\n    \"encodingType\": \"application/vnd.geo+json\",\n    \"feature\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n            -114.06,\n            51.05\n        ]\n    },\n    \"name\": \"Weather Station YYC.\",\n    \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/FeaturesOfInterest(10)/Observations\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Bad Request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocFeaturesOfInterest.js",
    "groupTitle": "FeaturesOfInterest"
  },
  {
    "type": "infos",
    "url": "/Format",
    "title": "[11] infos.",
    "version": "1.0.0",
    "name": "FormatInfos",
    "group": "Formats",
    "description": "<p>Format result JSON as default, CSV with comma separator, note that $value return result as text.</p>",
    "filename": "C:/api/src/test/apiDocs/apiDocFormat.js",
    "groupTitle": "Formats"
  },
  {
    "type": "get",
    "url": "/Things(:id)?resultFormat=CSV",
    "title": "[12].",
    "version": "1.0.0",
    "name": "GetFormatCsv",
    "group": "Formats",
    "description": "<p>Use $resultFormat to determine return result format.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things(10)?$resultFormat=CSV",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Things(10?$resultFormat=CSV"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"@iot.id\";\"@iot.selfLink\";\"description\";\"name\";\"properties\";\"Datastreams@iot.navigationLink\";\"HistoricalLocation@iot.navigationLink\";\"Locations@iot.navigationLink\"\n\"10\";\"http://sensorthings.geosas.fr/v1.0/Things(10)\";\"A SensorWeb thing Number ten\";\"SensorWebThing 10\";\"{owner:Mozilla version eight,organization:Mozilla}\";\"proxy/v1.0/Things(10)/Datastreams\";\"proxy/v1.0/Things(10)/HistoricalLocation\";\"proxy/v1.0/Things(10)/Locations\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\"\"",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocFormat.js",
    "groupTitle": "Formats"
  },
  {
    "type": "delete",
    "url": "/HistoricalLocations",
    "title": "[7] one.",
    "version": "1.0.0",
    "name": "DeleteHistoricalLocations",
    "group": "HistoricalLocations",
    "description": "<p>Delete a HistoricalLocations.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/HistoricalLocations(26)",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocHistoricalLocations.js",
    "groupTitle": "HistoricalLocations"
  },
  {
    "type": "get",
    "url": "/HistoricalLocations",
    "title": "[2] all.",
    "version": "1.0.0",
    "name": "GetAllHistoricalLocations",
    "group": "HistoricalLocations",
    "description": "<p>Retrieve all HistoricalLocations.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/HistoricalLocations",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>@iot.id</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "selfLink",
            "description": "<p>@iot.selfLink</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "time",
            "description": "<p>The time when the Thing is known at the Location.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Thing",
            "description": "<p>Thing@iot.navigationLink</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Locations",
            "description": "<p>Locations@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"24\",\n    \"value\": [\n        {\n            \"@iot.id\": \"1\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/HistoricalLocations(1)\",\n            \"time\": \"2021-09-09T15:56:35.549Z\",\n            \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/HistoricalLocations(1)/Locations\",\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/HistoricalLocations(1)/Thing\"\n        },\n        {\n            \"@iot.id\": \"2\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/HistoricalLocations(2)\",\n            \"time\": \"2021-09-09T15:56:35.561Z\",\n            \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/HistoricalLocations(2)/Locations\",\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/HistoricalLocations(2)/Thing\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/HistoricalLocations"
      }
    ],
    "filename": "C:/api/src/test/apiDocs/apiDocHistoricalLocations.js",
    "groupTitle": "HistoricalLocations"
  },
  {
    "type": "get",
    "url": "/HistoricalLocations(:id)",
    "title": "[4] Expand.",
    "version": "1.0.0",
    "name": "GetExpandLocationsHistoricalLocations",
    "group": "HistoricalLocations",
    "description": "<p>Get a specific HistoricalLocations and expand location.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/HistoricalLocations(6)?$expand=Locations",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/HistoricalLocations(6?$expand=Locations"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"6\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/HistoricalLocations(6)\",\n    \"time\": \"2021-09-09T15:56:35.746Z\",\n    \"Locations\": [\n        {\n            \"@iot.id\": \"6\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(6)\",\n            \"_default_foi\": \"3\",\n            \"description\": \"This is the Location Number six\",\n            \"encodingType\": \"application/vnd.geo+json\",\n            \"geom\": null,\n            \"location\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    \"-129.06\",\n                    \"8.05\"\n                ]\n            },\n            \"name\": \"My Location 6\",\n            \"properties\": null,\n            \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(6)/HistoricalLocation\",\n            \"Things@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(6)/Things\"\n        }\n    ],\n    \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/HistoricalLocations(6)/Thing\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocHistoricalLocations.js",
    "groupTitle": "HistoricalLocations"
  },
  {
    "type": "get",
    "url": "/HistoricalLocations(:id)",
    "title": "[3] one.",
    "version": "1.0.0",
    "name": "GetHistoricalLocations",
    "group": "HistoricalLocations",
    "description": "<p>Get a specific HistoricalLocations.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/HistoricalLocations(1)",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/HistoricalLocations(1"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"1\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/HistoricalLocations(1)\",\n    \"time\": \"2021-09-09T15:56:35.549Z\",\n    \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/HistoricalLocations(1)/Locations\",\n    \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/HistoricalLocations(1)/Thing\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocHistoricalLocations.js",
    "groupTitle": "HistoricalLocations"
  },
  {
    "type": "get",
    "url": "/HistoricalLocations(:id)",
    "title": "[5] Select.",
    "version": "1.0.0",
    "name": "GetSelectTimeHistoricalLocations",
    "group": "HistoricalLocations",
    "description": "<p>Retrieve time for a specific HistoricalLocations .</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/HistoricalLocations(6)?$select=time",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/HistoricalLocations(6?$select=time"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"time\": \"2021-09-09T15:56:35.746Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"id : 9007199254740991 not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocHistoricalLocations.js",
    "groupTitle": "HistoricalLocations"
  },
  {
    "type": "infos",
    "url": "/HistoricalLocations",
    "title": "[1] infos.",
    "version": "1.0.0",
    "name": "HistoricalLocations_Infos",
    "group": "HistoricalLocations",
    "description": "<p>A Thing’s HistoricalLocation entity set provides the times of the current (last known) and previous locations of the Thing.</p>",
    "filename": "C:/api/src/test/apiDocs/apiDocHistoricalLocations.js",
    "groupTitle": "HistoricalLocations"
  },
  {
    "type": "patch",
    "url": "/HistoricalLocations",
    "title": "[6] one.",
    "version": "1.0.0",
    "name": "PatchHistoricalLocations",
    "group": "HistoricalLocations",
    "description": "<p>Patch a HistoricalLocations.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/HistoricalLocations(26)",
        "type": "js"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"time\": \"2015-02-07T19:22:11.297Z\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"26\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/HistoricalLocations(26)\",\n    \"time\": \"2015-02-07T19:22:11.297Z\",\n    \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/HistoricalLocations(26)/Locations\",\n    \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/HistoricalLocations(26)/Thing\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"No id found for : 9007199254740991\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocHistoricalLocations.js",
    "groupTitle": "HistoricalLocations"
  },
  {
    "type": "delete",
    "url": "/Locations",
    "title": "[9] one.",
    "version": "1.0.0",
    "name": "DeleteLocations",
    "group": "Locations",
    "description": "<p>Delete a Locations.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Locations(15)",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocLocations.js",
    "groupTitle": "Locations"
  },
  {
    "type": "get",
    "url": "/Things(5)/Locations(:id)",
    "title": "[4] specific Thing.",
    "version": "1.0.0",
    "name": "GetAllFromThingLocations",
    "group": "Locations",
    "description": "<p>Retrieve Locations of a specific Thing.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things(5)/Locations",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>@iot.id</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "selfLink",
            "description": "<p>@iot.selfLink</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>A property provides a label for Location entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>The description about the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSONObject",
            "optional": false,
            "field": "location",
            "description": "<p>The location type is defined by encodingType.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "encodingType",
            "description": "<p>The encoding type of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "_default_foi",
            "description": "<p>Default feature of interest.</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "geom",
            "description": "<p>Geom.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSONObject",
            "optional": false,
            "field": "properties",
            "description": "<p>Properties of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Things",
            "description": "<p>Things@iot.navigationLink</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "HistoricalLocation",
            "description": "<p>HistoricalLocation@iot.navigationLink</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "FeatureOfInterest",
            "description": "<p>FeatureOfInterest@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"5\",\n    \"value\": [\n        {\n            \"@iot.id\": \"6\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(6)\",\n            \"_default_foi\": \"3\",\n            \"description\": \"This is the Location Number six\",\n            \"encodingType\": \"application/vnd.geo+json\",\n            \"geom\": null,\n            \"location\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    \"-129.06\",\n                    \"8.05\"\n                ]\n            },\n            \"name\": \"My Location 6\",\n            \"properties\": null,\n            \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(6)/HistoricalLocation\",\n            \"Things@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(6)/Things\"\n        },\n        {\n            \"@iot.id\": \"7\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(7)\",\n            \"_default_foi\": \"2\",\n            \"description\": \"This is the Location Number seven\",\n            \"encodingType\": \"application/vnd.geo+json\",\n            \"geom\": null,\n            \"location\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    \"-190.06\",\n                    \"31.05\"\n                ]\n            },\n            \"name\": \"My Location 7\",\n            \"properties\": null,\n            \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(7)/HistoricalLocation\",\n            \"Things@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(7)/Things\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Things(5/Locations"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"id : 9007199254740991 not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocLocations.js",
    "groupTitle": "Locations"
  },
  {
    "type": "get",
    "url": "/Locations",
    "title": "[2] all.",
    "version": "1.0.0",
    "name": "GetAllLocations",
    "group": "Locations",
    "description": "<p>Retrieve all Locations.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Locations",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>@iot.id</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "selfLink",
            "description": "<p>@iot.selfLink</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>A property provides a label for Location entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>The description about the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSONObject",
            "optional": false,
            "field": "location",
            "description": "<p>The location type is defined by encodingType.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "encodingType",
            "description": "<p>The encoding type of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "_default_foi",
            "description": "<p>Default feature of interest.</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "geom",
            "description": "<p>Geom.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSONObject",
            "optional": false,
            "field": "properties",
            "description": "<p>Properties of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Things",
            "description": "<p>Things@iot.navigationLink</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "HistoricalLocation",
            "description": "<p>HistoricalLocation@iot.navigationLink</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "FeatureOfInterest",
            "description": "<p>FeatureOfInterest@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"12\",\n    \"value\": [\n        {\n            \"@iot.id\": \"1\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(1)\",\n            \"_default_foi\": \"1\",\n            \"description\": \"University of Calgary, CCIT building\",\n            \"encodingType\": \"application/vnd.geo+json\",\n            \"geom\": null,\n            \"location\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    \"-122.06\",\n                    \"32.05\"\n                ]\n            },\n            \"name\": \"UofC (Created new location) Number six\",\n            \"properties\": null,\n            \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(1)/HistoricalLocation\",\n            \"Things@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(1)/Things\"\n        },\n        {\n            \"@iot.id\": \"2\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(2)\",\n            \"_default_foi\": \"1\",\n            \"description\": \"University of Calgary, CCIT building\",\n            \"encodingType\": \"application/vnd.geo+json\",\n            \"geom\": null,\n            \"location\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    \"-76.06\",\n                    \"15.05\"\n                ]\n            },\n            \"name\": \"UofC (Created new location) Number seven\",\n            \"properties\": null,\n            \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(2)/HistoricalLocation\",\n            \"Things@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(2)/Things\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Locations"
      }
    ],
    "filename": "C:/api/src/test/apiDocs/apiDocLocations.js",
    "groupTitle": "Locations"
  },
  {
    "type": "get",
    "url": "/Locations(:id)",
    "title": "[3] one.",
    "version": "1.0.0",
    "name": "GetLocations",
    "group": "Locations",
    "description": "<p>Get a specific Locations.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Locations(1)",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Locations(1"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"1\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(1)\",\n    \"_default_foi\": \"1\",\n    \"description\": \"University of Calgary, CCIT building\",\n    \"encodingType\": \"application/vnd.geo+json\",\n    \"geom\": null,\n    \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n            \"-122.06\",\n            \"32.05\"\n        ]\n    },\n    \"name\": \"UofC (Created new location) Number six\",\n    \"properties\": null,\n    \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(1)/HistoricalLocation\",\n    \"Things@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(1)/Things\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocLocations.js",
    "groupTitle": "Locations"
  },
  {
    "type": "infos",
    "url": "/Locations",
    "title": "[1] infos.",
    "version": "1.0.0",
    "name": "Locations_Infos",
    "group": "Locations",
    "description": "<p>The Location entity locates the Thing(s) it associated with.<br>A Thing’s Location entity is defined as the last known location of the Thing.<br> A Thing can have multiple Locations if all Locations are different representations of same Location with different encodingType.</p>",
    "filename": "C:/api/src/test/apiDocs/apiDocLocations.js",
    "groupTitle": "Locations"
  },
  {
    "type": "patch",
    "url": "/Locations",
    "title": "[8] one.",
    "version": "1.0.0",
    "name": "PatchLocations",
    "group": "Locations",
    "description": "<p>Patch a thing.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Locations(15)",
        "type": "js"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"My Location has changed\",\n    \"description\": \"Backyard\",\n    \"encodingType\": \"application/vnd.geo+json\",\n    \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n            4.913329,\n            52.343029\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"15\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(15)\",\n    \"_default_foi\": \"7\",\n    \"description\": \"Backyard\",\n    \"encodingType\": \"application/vnd.geo+json\",\n    \"geom\": null,\n    \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n            4.913329,\n            52.343029\n        ]\n    },\n    \"name\": \"My Location has changed\",\n    \"properties\": null,\n    \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(15)/HistoricalLocation\",\n    \"Things@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(15)/Things\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"No id found for : 9007199254740991\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocLocations.js",
    "groupTitle": "Locations"
  },
  {
    "type": "post",
    "url": "/Locations",
    "title": "[7] with Thing and new FOI.",
    "version": "1.0.0",
    "name": "PostLocationThingFoiLocations",
    "group": "Locations",
    "description": "<p>POST with existing Thing.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things(2)/Locations",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>A property provides a label for Location entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>The description about the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "location",
            "description": "<p>The location type is defined by encodingType.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "encodingType",
            "description": "<p>The encoding type of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "_default_foi",
            "description": "<p>Default feature of interest.</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": true,
            "field": "geom",
            "description": "<p>Geom.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "properties",
            "description": "<p>Properties of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Things",
            "description": "<p>Things@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "HistoricalLocation",
            "description": "<p>HistoricalLocation@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "FeatureOfInterest",
            "description": "<p>FeatureOfInterest@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"UofC CCIT with New FOI\",\n    \"description\": \"University of Calgary, CCIT building\",\n    \"encodingType\": \"application/vnd.geo+json\",\n    \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n            -114.133,\n            51.08\n        ]\n    },\n    \"FeatureOfInterest\": {\n        \"name\": \"Weather New FOI.\",\n        \"description\": \"This is a weather station create by location.\",\n        \"encodingType\": \"application/vnd.geo+json\",\n        \"feature\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                14.06,\n                1.05\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"15\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(15)\",\n    \"_default_foi\": \"7\",\n    \"description\": \"University of Calgary, CCIT building\",\n    \"encodingType\": \"application/vnd.geo+json\",\n    \"geom\": null,\n    \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n            -114.133,\n            51.08\n        ]\n    },\n    \"name\": \"UofC CCIT with New FOI\",\n    \"properties\": null,\n    \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(15)/HistoricalLocation\",\n    \"Things@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(15)/Things\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocLocations.js",
    "groupTitle": "Locations"
  },
  {
    "type": "post",
    "url": "/Locations",
    "title": "[6] with existing Thing.",
    "version": "1.0.0",
    "name": "PostLocationThingLocations",
    "group": "Locations",
    "description": "<p>POST with existing Thing.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things(1)/Locations",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>A property provides a label for Location entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>The description about the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "location",
            "description": "<p>The location type is defined by encodingType.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "encodingType",
            "description": "<p>The encoding type of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "_default_foi",
            "description": "<p>Default feature of interest.</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": true,
            "field": "geom",
            "description": "<p>Geom.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "properties",
            "description": "<p>Properties of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Things",
            "description": "<p>Things@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "HistoricalLocation",
            "description": "<p>HistoricalLocation@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "FeatureOfInterest",
            "description": "<p>FeatureOfInterest@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"UofC CCIT\",\n    \"description\": \"University of Calgary, CCIT building\",\n    \"encodingType\": \"application/vnd.geo+json\",\n    \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n            -114.133,\n            51.08\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"14\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(14)\",\n    \"_default_foi\": null,\n    \"description\": \"University of Calgary, CCIT building\",\n    \"encodingType\": \"application/vnd.geo+json\",\n    \"geom\": null,\n    \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n            -114.133,\n            51.08\n        ]\n    },\n    \"name\": \"UofC CCIT\",\n    \"properties\": null,\n    \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(14)/HistoricalLocation\",\n    \"Things@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(14)/Things\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocLocations.js",
    "groupTitle": "Locations"
  },
  {
    "type": "post",
    "url": "/Locations",
    "title": "[5] basic.",
    "version": "1.0.0",
    "name": "PostLocations",
    "group": "Locations",
    "description": "<p>Post a new location.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Locations",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>A property provides a label for Location entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>The description about the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "location",
            "description": "<p>The location type is defined by encodingType.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "encodingType",
            "description": "<p>The encoding type of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "_default_foi",
            "description": "<p>Default feature of interest.</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": true,
            "field": "geom",
            "description": "<p>Geom.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "properties",
            "description": "<p>Properties of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Things",
            "description": "<p>Things@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "HistoricalLocation",
            "description": "<p>HistoricalLocation@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "FeatureOfInterest",
            "description": "<p>FeatureOfInterest@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"My Location\",\n    \"description\": \"Backyard\",\n    \"encodingType\": \"application/vnd.geo+json\",\n    \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n            4.913329,\n            52.343029\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"13\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(13)\",\n    \"_default_foi\": null,\n    \"description\": \"Backyard\",\n    \"encodingType\": \"application/vnd.geo+json\",\n    \"geom\": null,\n    \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n            4.913329,\n            52.343029\n        ]\n    },\n    \"name\": \"My Location\",\n    \"properties\": null,\n    \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(13)/HistoricalLocation\",\n    \"Things@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Locations(13)/Things\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Bad Request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocLocations.js",
    "groupTitle": "Locations"
  },
  {
    "type": "delete",
    "url": "/Observations",
    "title": "[23] one.",
    "version": "1.0.0",
    "name": "DeleteObservations",
    "group": "Observations",
    "description": "<p>Delete a Observations.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Observations(2)",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservations.js",
    "groupTitle": "Observations"
  },
  {
    "type": "get",
    "url": "/Observations",
    "title": "[14] all.",
    "version": "1.0.0",
    "name": "GetAllObservations",
    "group": "Observations",
    "description": "<p>Retrieve all Observations.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Observations",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>@iot.id</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "selfLink",
            "description": "<p>@iot.selfLink</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "phenomenonTime",
            "description": "<p>The time instant or period of when the Observation happens.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>The estimated value of an ObservedProperty from the Observation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "resultTime",
            "description": "<p>The time of the Observation result was generated.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSONObject",
            "optional": false,
            "field": "resultQuality",
            "description": "<p>Describes the quality of the result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "validTime",
            "description": "<p>The time period during which the result may be used.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSONObject",
            "optional": false,
            "field": "parameters",
            "description": "<p>Key-value pairs showing the environmental conditions during measurement.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Datastream",
            "description": "<p>Datastream@iot.navigationLink</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "FeatureOfInterest",
            "description": "<p>FeatureOfInterest@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"10\",\n    \"value\": [\n        {\n            \"@iot.id\": \"1\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T03:15:15.790Z\",\n            \"result\": 11.6666666666667,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T18:30:30.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)/FeatureOfInterest\"\n        },\n        {\n            \"@iot.id\": \"2\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(2)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T03:15:15.790Z\",\n            \"result\": 17.5,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T16:30:30.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(2)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(2)/FeatureOfInterest\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Observations"
      }
    ],
    "filename": "C:/api/src/test/apiDocs/apiDocObservations.js",
    "groupTitle": "Observations"
  },
  {
    "type": "get",
    "url": "/Datastreams(10)/Observations",
    "title": "[16] from Datastream.",
    "version": "1.0.0",
    "name": "GetDatastreamsObservations",
    "group": "Observations",
    "description": "<p>Get Observationss from Datastreams.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Datastreams(10)/Observations",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Datastreams(10/Observations"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"3\",\n    \"value\": [\n        {\n            \"@iot.id\": \"8\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(8)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T02:15:15.790Z\",\n            \"result\": 45,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T12:30:30.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(8)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(8)/FeatureOfInterest\"\n        },\n        {\n            \"@iot.id\": \"9\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(9)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T02:15:15.790Z\",\n            \"result\": 45,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T11:30:30.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(9)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(9)/FeatureOfInterest\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservations.js",
    "groupTitle": "Observations"
  },
  {
    "type": "get",
    "url": "/Observations(:id)",
    "title": "[12] Expands.",
    "version": "1.0.0",
    "name": "GetExpandDatastreamsObservations",
    "group": "Observations",
    "description": "<p>Get a specific Observations and expand Datastreams.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Observations(1)?$expand=Datastreams",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Observations(1?$expand=Datastreams"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"1\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)\",\n    \"parameters\": null,\n    \"phenomenonTime\": \"2016-11-18T03:15:15.790Z\",\n    \"result\": 11.6666666666667,\n    \"resultQuality\": null,\n    \"resultTime\": \"2016-11-18T18:30:30.790Z\",\n    \"validTime\": null,\n    \"Datastream\": {\n        \"@iot.id\": \"4\",\n        \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(4)\",\n        \"description\": \"Air quality Number four\",\n        \"name\": \"air_quality_readings4\",\n        \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n        \"observedArea\": null,\n        \"phenomenonTime\": null,\n        \"properties\": null,\n        \"resultTime\": null,\n        \"unitOfMeasurement\": {\n            \"name\": \"PM 2.5 Particulates (ug/m3)\",\n            \"symbol\": \"μg/m³\",\n            \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n        },\n        \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(4)/Observations\",\n        \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(4)/ObservedProperty\",\n        \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(4)/Sensor\",\n        \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(4)/Thing\"\n    },\n    \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)/FeatureOfInterest\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservations.js",
    "groupTitle": "Observations"
  },
  {
    "type": "get",
    "url": "/Observations(:id)",
    "title": "[15] one.",
    "version": "1.0.0",
    "name": "GetObservations",
    "group": "Observations",
    "description": "<p>Get a specific Observations.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Observations(1)",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Observations(1"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"1\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)\",\n    \"parameters\": null,\n    \"phenomenonTime\": \"2016-11-18T03:15:15.790Z\",\n    \"result\": 11.6666666666667,\n    \"resultQuality\": null,\n    \"resultTime\": \"2016-11-18T18:30:30.790Z\",\n    \"validTime\": null,\n    \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)/Datastream\",\n    \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)/FeatureOfInterest\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"id : 9007199254740991 not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservations.js",
    "groupTitle": "Observations"
  },
  {
    "type": "get",
    "url": "/Observations(:id)",
    "title": "[13] Select.",
    "version": "1.0.0",
    "name": "GetSelectPhenomenonTimeObservations",
    "group": "Observations",
    "description": "<p>Retrieve specified phenomenonTime, result for a specific Observations.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Observations(1)?$select=phenomenonTime,result",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Observations(1?$select=phenomenonTime,result"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"phenomenonTime\": \"2016-11-18T03:15:15.790Z\",\n    \"result\": 11.6666666666667\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservations.js",
    "groupTitle": "Observations"
  },
  {
    "type": "infos",
    "url": "/Observations",
    "title": "[11] infos.",
    "version": "1.0.0",
    "name": "Observations_Infos",
    "group": "Observations",
    "description": "<p>An Observation is the act of measuring or otherwise determining the value of a property.<br> An Observation in SensorThings represents a single Sensor reading of an ObservedProperty.<br>A physical device, a Sensor, sends Observations to a specified Datastream.<br>An Observation requires a FeatureOfInterest entity, if none is provided in the request, the Location of the Thing associated with the Datastream, will be assigned to the new Observation as the FeatureOfInterest.</p>",
    "filename": "C:/api/src/test/apiDocs/apiDocObservations.js",
    "groupTitle": "Observations"
  },
  {
    "type": "patch",
    "url": "/Observations",
    "title": "[22] with Datastream.",
    "version": "1.0.0",
    "name": "PatchObservationDatastreamObservations",
    "group": "Observations",
    "description": "<p>Patch an Observation with datastream.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Observations(2)",
        "type": "js"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"phenomenonTime\": \"2016-11-18T11:04:15.790Z\",\n    \"resultTime\": \"2016-11-18T11:04:15.790Z\",\n    \"result\": 20.4,\n    \"Datastream\": {\n        \"@iot.id\": 6\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"2\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(2)\",\n    \"parameters\": null,\n    \"phenomenonTime\": \"2016-11-18T11:04:15.790Z\",\n    \"result\": 20.4,\n    \"resultQuality\": null,\n    \"resultTime\": \"2016-11-18T11:04:15.790Z\",\n    \"validTime\": null,\n    \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(2)/Datastream\",\n    \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(2)/FeatureOfInterest\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"No id found for : 9007199254740991\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservations.js",
    "groupTitle": "Observations"
  },
  {
    "type": "patch",
    "url": "/Observations",
    "title": "[21] one.",
    "version": "1.0.0",
    "name": "PatchObservationObservations",
    "group": "Observations",
    "description": "<p>Patch an Observation.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Observations(1)",
        "type": "js"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"phenomenonTime\": \"2016-11-18T11:04:15.790Z\",\n    \"resultTime\": \"2016-11-18T11:04:15.790Z\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"1\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)\",\n    \"parameters\": null,\n    \"phenomenonTime\": \"2016-11-18T11:04:15.790Z\",\n    \"result\": 11.6666666666667,\n    \"resultQuality\": null,\n    \"resultTime\": \"2016-11-18T11:04:15.790Z\",\n    \"validTime\": null,\n    \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)/Datastream\",\n    \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)/FeatureOfInterest\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservations.js",
    "groupTitle": "Observations"
  },
  {
    "type": "post",
    "url": "/Observations",
    "title": "[18] with FOI.",
    "version": "1.0.0",
    "name": "PostNewFoiObservations",
    "group": "Observations",
    "description": "<p>Post a new observation.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Observations",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "phenomenonTime",
            "description": "<p>The time instant or period of when the Observation happens.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "result",
            "description": "<p>The estimated value of an ObservedProperty from the Observation.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "resultTime",
            "description": "<p>The time of the Observation result was generated.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "resultQuality",
            "description": "<p>Describes the quality of the result.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "validTime",
            "description": "<p>The time period during which the result may be used.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "parameters",
            "description": "<p>Key-value pairs showing the environmental conditions during measurement.</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Datastream",
            "description": "<p>Datastream@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "FeatureOfInterest",
            "description": "<p>FeatureOfInterest@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"phenomenonTime\": \"2017-02-07T18:02:00.000Z\",\n    \"resultTime\": \"2017-02-07T18:02:05.000Z\",\n    \"result\": 21.6,\n    \"FeatureOfInterest\": {\n        \"name\": \"UofC CCIT\",\n        \"description\": \"University of Calgary, CCIT building\",\n        \"encodingType\": \"application/vnd.geo+json\",\n        \"feature\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                -114.133,\n                51.08\n            ]\n        }\n    },\n    \"Datastream\": {\n        \"@iot.id\": 6\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"12\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(12)\",\n    \"parameters\": null,\n    \"phenomenonTime\": \"2017-02-07T18:02:00.000Z\",\n    \"result\": 21.6,\n    \"resultQuality\": null,\n    \"resultTime\": \"2017-02-07T18:02:05.000Z\",\n    \"validTime\": null,\n    \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(12)/Datastream\",\n    \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(12)/FeatureOfInterest\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Bad Request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservations.js",
    "groupTitle": "Observations"
  },
  {
    "type": "post",
    "url": "/Observations",
    "title": "[17] with existing FOI.",
    "version": "1.0.0",
    "name": "PostObservations",
    "group": "Observations",
    "description": "<p>Post a new observation.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Observations",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "phenomenonTime",
            "description": "<p>The time instant or period of when the Observation happens.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "result",
            "description": "<p>The estimated value of an ObservedProperty from the Observation.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "resultTime",
            "description": "<p>The time of the Observation result was generated.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "resultQuality",
            "description": "<p>Describes the quality of the result.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "validTime",
            "description": "<p>The time period during which the result may be used.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "parameters",
            "description": "<p>Key-value pairs showing the environmental conditions during measurement.</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Datastream",
            "description": "<p>Datastream@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "FeatureOfInterest",
            "description": "<p>FeatureOfInterest@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"phenomenonTime\": \"2017-02-07T18:02:00.000Z\",\n    \"resultTime\": \"2017-02-07T18:02:05.000Z\",\n    \"result\": 21.6,\n    \"Datastream\": {\n        \"@iot.id\": 10\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"11\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(11)\",\n    \"parameters\": null,\n    \"phenomenonTime\": \"2017-02-07T18:02:00.000Z\",\n    \"result\": 21.6,\n    \"resultQuality\": null,\n    \"resultTime\": \"2017-02-07T18:02:05.000Z\",\n    \"validTime\": null,\n    \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(11)/Datastream\",\n    \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(11)/FeatureOfInterest\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Bad Request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservations.js",
    "groupTitle": "Observations"
  },
  {
    "type": "post",
    "url": "/Observations",
    "title": "[20] from Datastream and FOI.",
    "version": "1.0.0",
    "name": "PostObservationsDatastreamsFOIObservations",
    "group": "Observations",
    "description": "<p>POST with existing Datastream.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Datastreams(10)/Observations",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "phenomenonTime",
            "description": "<p>The time instant or period of when the Observation happens.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "result",
            "description": "<p>The estimated value of an ObservedProperty from the Observation.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "resultTime",
            "description": "<p>The time of the Observation result was generated.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "resultQuality",
            "description": "<p>Describes the quality of the result.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "validTime",
            "description": "<p>The time period during which the result may be used.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "parameters",
            "description": "<p>Key-value pairs showing the environmental conditions during measurement.</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Datastream",
            "description": "<p>Datastream@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "FeatureOfInterest",
            "description": "<p>FeatureOfInterest@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"phenomenonTime\": \"2017-02-07T18:02:00.000Z\",\n    \"resultTime\": \"2017-02-07T18:02:05.000Z\",\n    \"result\": 21.6,\n    \"FeatureOfInterest\": {\n        \"name\": \"UofC CCIT\",\n        \"description\": \"University of Calgary, CCIT building\",\n        \"encodingType\": \"application/vnd.geo+json\",\n        \"feature\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                -114.133,\n                51.08\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"14\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(14)\",\n    \"parameters\": null,\n    \"phenomenonTime\": \"2017-02-07T18:02:00.000Z\",\n    \"result\": 21.6,\n    \"resultQuality\": null,\n    \"resultTime\": \"2017-02-07T18:02:05.000Z\",\n    \"validTime\": null,\n    \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(14)/Datastream\",\n    \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(14)/FeatureOfInterest\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservations.js",
    "groupTitle": "Observations"
  },
  {
    "type": "post",
    "url": "/Observations",
    "title": "[19] from Datastream.",
    "version": "1.0.0",
    "name": "PostObservationsDatastreamsObservations",
    "group": "Observations",
    "description": "<p>POST with existing Datastream.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Datastreams(10)/Observations",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "phenomenonTime",
            "description": "<p>The time instant or period of when the Observation happens.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "result",
            "description": "<p>The estimated value of an ObservedProperty from the Observation.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "resultTime",
            "description": "<p>The time of the Observation result was generated.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "resultQuality",
            "description": "<p>Describes the quality of the result.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "validTime",
            "description": "<p>The time period during which the result may be used.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "parameters",
            "description": "<p>Key-value pairs showing the environmental conditions during measurement.</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Datastream",
            "description": "<p>Datastream@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "FeatureOfInterest",
            "description": "<p>FeatureOfInterest@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"phenomenonTime\": \"2017-02-07T18:02:00.000Z\",\n    \"resultTime\": \"2017-02-07T18:02:05.000Z\",\n    \"result\": 21.6\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"13\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(13)\",\n    \"parameters\": null,\n    \"phenomenonTime\": \"2017-02-07T18:02:00.000Z\",\n    \"result\": 21.6,\n    \"resultQuality\": null,\n    \"resultTime\": \"2017-02-07T18:02:05.000Z\",\n    \"validTime\": null,\n    \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(13)/Datastream\",\n    \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(13)/FeatureOfInterest\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservations.js",
    "groupTitle": "Observations"
  },
  {
    "type": "delete",
    "url": "/ObservedProperties",
    "title": "[19] one.",
    "version": "1.0.0",
    "name": "DeleteObservedProperties",
    "group": "ObservedProperties",
    "description": "<p>Delete a ObservedProperties.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/ObservedProperties(13)",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservedProperties.js",
    "groupTitle": "ObservedProperties"
  },
  {
    "type": "get",
    "url": "/ObservedProperties",
    "title": "[12] all.",
    "version": "1.0.0",
    "name": "GetAllObservedProperties",
    "group": "ObservedProperties",
    "description": "<p>Retrieve all ObservedProperties.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/ObservedProperties",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>@iot.id</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "selfLink",
            "description": "<p>@iot.selfLink</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>A property provides a label for ObservedProperty entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "definition",
            "description": "<p>The URI of the ObservedProperty. Dereferencing this URI SHOULD result in a representation of the definition of the ObservedProperty.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>A description about the ObservedProperty.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSONObject",
            "optional": false,
            "field": "properties",
            "description": "<p>The detailed properties of the observed property.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Datastreams",
            "description": "<p>Datastreams@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"12\",\n    \"value\": [\n        {\n            \"@iot.id\": \"1\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(1)\",\n            \"definition\": \"https://airnow.gov/index.cfm$1action=aqibasics.particle\",\n            \"description\": \"PM something Number one\",\n            \"name\": \"PM 1 observedProperties\",\n            \"properties\": null,\n            \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(1)/Datastreams\"\n        },\n        {\n            \"@iot.id\": \"2\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(2)\",\n            \"definition\": \"https://airnow.gov/index.cfm$1action=aqibasics.particle\",\n            \"description\": \"PM something Number two\",\n            \"name\": \"PM 2 observedProperties\",\n            \"properties\": null,\n            \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(2)/Datastreams\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/ObservedProperties"
      }
    ],
    "filename": "C:/api/src/test/apiDocs/apiDocObservedProperties.js",
    "groupTitle": "ObservedProperties"
  },
  {
    "type": "get",
    "url": "/Datastream(10/ObservedProperties",
    "title": "[14] specific Datastream .",
    "version": "1.0.0",
    "name": "GetDatastreamObservedProperties",
    "group": "ObservedProperties",
    "description": "<p>Get ObservedPropertiess from Datastream.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Datastream(8)/ObservedProperties",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Datastream(8/ObservedProperties"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"1\",\n    \"value\": [\n        {\n            \"@iot.id\": \"8\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(8)\",\n            \"definition\": \"https://airnow.gov/index.cfm$1action=aqibasics.particle\",\n            \"description\": \"PM something Number eight\",\n            \"name\": \"PM 8 observedProperties\",\n            \"properties\": null,\n            \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(8)/Datastreams\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"No id for : Datastream(9007199254740991)\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservedProperties.js",
    "groupTitle": "ObservedProperties"
  },
  {
    "type": "get",
    "url": "/ObservedProperties(:id)",
    "title": "[15] Expands.",
    "version": "1.0.0",
    "name": "GetExpandDatastreamsObservedProperties",
    "group": "ObservedProperties",
    "description": "<p>Get a specific ObservedProperties and expand Datastreams.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/ObservedProperties(1)?$expand=Datastreams",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/ObservedProperties(1?$expand=Datastreams"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"1\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(1)\",\n    \"definition\": \"https://airnow.gov/index.cfm$1action=aqibasics.particle\",\n    \"description\": \"PM something Number one\",\n    \"name\": \"PM 1 observedProperties\",\n    \"properties\": null,\n    \"Datastreams\": [\n        {\n            \"@iot.id\": \"2\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(2)\",\n            \"description\": \"Air quality Number two\",\n            \"name\": \"air_quality_readings2\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"observedArea\": null,\n            \"phenomenonTime\": null,\n            \"properties\": null,\n            \"resultTime\": null,\n            \"unitOfMeasurement\": {\n                \"name\": \"PM 2.5 Particulates (ug/m3)\",\n                \"symbol\": \"μg/m³\",\n                \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n            },\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(2)/Observations\",\n            \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(2)/ObservedProperty\",\n            \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(2)/Sensor\",\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(2)/Thing\"\n        },\n        {\n            \"@iot.id\": \"3\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(3)\",\n            \"description\": \"Air quality Number three\",\n            \"name\": \"air_quality_readings3\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"observedArea\": null,\n            \"phenomenonTime\": null,\n            \"properties\": null,\n            \"resultTime\": null,\n            \"unitOfMeasurement\": {\n                \"name\": \"PM 2.5 Particulates (ug/m3)\",\n                \"symbol\": \"μg/m³\",\n                \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n            },\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(3)/Observations\",\n            \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(3)/ObservedProperty\",\n            \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(3)/Sensor\",\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(3)/Thing\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservedProperties.js",
    "groupTitle": "ObservedProperties"
  },
  {
    "type": "get",
    "url": "/ObservedProperties(:id)",
    "title": "[13] one.",
    "version": "1.0.0",
    "name": "GetObservedProperties",
    "group": "ObservedProperties",
    "description": "<p>Get a specific ObservedProperties.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/ObservedProperties(2)",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/ObservedProperties(2"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"2\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(2)\",\n    \"definition\": \"https://airnow.gov/index.cfm$1action=aqibasics.particle\",\n    \"description\": \"PM something Number two\",\n    \"name\": \"PM 2 observedProperties\",\n    \"properties\": null,\n    \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(2)/Datastreams\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"id : 9007199254740991 not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservedProperties.js",
    "groupTitle": "ObservedProperties"
  },
  {
    "type": "get",
    "url": "/ObservedProperties(:id)",
    "title": "[16] Select.",
    "version": "1.0.0",
    "name": "GetSelectDescriptionObservedProperties",
    "group": "ObservedProperties",
    "description": "<p>Retrieve specified properties for a specific ObservedProperties.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/ObservedProperties(1)?$select=description",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/ObservedProperties(1?$select=description"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"description\": \"PM something Number one\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservedProperties.js",
    "groupTitle": "ObservedProperties"
  },
  {
    "type": "infos",
    "url": "/ObservedProperties",
    "title": "[11] infos.",
    "version": "1.0.0",
    "name": "ObservedProperties_Infos",
    "group": "ObservedProperties",
    "description": "<p>An ObservedProperty specifies the phenomenon of an Observation.</p>",
    "filename": "C:/api/src/test/apiDocs/apiDocObservedProperties.js",
    "groupTitle": "ObservedProperties"
  },
  {
    "type": "patch",
    "url": "/ObservedProperties",
    "title": "[18] one.",
    "version": "1.0.0",
    "name": "PatchObservedProperties",
    "group": "ObservedProperties",
    "description": "<p>Patch a thing.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/ObservedProperties(13)",
        "type": "js"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"New PM 2.5 Observation\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"13\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(13)\",\n    \"definition\": \"http://www.qudt.org/qudt/owl/1.0.0/quantity/Instances.html#AreaTemperature\",\n    \"description\": \"The degree or intensity of heat present in the area\",\n    \"name\": \"New PM 2.5 Observation\",\n    \"properties\": null,\n    \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(13)/Datastreams\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"No id found for : 9007199254740991\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservedProperties.js",
    "groupTitle": "ObservedProperties"
  },
  {
    "type": "post",
    "url": "/ObservedProperties",
    "title": "[17] basic.",
    "version": "1.0.0",
    "name": "PostObservedProperties",
    "group": "ObservedProperties",
    "description": "<p>Post a new observedproperty.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/ObservedProperties",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>A property provides a label for ObservedProperty entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "definition",
            "description": "<p>The URI of the ObservedProperty. Dereferencing this URI SHOULD result in a representation of the definition of the ObservedProperty.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>A description about the ObservedProperty.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "properties",
            "description": "<p>The detailed properties of the observed property.</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Datastreams",
            "description": "<p>Datastreams@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Area Temperature\",\n    \"description\": \"The degree or intensity of heat present in the area\",\n    \"definition\": \"http://www.qudt.org/qudt/owl/1.0.0/quantity/Instances.html#AreaTemperature\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"13\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(13)\",\n    \"definition\": \"http://www.qudt.org/qudt/owl/1.0.0/quantity/Instances.html#AreaTemperature\",\n    \"description\": \"The degree or intensity of heat present in the area\",\n    \"name\": \"Area Temperature\",\n    \"properties\": null,\n    \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(13)/Datastreams\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Bad Request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocObservedProperties.js",
    "groupTitle": "ObservedProperties"
  },
  {
    "type": "get",
    "url": "/Observations",
    "title": "[20] eq.",
    "version": "1.0.0",
    "name": "GetEqualObservations",
    "group": "Query",
    "description": "<p>Use $filter query option to perform conditional operations on the property values and filter request result.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Observations?$filter=result eq 45",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Observations?$filter=result eq 45"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"3\",\n    \"value\": [\n        {\n            \"@iot.id\": \"8\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(8)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T02:15:15.790Z\",\n            \"result\": 45,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T12:30:30.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(8)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(8)/FeatureOfInterest\"\n        },\n        {\n            \"@iot.id\": \"9\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(9)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T02:15:15.790Z\",\n            \"result\": 45,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T11:30:30.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(9)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(9)/FeatureOfInterest\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocQuery.js",
    "groupTitle": "Query"
  },
  {
    "type": "get",
    "url": "/Things(:id)",
    "title": "[14] Expand multi entities.",
    "version": "1.0.0",
    "name": "GetExpandDatastreamsSensorObservedPropertyThings",
    "group": "Query",
    "description": "<p>Retrieve a Things with inline related entities using $expand query option. Query options can be used on the entire collection of entities or on individual ones.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things(6)?$expand=Datastreams/Sensor,ObservedProperty",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Things(6?$expand=Datastreams/Sensor,ObservedProperty"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"6\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Things(6)\",\n    \"description\": \"A SensorWeb thing Number six\",\n    \"name\": \"SensorWebThing 6\",\n    \"properties\": {\n        \"owner\": \"Mozilla version zero\",\n        \"organization\": \"Mozilla\"\n    },\n    \"Datastreams\": [\n        {\n            \"@iot.id\": \"8\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)\",\n            \"description\": \"Air quality Number eight\",\n            \"name\": \"air_quality_readings8\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"observedArea\": null,\n            \"phenomenonTime\": null,\n            \"properties\": null,\n            \"resultTime\": null,\n            \"unitOfMeasurement\": {\n                \"name\": \"PM 2.5 Particulates (ug/m3)\",\n                \"symbol\": \"μg/m³\",\n                \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n            },\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)/Observations\",\n            \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)/ObservedProperty\",\n            \"ObservedProperty\": {\n                \"@iot.id\": \"8\",\n                \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(8)\",\n                \"definition\": \"https://airnow.gov/index.cfm$1action=aqibasics.particle\",\n                \"description\": \"PM something Number eight\",\n                \"name\": \"PM 8 observedProperties\",\n                \"properties\": null,\n                \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(8)/Datastreams\"\n            },\n            \"Sensor\": {\n                \"@iot.id\": \"5\",\n                \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(5)\",\n                \"description\": \"PM sensor Number five\",\n                \"encodingType\": \"application/pdf\",\n                \"metadata\": \"http://particle-sensor.com/\",\n                \"name\": \"PM 5 sensor\",\n                \"properties\": null,\n                \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(5)/Datastreams\"\n            },\n            \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)/Sensor\",\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)/Thing\"\n        },\n        {\n            \"@iot.id\": \"9\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)\",\n            \"description\": \"Air quality Number nine\",\n            \"name\": \"air_quality_readings9\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"observedArea\": null,\n            \"phenomenonTime\": null,\n            \"properties\": null,\n            \"resultTime\": null,\n            \"unitOfMeasurement\": {\n                \"name\": \"PM 2.5 Particulates (ug/m3)\",\n                \"symbol\": \"μg/m³\",\n                \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n            },\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)/Observations\",\n            \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)/ObservedProperty\",\n            \"ObservedProperty\": {\n                \"@iot.id\": \"8\",\n                \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(8)\",\n                \"definition\": \"https://airnow.gov/index.cfm$1action=aqibasics.particle\",\n                \"description\": \"PM something Number eight\",\n                \"name\": \"PM 8 observedProperties\",\n                \"properties\": null,\n                \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(8)/Datastreams\"\n            },\n            \"Sensor\": {\n                \"@iot.id\": \"5\",\n                \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(5)\",\n                \"description\": \"PM sensor Number five\",\n                \"encodingType\": \"application/pdf\",\n                \"metadata\": \"http://particle-sensor.com/\",\n                \"name\": \"PM 5 sensor\",\n                \"properties\": null,\n                \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(5)/Datastreams\"\n            },\n            \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)/Sensor\",\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)/Thing\"\n        },\n        {\n            \"@iot.id\": \"10\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)\",\n            \"description\": \"Air quality Number ten\",\n            \"name\": \"air_quality_readings10\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"observedArea\": null,\n            \"phenomenonTime\": null,\n            \"properties\": null,\n            \"resultTime\": null,\n            \"unitOfMeasurement\": {\n                \"name\": \"PM 2.5 Particulates (ug/m3)\",\n                \"symbol\": \"μg/m³\",\n                \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n            },\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)/Observations\",\n            \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)/ObservedProperty\",\n            \"ObservedProperty\": {\n                \"@iot.id\": \"8\",\n                \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(8)\",\n                \"definition\": \"https://airnow.gov/index.cfm$1action=aqibasics.particle\",\n                \"description\": \"PM something Number eight\",\n                \"name\": \"PM 8 observedProperties\",\n                \"properties\": null,\n                \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/ObservedProperties(8)/Datastreams\"\n            },\n            \"Sensor\": {\n                \"@iot.id\": \"5\",\n                \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(5)\",\n                \"description\": \"PM sensor Number five\",\n                \"encodingType\": \"application/pdf\",\n                \"metadata\": \"http://particle-sensor.com/\",\n                \"name\": \"PM 5 sensor\",\n                \"properties\": null,\n                \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(5)/Datastreams\"\n            },\n            \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)/Sensor\",\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)/Thing\"\n        }\n    ],\n    \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(6)/Datastreams\",\n    \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(6)/HistoricalLocation\",\n    \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(6)/Locations\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocQuery.js",
    "groupTitle": "Query"
  },
  {
    "type": "get",
    "url": "/Things(:id)",
    "title": "[13] Expand sub Entity.",
    "version": "1.0.0",
    "name": "GetExpandDatastreamsSensorThings",
    "group": "Query",
    "description": "<p>$expand comma separated list of sub-entity names or sub-entity names separated by forward slash.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things(6)?$expand=Datastreams/Sensor",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Things(6?$expand=Datastreams/Sensor"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"6\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Things(6)\",\n    \"description\": \"A SensorWeb thing Number six\",\n    \"name\": \"SensorWebThing 6\",\n    \"properties\": {\n        \"owner\": \"Mozilla version zero\",\n        \"organization\": \"Mozilla\"\n    },\n    \"Datastreams\": [\n        {\n            \"@iot.id\": \"8\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)\",\n            \"description\": \"Air quality Number eight\",\n            \"name\": \"air_quality_readings8\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"observedArea\": null,\n            \"phenomenonTime\": null,\n            \"properties\": null,\n            \"resultTime\": null,\n            \"unitOfMeasurement\": {\n                \"name\": \"PM 2.5 Particulates (ug/m3)\",\n                \"symbol\": \"μg/m³\",\n                \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n            },\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)/Observations\",\n            \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)/ObservedProperty\",\n            \"Sensor\": {\n                \"@iot.id\": \"5\",\n                \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(5)\",\n                \"description\": \"PM sensor Number five\",\n                \"encodingType\": \"application/pdf\",\n                \"metadata\": \"http://particle-sensor.com/\",\n                \"name\": \"PM 5 sensor\",\n                \"properties\": null,\n                \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(5)/Datastreams\"\n            },\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)/Thing\"\n        },\n        {\n            \"@iot.id\": \"9\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)\",\n            \"description\": \"Air quality Number nine\",\n            \"name\": \"air_quality_readings9\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"observedArea\": null,\n            \"phenomenonTime\": null,\n            \"properties\": null,\n            \"resultTime\": null,\n            \"unitOfMeasurement\": {\n                \"name\": \"PM 2.5 Particulates (ug/m3)\",\n                \"symbol\": \"μg/m³\",\n                \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n            },\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)/Observations\",\n            \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)/ObservedProperty\",\n            \"Sensor\": {\n                \"@iot.id\": \"5\",\n                \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(5)\",\n                \"description\": \"PM sensor Number five\",\n                \"encodingType\": \"application/pdf\",\n                \"metadata\": \"http://particle-sensor.com/\",\n                \"name\": \"PM 5 sensor\",\n                \"properties\": null,\n                \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(5)/Datastreams\"\n            },\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)/Thing\"\n        },\n        {\n            \"@iot.id\": \"10\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)\",\n            \"description\": \"Air quality Number ten\",\n            \"name\": \"air_quality_readings10\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"observedArea\": null,\n            \"phenomenonTime\": null,\n            \"properties\": null,\n            \"resultTime\": null,\n            \"unitOfMeasurement\": {\n                \"name\": \"PM 2.5 Particulates (ug/m3)\",\n                \"symbol\": \"μg/m³\",\n                \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n            },\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)/Observations\",\n            \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)/ObservedProperty\",\n            \"Sensor\": {\n                \"@iot.id\": \"5\",\n                \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(5)\",\n                \"description\": \"PM sensor Number five\",\n                \"encodingType\": \"application/pdf\",\n                \"metadata\": \"http://particle-sensor.com/\",\n                \"name\": \"PM 5 sensor\",\n                \"properties\": null,\n                \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(5)/Datastreams\"\n            },\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)/Thing\"\n        }\n    ],\n    \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(6)/HistoricalLocation\",\n    \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(6)/Locations\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocQuery.js",
    "groupTitle": "Query"
  },
  {
    "type": "get",
    "url": "/Things(:id)",
    "title": "[12] Expand.",
    "version": "1.0.0",
    "name": "GetExpandDatastreamsThings",
    "group": "Query",
    "description": "<p>Use $expand query option to request inline information for related entities of the requested entity collection..</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things(6)?$expand=Datastreams",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Things(6?$expand=Datastreams"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"6\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Things(6)\",\n    \"description\": \"A SensorWeb thing Number six\",\n    \"name\": \"SensorWebThing 6\",\n    \"properties\": {\n        \"owner\": \"Mozilla version zero\",\n        \"organization\": \"Mozilla\"\n    },\n    \"Datastreams\": [\n        {\n            \"@iot.id\": \"8\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)\",\n            \"description\": \"Air quality Number eight\",\n            \"name\": \"air_quality_readings8\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"observedArea\": null,\n            \"phenomenonTime\": null,\n            \"properties\": null,\n            \"resultTime\": null,\n            \"unitOfMeasurement\": {\n                \"name\": \"PM 2.5 Particulates (ug/m3)\",\n                \"symbol\": \"μg/m³\",\n                \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n            },\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)/Observations\",\n            \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)/ObservedProperty\",\n            \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)/Sensor\",\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(8)/Thing\"\n        },\n        {\n            \"@iot.id\": \"9\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)\",\n            \"description\": \"Air quality Number nine\",\n            \"name\": \"air_quality_readings9\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"observedArea\": null,\n            \"phenomenonTime\": null,\n            \"properties\": null,\n            \"resultTime\": null,\n            \"unitOfMeasurement\": {\n                \"name\": \"PM 2.5 Particulates (ug/m3)\",\n                \"symbol\": \"μg/m³\",\n                \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n            },\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)/Observations\",\n            \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)/ObservedProperty\",\n            \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)/Sensor\",\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(9)/Thing\"\n        },\n        {\n            \"@iot.id\": \"10\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)\",\n            \"description\": \"Air quality Number ten\",\n            \"name\": \"air_quality_readings10\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"observedArea\": null,\n            \"phenomenonTime\": null,\n            \"properties\": null,\n            \"resultTime\": null,\n            \"unitOfMeasurement\": {\n                \"name\": \"PM 2.5 Particulates (ug/m3)\",\n                \"symbol\": \"μg/m³\",\n                \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n            },\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)/Observations\",\n            \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)/ObservedProperty\",\n            \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)/Sensor\",\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(10)/Thing\"\n        }\n    ],\n    \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(6)/HistoricalLocation\",\n    \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(6)/Locations\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocQuery.js",
    "groupTitle": "Query"
  },
  {
    "type": "get",
    "url": "/Observations",
    "title": "[21] lt.",
    "version": "1.0.0",
    "name": "GetLessObservations",
    "group": "Query",
    "description": "<p>Use $filter query option to perform conditional operations on the property values and filter request result.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Observations?$filter=result lt 45",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Observations?$filter=result lt 45"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"10\",\n    \"value\": [\n        {\n            \"@iot.id\": \"1\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T11:04:15.790Z\",\n            \"result\": 11.6666666666667,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T11:04:15.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)/FeatureOfInterest\"\n        },\n        {\n            \"@iot.id\": \"3\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(3)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T08:15:15.790Z\",\n            \"result\": 8.75,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T16:30:30.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(3)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(3)/FeatureOfInterest\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\"\"",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocQuery.js",
    "groupTitle": "Query"
  },
  {
    "type": "get",
    "url": "/Things",
    "title": "[17] OrderBy.",
    "version": "1.0.0",
    "name": "GetOrderByThings",
    "group": "Query",
    "description": "<p>Use $orderby query option to sort the response based on properties of requested entity in ascending (asc) or descending (desc) order.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things?$orderby=name desc",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Things?$orderby=name desc"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"13\",\n    \"value\": [\n        {\n            \"@iot.id\": \"13\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Things(13)\",\n            \"description\": \"Sensor (POST with existing Location)\",\n            \"name\": \"Temperature Monitoring System\",\n            \"properties\": {\n                \"Case Used\": \"Radiation shield\",\n                \"Deployment Condition\": \"Deployed in a third floor balcony\"\n            },\n            \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(13)/Datastreams\",\n            \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(13)/HistoricalLocation\",\n            \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(13)/Locations\"\n        },\n        {\n            \"@iot.id\": \"12\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Things(12)\",\n            \"description\": \"Thing (POST with new Location)\",\n            \"name\": \"Temperature Monitoring System\",\n            \"properties\": {\n                \"Case Used\": \"Radiation shield\",\n                \"Deployment Condition\": \"Deployed in a third floor balcony\"\n            },\n            \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(12)/Datastreams\",\n            \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(12)/HistoricalLocation\",\n            \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(12)/Locations\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocQuery.js",
    "groupTitle": "Query"
  },
  {
    "type": "get",
    "url": "/Things(:id)",
    "title": "[15] Select.",
    "version": "1.0.0",
    "name": "GetSelect",
    "group": "Query",
    "description": "<p>Retrieve specified properties for a specific Things.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things(1)?$select=description",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Things(1?$select=description"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"description\": \"A SensorWeb thing Number one\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocQuery.js",
    "groupTitle": "Query"
  },
  {
    "type": "get",
    "url": "/Things(:id)",
    "title": "[16] Select multi.",
    "version": "1.0.0",
    "name": "GetSelectMulti",
    "group": "Query",
    "description": "<p>Retrieve name and description for Things.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things?$select=name,description",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Things?$select=name,description"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"13\",\n    \"value\": [\n        {\n            \"description\": \"A SensorWeb thing\",\n            \"name\": \"SensorWebThing\",\n            \"Datastreams@iot.navigationLink\": \"undefined/Datastreams\",\n            \"HistoricalLocation@iot.navigationLink\": \"undefined/HistoricalLocation\",\n            \"Locations@iot.navigationLink\": \"undefined/Locations\"\n        },\n        {\n            \"description\": \"A SensorWeb thing Number one\",\n            \"name\": \"SensorWebThing 1\",\n            \"Datastreams@iot.navigationLink\": \"undefined/Datastreams\",\n            \"HistoricalLocation@iot.navigationLink\": \"undefined/HistoricalLocation\",\n            \"Locations@iot.navigationLink\": \"undefined/Locations\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocQuery.js",
    "groupTitle": "Query"
  },
  {
    "type": "get",
    "url": "/Observations",
    "title": "[19] Skip.",
    "version": "1.0.0",
    "name": "GetSelectMultiThings",
    "group": "Query",
    "description": "<p>Use $skip to specify the number of entities that should be skipped before returning the requested entities.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Observations?$skip=3",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Observations?$skip=3"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"13\",\n    \"value\": [\n        {\n            \"@iot.id\": \"5\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(5)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T02:15:15.790Z\",\n            \"result\": 35,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T11:30:30.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(5)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(5)/FeatureOfInterest\"\n        },\n        {\n            \"@iot.id\": \"6\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(6)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T01:15:15.790Z\",\n            \"result\": 17.5,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T17:30:30.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(6)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(6)/FeatureOfInterest\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocQuery.js",
    "groupTitle": "Query"
  },
  {
    "type": "get",
    "url": "/Observations",
    "title": "[18] Top.",
    "version": "1.0.0",
    "name": "GetTopObservations",
    "group": "Query",
    "description": "<p>Use $top query option to limit the number of requested entities.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Observations?$top=5",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Observations?$top=5"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"5\",\n    \"value\": [\n        {\n            \"@iot.id\": \"1\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T11:04:15.790Z\",\n            \"result\": 11.6666666666667,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T11:04:15.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(1)/FeatureOfInterest\"\n        },\n        {\n            \"@iot.id\": \"3\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(3)\",\n            \"parameters\": null,\n            \"phenomenonTime\": \"2016-11-18T08:15:15.790Z\",\n            \"result\": 8.75,\n            \"resultQuality\": null,\n            \"resultTime\": \"2016-11-18T16:30:30.790Z\",\n            \"validTime\": null,\n            \"Datastream@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(3)/Datastream\",\n            \"FeatureOfInterest@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Observations(3)/FeatureOfInterest\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocQuery.js",
    "groupTitle": "Query"
  },
  {
    "type": "infos",
    "url": "Query",
    "title": "[11] infos.",
    "version": "1.0.0",
    "name": "QueryInfos",
    "group": "Query",
    "description": "<p>The use of query options allows refining the requests to help get the required information about the SensorThings entities in an easy and efficient manner. Each of the listed query options are available for each SensorThings entity, however the options for each may differ.<br> SensorThings query options can be categorized to two different groups.<br> -  The first group specifies the properties to be returned by the request. $expand and $select are query options of this group.<br> -  The second group is limiting, filtering, or re-ordering the request results. This group contains $orderby, $top, $skip, $count, and $filter.</p>",
    "filename": "C:/api/src/test/apiDocs/apiDocQuery.js",
    "groupTitle": "Query"
  },
  {
    "type": "get",
    "url": "/",
    "title": "[0] resource path.",
    "version": "1.0.0",
    "name": "GetPaths",
    "group": "Root",
    "description": "<p>Access to all resources begins at the base resource path.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Datastreams",
            "description": "<p>Get all datastreams.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "MultiDatastreams",
            "description": "<p>Get all multidatastreams.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "FeaturesOfInterest",
            "description": "<p>Get all features of interest.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "HistoricalLocation",
            "description": "<p>Get all historical locations.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Locations",
            "description": "<p>Get all locations.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Observations",
            "description": "<p>Get all observations.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "ObservedProperties",
            "description": "<p>Get all observed property.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Sensors",
            "description": "<p>Get all sensors.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Things",
            "description": "<p>Get all things.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"value\": [\n        {\n            \"name\": \"Datastreams\",\n            \"url\": \"http://127.0.0.1:61621/v1.0/Datastreams\"\n        },\n        {\n            \"name\": \"Multidatastreams\",\n            \"url\": \"http://127.0.0.1:61621/v1.0/Multidatastreams\"\n        },\n        {\n            \"name\": \"multidatastreamobservedproperty\",\n            \"url\": \"http://127.0.0.1:61621/v1.0/MultiDatastreamObservedproperties\"\n        },\n        {\n            \"name\": \"FeaturesOfInterest\",\n            \"url\": \"http://127.0.0.1:61621/v1.0/FeaturesOfInterest\"\n        },\n        {\n            \"name\": \"HistoricalLocations\",\n            \"url\": \"http://127.0.0.1:61621/v1.0/HistoricalLocations\"\n        },\n        {\n            \"name\": \"Locations\",\n            \"url\": \"http://127.0.0.1:61621/v1.0/Locations\"\n        },\n        {\n            \"name\": \"Observations\",\n            \"url\": \"http://127.0.0.1:61621/v1.0/Observations\"\n        },\n        {\n            \"name\": \"ObservedProperties\",\n            \"url\": \"http://127.0.0.1:61621/v1.0/ObservedProperties\"\n        },\n        {\n            \"name\": \"Sensors\",\n            \"url\": \"http://127.0.0.1:61621/v1.0/Sensors\"\n        },\n        {\n            \"name\": \"Things\",\n            \"url\": \"http://127.0.0.1:61621/v1.0/Things\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/"
      }
    ],
    "filename": "C:/api/src/test/apiDocs/apiDocRoot.js",
    "groupTitle": "Root"
  },
  {
    "type": "delete",
    "url": "/Sensors",
    "title": "[9] one.",
    "version": "1.0.0",
    "name": "DeleteSensors",
    "group": "Sensors",
    "description": "<p>Delete a sensor.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocSensors.js",
    "groupTitle": "Sensors"
  },
  {
    "type": "get",
    "url": "/Sensors",
    "title": "[3] all.",
    "version": "1.0.0",
    "name": "GetAllSensors",
    "group": "Sensors",
    "description": "<p>Retrieve all Sensors.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Sensors",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>@iot.id</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "selfLink",
            "description": "<p>@iot.selfLink</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>A property provides a label for FeatureOfInterest entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>The definition of the observed property.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "encodingType",
            "description": "<p>The encoding type of the feature property.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "metadata",
            "description": "<p>The encoding type of the feature property.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSONObject",
            "optional": false,
            "field": "properties",
            "description": "<p>The detailed description of the feature. The data type is defined by encodingType.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Datastreams",
            "description": "<p>Datastreams@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"7\",\n    \"value\": [\n        {\n            \"@iot.id\": \"1\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(1)\",\n            \"description\": \"PM sensor Number one\",\n            \"encodingType\": \"application/pdf\",\n            \"metadata\": \"http://particle-sensor.com/\",\n            \"name\": \"PM 1 sensor\",\n            \"properties\": null,\n            \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(1)/Datastreams\"\n        },\n        {\n            \"@iot.id\": \"2\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(2)\",\n            \"description\": \"PM sensor Number two\",\n            \"encodingType\": \"application/pdf\",\n            \"metadata\": \"http://particle-sensor.com/\",\n            \"name\": \"PM 2 sensor\",\n            \"properties\": null,\n            \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(2)/Datastreams\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Sensors"
      }
    ],
    "filename": "C:/api/src/test/apiDocs/apiDocSensors.js",
    "groupTitle": "Sensors"
  },
  {
    "type": "get",
    "url": "/Sensors(:id)",
    "title": "[5] Expands.",
    "version": "1.0.0",
    "name": "GetExpandDatastreamsSensors",
    "group": "Sensors",
    "description": "<p>Get a specific Sensors and expand Datastreams.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Sensors(1)?$expand=Datastreams",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Sensors(1?$expand=Datastreams"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"1\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(1)\",\n    \"description\": \"PM sensor Number one\",\n    \"encodingType\": \"application/pdf\",\n    \"metadata\": \"http://particle-sensor.com/\",\n    \"name\": \"PM 1 sensor\",\n    \"properties\": null,\n    \"Datastreams\": [\n        {\n            \"@iot.id\": \"12\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(12)\",\n            \"description\": \"Air quality readings\",\n            \"name\": \"air_quality_readings\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"observedArea\": null,\n            \"phenomenonTime\": null,\n            \"properties\": null,\n            \"resultTime\": null,\n            \"unitOfMeasurement\": {\n                \"name\": \"PM 2.5 Particulates (ug/m3)\",\n                \"symbol\": \"μg/m³\",\n                \"definition\": \"http://unitsofmeasure.org/ucum.html\"\n            },\n            \"Observations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(12)/Observations\",\n            \"ObservedProperty@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(12)/ObservedProperty\",\n            \"Sensor@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(12)/Sensor\",\n            \"Thing@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Datastreams(12)/Thing\"\n        },\n        null,\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocSensors.js",
    "groupTitle": "Sensors"
  },
  {
    "type": "get",
    "url": "/Sensors(:id)",
    "title": "[6] Select.",
    "version": "1.0.0",
    "name": "GetSelectDescriptionSensors",
    "group": "Sensors",
    "description": "<p>Retrieve specified properties for a specific Sensors.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Sensors(1)?$select=description",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Sensors(1?$select=description"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"description\": \"PM sensor Number one\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocSensors.js",
    "groupTitle": "Sensors"
  },
  {
    "type": "get",
    "url": "/Sensors(:id)",
    "title": "[4] one.",
    "version": "1.0.0",
    "name": "GetSensors",
    "group": "Sensors",
    "description": "<p>Get a specific sensor.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Sensors(1)",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Sensors(1"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"1\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(1)\",\n    \"description\": \"PM sensor Number one\",\n    \"encodingType\": \"application/pdf\",\n    \"metadata\": \"http://particle-sensor.com/\",\n    \"name\": \"PM 1 sensor\",\n    \"properties\": null,\n    \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(1)/Datastreams\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"id : 9007199254740991 not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocSensors.js",
    "groupTitle": "Sensors"
  },
  {
    "type": "patch",
    "url": "/Sensors",
    "title": "[8] one.",
    "version": "1.0.0",
    "name": "PatchSensors",
    "group": "Sensors",
    "description": "<p>Patch a sensor.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name of the Thing.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the Thing.</p>"
          },
          {
            "group": "Parameter",
            "type": "ValueCode",
            "optional": false,
            "field": "encodingType",
            "description": "<p>encodingType ValueCode.</p>"
          },
          {
            "group": "Parameter",
            "type": "metadata",
            "optional": false,
            "field": "metadata",
            "description": "<p>depending on the value of the encodingType</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"description\": \"This is a new PM 2.5 sensor\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"8\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(8)\",\n    \"description\": \"This is a new PM 2.5 sensor\",\n    \"encodingType\": \"application/pdf\",\n    \"metadata\": \"http://particle-sensor.com/\",\n    \"name\": \"PM25sensor\",\n    \"properties\": null,\n    \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(8)/Datastreams\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"No id found for : 9007199254740991\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocSensors.js",
    "groupTitle": "Sensors"
  },
  {
    "type": "post",
    "url": "/Sensors",
    "title": "[2] basic.",
    "version": "1.0.0",
    "name": "PostSensors",
    "group": "Sensors",
    "description": "<p>Post a new sensor.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Sensors",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name of the Thing.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the Thing.</p>"
          },
          {
            "group": "Parameter",
            "type": "ValueCode",
            "optional": false,
            "field": "encodingType",
            "description": "<p>encodingType ValueCode.</p>"
          },
          {
            "group": "Parameter",
            "type": "metadata",
            "optional": false,
            "field": "metadata",
            "description": "<p>depending on the value of the encodingType</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"description\": \"PM 2.5 sensor\",\n    \"name\": \"PM25sensor\",\n    \"encodingType\": \"application/pdf\",\n    \"metadata\": \"http://particle-sensor.com/\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"8\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(8)\",\n    \"description\": \"PM 2.5 sensor\",\n    \"encodingType\": \"application/pdf\",\n    \"metadata\": \"http://particle-sensor.com/\",\n    \"name\": \"PM25sensor\",\n    \"properties\": null,\n    \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Sensors(8)/Datastreams\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Bad Request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocSensors.js",
    "groupTitle": "Sensors"
  },
  {
    "type": "infos",
    "url": "/Sensors",
    "title": "[1] infos.",
    "version": "1.0.0",
    "name": "Sensors_Infos",
    "group": "Sensors",
    "description": "<p>A Sensor in SensorThings API is an instrument that observes a property or phenomenon with the goal of producing an estimate of the value of the property.</p>",
    "filename": "C:/api/src/test/apiDocs/apiDocSensors.js",
    "groupTitle": "Sensors"
  },
  {
    "type": "delete",
    "url": "/Things",
    "title": "[22] one.",
    "version": "1.0.0",
    "name": "DeleteThings",
    "group": "Things",
    "description": "<p>Delete a Things.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things(15)",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocThings.js",
    "groupTitle": "Things"
  },
  {
    "type": "get",
    "url": "/Things",
    "title": "[12] all.",
    "version": "1.0.0",
    "name": "GetAllThings",
    "group": "Things",
    "description": "<p>Retrieve all Things.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>@iot.id</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "selfLink",
            "description": "<p>@iot.selfLink</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>This is a short description of the corresponding Thing entity.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>A property provides a label for Thing entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSONObject",
            "optional": false,
            "field": "properties",
            "description": "<p>A JSON Object containing user-annotated properties as key-value pairs.</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Locations",
            "description": "<p>Locations@iot.navigationLink</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "HistoricalLocation",
            "description": "<p>HistoricalLocation@iot.navigationLink</p>"
          },
          {
            "group": "Success 200",
            "type": "relation",
            "optional": false,
            "field": "Datastreams",
            "description": "<p>Datastreams@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.count\": \"10\",\n    \"value\": [\n        {\n            \"@iot.id\": \"1\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Things(1)\",\n            \"description\": \"A SensorWeb thing Number one\",\n            \"name\": \"SensorWebThing 1\",\n            \"properties\": {\n                \"owner\": \"Mozilla version zero\",\n                \"organization\": \"Mozilla\"\n            },\n            \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(1)/Datastreams\",\n            \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(1)/HistoricalLocation\",\n            \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(1)/Locations\"\n        },\n        {\n            \"@iot.id\": \"2\",\n            \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Things(2)\",\n            \"description\": \"A SensorWeb thing Number two\",\n            \"name\": \"SensorWebThing 2\",\n            \"properties\": {\n                \"owner\": \"Mozilla version one\",\n                \"organization\": \"Mozilla\"\n            },\n            \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(2)/Datastreams\",\n            \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(2)/HistoricalLocation\",\n            \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(2)/Locations\"\n        },\n        \"...\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Things"
      }
    ],
    "filename": "C:/api/src/test/apiDocs/apiDocThings.js",
    "groupTitle": "Things"
  },
  {
    "type": "get",
    "url": "/Things(:id)",
    "title": "[14] property name.",
    "version": "1.0.0",
    "name": "GetNameThings",
    "group": "Things",
    "description": "<p>Get the name of a specific Things.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things(1)/name",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Things(1/name"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\": \"SensorWebThing 1\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocThings.js",
    "groupTitle": "Things"
  },
  {
    "type": "get",
    "url": "/Things(:id)",
    "title": "[15] value of property name.",
    "version": "1.0.0",
    "name": "GetNameValueThings",
    "group": "Things",
    "description": "<p>Get the value of the property name of a specific Things.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things(1)/name/$value",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Things(1/name/$value"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "SensorWebThing 1",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocThings.js",
    "groupTitle": "Things"
  },
  {
    "type": "get",
    "url": "/Things(:id)",
    "title": "[13] one.",
    "version": "1.0.0",
    "name": "GetThings",
    "group": "Things",
    "description": "<p>Get a specific Things.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things(1)",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://sensorthings.geosas.fr/v1.0/Things(1"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"1\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Things(1)\",\n    \"description\": \"A SensorWeb thing Number one\",\n    \"name\": \"SensorWebThing 1\",\n    \"properties\": {\n        \"owner\": \"Mozilla version zero\",\n        \"organization\": \"Mozilla\"\n    },\n    \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(1)/Datastreams\",\n    \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(1)/HistoricalLocation\",\n    \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(1)/Locations\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"id : 9007199254740991 not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocThings.js",
    "groupTitle": "Things"
  },
  {
    "type": "patch",
    "url": "/Things",
    "title": "[21] and change Location.",
    "version": "1.0.0",
    "name": "PatchLocationThings",
    "group": "Things",
    "description": "<p>Patch a thing and location change.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things(15)",
        "type": "js"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"New SensorWebThing back\",\n    \"properties\": {\n        \"organization\": \"Mozilla\",\n        \"owner\": \"Mozilla\"\n    },\n    \"Locations\": [\n        {\n            \"@iot.id\": 10\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"15\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Things(15)\",\n    \"description\": \"Sensor system monitoring area temperature Hot\",\n    \"name\": \"New SensorWebThing back\",\n    \"properties\": {\n        \"owner\": \"Mozilla\",\n        \"organization\": \"Mozilla\"\n    },\n    \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(15)/Datastreams\",\n    \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(15)/HistoricalLocation\",\n    \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(15)/Locations\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocThings.js",
    "groupTitle": "Things"
  },
  {
    "type": "patch",
    "url": "/Things",
    "title": "[20] one.",
    "version": "1.0.0",
    "name": "PatchThings",
    "group": "Things",
    "description": "<p>Patch a thing.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things(15)",
        "type": "js"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"New SensorWebThing Patch\",\n    \"properties\": {\n        \"organization\": \"Mozilla\",\n        \"owner\": \"Mozilla\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"15\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Things(15)\",\n    \"description\": \"Sensor system monitoring area temperature Hot\",\n    \"name\": \"New SensorWebThing Patch\",\n    \"properties\": {\n        \"owner\": \"Mozilla\",\n        \"organization\": \"Mozilla\"\n    },\n    \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(15)/Datastreams\",\n    \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(15)/HistoricalLocation\",\n    \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(15)/Locations\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Not Found\",\n    \"detail\": \"No id found for : 9007199254740991\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocThings.js",
    "groupTitle": "Things"
  },
  {
    "type": "post",
    "url": "/Things",
    "title": "[18] with existing Location.",
    "version": "1.0.0",
    "name": "PostThingExistLocation",
    "group": "Things",
    "description": "<p>Create a thing with existing location.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>This is a short description of the corresponding Thing entity.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>A property provides a label for Thing entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "properties",
            "description": "<p>A JSON Object containing user-annotated properties as key-value pairs.</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Locations",
            "description": "<p>Locations@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "HistoricalLocation",
            "description": "<p>HistoricalLocation@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Datastreams",
            "description": "<p>Datastreams@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Temperature Monitoring System\",\n    \"description\": \"Sensor (POST with existing Location)\",\n    \"properties\": {\n        \"Deployment Condition\": \"Deployed in a third floor balcony\",\n        \"Case Used\": \"Radiation shield\"\n    },\n    \"Locations\": [\n        {\n            \"@iot.id\": \"1\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"13\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Things(13)\",\n    \"description\": \"Sensor (POST with existing Location)\",\n    \"name\": \"Temperature Monitoring System\",\n    \"properties\": {\n        \"Case Used\": \"Radiation shield\",\n        \"Deployment Condition\": \"Deployed in a third floor balcony\"\n    },\n    \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(13)/Datastreams\",\n    \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(13)/HistoricalLocation\",\n    \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(13)/Locations\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Bad Request\",\n    \"detail\": \"une instruction insert ou update sur la table « thing_location » viole la contrainte de clé\\nétrangère « thing_location_location_id_fkey »\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocThings.js",
    "groupTitle": "Things"
  },
  {
    "type": "post",
    "url": "/Things",
    "title": "[19] with Location and Datastream.",
    "version": "1.0.0",
    "name": "PostThingLocationDatastream",
    "group": "Things",
    "description": "<p>Create a thing with new location &amp; datastream.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>This is a short description of the corresponding Thing entity.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>A property provides a label for Thing entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "properties",
            "description": "<p>A JSON Object containing user-annotated properties as key-value pairs.</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Locations",
            "description": "<p>Locations@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "HistoricalLocation",
            "description": "<p>HistoricalLocation@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Datastreams",
            "description": "<p>Datastreams@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Temperature Monitoring System\",\n    \"description\": \"Sensor system monitoring area temperature Hot\",\n    \"properties\": {\n        \"Deployment Condition\": \"Deployed in a third floor balcony\",\n        \"Case Used\": \"Radiation shield\"\n    },\n    \"Locations\": [\n        {\n            \"name\": \"UofC CCIT\",\n            \"description\": \"University of Calgary, CCIT building\",\n            \"encodingType\": \"application/vnd.geo+json\",\n            \"location\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    -114.133,\n                    51.08\n                ]\n            }\n        }\n    ],\n    \"Datastreams\": [\n        {\n            \"name\": \"Air Temperature DS\",\n            \"description\": \"Datastream for recording temperature\",\n            \"observationType\": \"http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement\",\n            \"unitOfMeasurement\": {\n                \"name\": \"Degree Celsius\",\n                \"symbol\": \"degC\",\n                \"definition\": \"http://www.qudt.org/qudt/owl/1.0.0/unit/Instances.html#DegreeCelsius\"\n            },\n            \"ObservedProperty\": {\n                \"name\": \"Area Temperature\",\n                \"description\": \"The degree or intensity of heat present in the area\",\n                \"definition\": \"http://www.qudt.org/qudt/owl/1.0.0/quantity/Instances.html#AreaTemperature\"\n            },\n            \"Sensor\": {\n                \"name\": \"DHT22\",\n                \"description\": \"DHT22 temperature sensor\",\n                \"encodingType\": \"application/pdf\",\n                \"metadata\": \"https://cdn-shop.adafruit.com/datasheets/DHT22.pdf\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"15\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Things(15)\",\n    \"description\": \"Sensor system monitoring area temperature Hot\",\n    \"name\": \"Temperature Monitoring System\",\n    \"properties\": {\n        \"Case Used\": \"Radiation shield\",\n        \"Deployment Condition\": \"Deployed in a third floor balcony\"\n    },\n    \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(15)/Datastreams\",\n    \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(15)/HistoricalLocation\",\n    \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(15)/Locations\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Bad Request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocThings.js",
    "groupTitle": "Things"
  },
  {
    "type": "post",
    "url": "/Things",
    "title": "[16] basic.",
    "version": "1.0.0",
    "name": "PostThings",
    "group": "Things",
    "description": "<p>Post a new thing.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>This is a short description of the corresponding Thing entity.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>A property provides a label for Thing entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "properties",
            "description": "<p>A JSON Object containing user-annotated properties as key-value pairs.</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Locations",
            "description": "<p>Locations@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "HistoricalLocation",
            "description": "<p>HistoricalLocation@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Datastreams",
            "description": "<p>Datastreams@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"description\": \"A SensorWeb thing\",\n    \"name\": \"SensorWebThing\",\n    \"properties\": {\n        \"organization\": \"Mozilla\",\n        \"owner\": \"Mozilla\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"11\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Things(11)\",\n    \"description\": \"A SensorWeb thing\",\n    \"name\": \"SensorWebThing\",\n    \"properties\": {\n        \"owner\": \"Mozilla\",\n        \"organization\": \"Mozilla\"\n    },\n    \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(11)/Datastreams\",\n    \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(11)/HistoricalLocation\",\n    \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(11)/Locations\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocThings.js",
    "groupTitle": "Things"
  },
  {
    "type": "post",
    "url": "/Things",
    "title": "[17] with new Location.",
    "version": "1.0.0",
    "name": "PostThingsLocation",
    "group": "Things",
    "description": "<p>A Location entity can be linked to a Thing at its creation time. The Location provided will be a new Location in the system.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/v1.0/Things",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>This is a short description of the corresponding Thing entity.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>A property provides a label for Thing entity, commonly a descriptive name.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "optional": true,
            "field": "properties",
            "description": "<p>A JSON Object containing user-annotated properties as key-value pairs.</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Locations",
            "description": "<p>Locations@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "HistoricalLocation",
            "description": "<p>HistoricalLocation@iot.navigationLink</p>"
          },
          {
            "group": "Parameter",
            "type": "relation",
            "optional": true,
            "field": "Datastreams",
            "description": "<p>Datastreams@iot.navigationLink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Temperature Monitoring System\",\n    \"description\": \"Thing (POST with new Location)\",\n    \"properties\": {\n        \"Deployment Condition\": \"Deployed in a third floor balcony\",\n        \"Case Used\": \"Radiation shield\"\n    },\n    \"Locations\": [\n        {\n            \"name\": \"UofC (Created new location)\",\n            \"description\": \"University of Calgary, CCIT building\",\n            \"encodingType\": \"application/vnd.geo+json\",\n            \"location\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    -114.133,\n                    51.08\n                ]\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"@iot.id\": \"12\",\n    \"@iot.selfLink\": \"http://sensorthings.geosas.fr/v1.0/Things(12)\",\n    \"description\": \"Thing (POST with new Location)\",\n    \"name\": \"Temperature Monitoring System\",\n    \"properties\": {\n        \"Case Used\": \"Radiation shield\",\n        \"Deployment Condition\": \"Deployed in a third floor balcony\"\n    },\n    \"Datastreams@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(12)/Datastreams\",\n    \"HistoricalLocation@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(12)/HistoricalLocation\",\n    \"Locations@iot.navigationLink\": \"http://sensorthings.geosas.fr/v1.0/Things(12)/Locations\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/api/src/test/apiDocs/apiDocThings.js",
    "groupTitle": "Things"
  },
  {
    "type": "infos",
    "url": "/Things",
    "title": "[11] infos.",
    "version": "1.0.0",
    "name": "Things_Infos",
    "group": "Things",
    "description": "<p>A Thing is an object of the physical world (physical Things) or the information world (virtual Things) that is capable of being identified and integrated into communication networks<br> Thing is a good starting point to start creating the SensorThings model structure.<br> <br> A Thing has Locations and one or more Datastreams to collect Observations. A minimal Thing can be created without a Location and Datastream and there are options to create a Things with a nested linked Location and Datastream.</p>",
    "filename": "C:/api/src/test/apiDocs/apiDocThings.js",
    "groupTitle": "Things"
  }
] });