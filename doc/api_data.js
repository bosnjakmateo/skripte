define({ "api": [
  {
    "type": "delete",
    "url": "cities/",
    "title": "Delete all cities",
    "name": "DeleteCities",
    "group": "City",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Cities deleted",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No cities to delete",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/cities.js",
    "groupTitle": "City"
  },
  {
    "type": "delete",
    "url": "cities/:id",
    "title": "Delete a city",
    "name": "DeleteCity",
    "group": "City",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>City id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "City deleted",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "City to delete not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/cities.js",
    "groupTitle": "City"
  },
  {
    "type": "get",
    "url": "cities/",
    "title": "Get all cities",
    "name": "GetCities",
    "group": "City",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No cities were found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/cities.js",
    "groupTitle": "City",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>City id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>City name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "cities/:id",
    "title": "Get city by id",
    "name": "GetCity",
    "group": "City",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>City id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No city was found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/cities.js",
    "groupTitle": "City",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>City id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>City name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "cities/:id",
    "title": "Patch a city",
    "name": "PatchCity",
    "group": "City",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>City id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "City to update not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/cities.js",
    "groupTitle": "City",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>City id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>City name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "cities/",
    "title": "Add a city",
    "name": "PostCity",
    "group": "City",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>City name 3-50 chars</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "City already exists",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/cities.js",
    "groupTitle": "City",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>City id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>City name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "colleges/:id",
    "title": "Delete a college",
    "name": "DeleteCollege",
    "group": "College",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>College id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "College deleted",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "College to delete not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/colleges.js",
    "groupTitle": "College"
  },
  {
    "type": "delete",
    "url": "colleges/",
    "title": "Delete all colleges",
    "name": "DeleteColleges",
    "group": "College",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Colleges deleted",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No colleges to delete",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/colleges.js",
    "groupTitle": "College"
  },
  {
    "type": "get",
    "url": "colleges/:id",
    "title": "Get a college",
    "name": "GetCollege",
    "group": "College",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>College id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No college was found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/colleges.js",
    "groupTitle": "College",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>City id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>City name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "colleges/",
    "title": "Get all colleges",
    "name": "GetColleges",
    "group": "College",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No colleges where found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/colleges.js",
    "groupTitle": "College",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>City id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>City name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "colleges/:id",
    "title": "Patch a college",
    "name": "PatchCollege",
    "group": "College",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>College id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "5-50",
            "optional": false,
            "field": "name",
            "description": "<p>College name</p>"
          },
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "_city",
            "description": "<p>City id</p>"
          },
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "_university",
            "description": "<p>University id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "College to update not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/colleges.js",
    "groupTitle": "College",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>City id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>City name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "colleges/",
    "title": "Add a college",
    "name": "PostCollege",
    "group": "College",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "College already exists",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/colleges.js",
    "groupTitle": "College",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "5-50",
            "optional": false,
            "field": "name",
            "description": "<p>College name</p>"
          },
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "_city",
            "description": "<p>City id</p>"
          },
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "_university",
            "description": "<p>University id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>City id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>City name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "scripts/:id",
    "title": "Delete a script",
    "name": "DeleteScript",
    "group": "Script",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Script id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Script deleted",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Script to delete not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/scripts.js",
    "groupTitle": "Script"
  },
  {
    "type": "delete",
    "url": "scripts/",
    "title": "Delete all scripts",
    "name": "DeleteScripts",
    "group": "Script",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Scripts deleted",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No scripts to delete",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/scripts.js",
    "groupTitle": "Script"
  },
  {
    "type": "get",
    "url": "scripts/:id",
    "title": "Get a script",
    "name": "GetScript",
    "group": "Script",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Script id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No script was found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/scripts.js",
    "groupTitle": "Script",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "size": "5-50",
            "allowedValues": [
              "\"small\""
            ],
            "optional": false,
            "field": "title",
            "description": "<p>Script title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "5-200",
            "optional": false,
            "field": "description",
            "description": "<p>Script description</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "likes",
            "description": "<p>Script likes</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "likes._user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "dislikes",
            "description": "<p>Script dislikes</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "dislikes._user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "comments",
            "description": "<p>Script comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.text",
            "description": "<p>Comment text</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.user",
            "description": "<p>Comment user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.date",
            "description": "<p>Comment date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Script date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User who added script</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_subject",
            "description": "<p>Subject id</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "scripts/",
    "title": "Get scripts",
    "name": "GetScripts",
    "group": "Script",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No scripts where found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/scripts.js",
    "groupTitle": "Script",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "size": "5-50",
            "allowedValues": [
              "\"small\""
            ],
            "optional": false,
            "field": "title",
            "description": "<p>Script title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "5-200",
            "optional": false,
            "field": "description",
            "description": "<p>Script description</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "likes",
            "description": "<p>Script likes</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "likes._user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "dislikes",
            "description": "<p>Script dislikes</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "dislikes._user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "comments",
            "description": "<p>Script comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.text",
            "description": "<p>Comment text</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.user",
            "description": "<p>Comment user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.date",
            "description": "<p>Comment date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Script date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User who added script</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_subject",
            "description": "<p>Subject id</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "scripts/:id",
    "title": "Patch a script",
    "name": "PatchScript",
    "group": "Script",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Script id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Script to update not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/scripts.js",
    "groupTitle": "Script",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "size": "5-50",
            "allowedValues": [
              "\"small\""
            ],
            "optional": false,
            "field": "title",
            "description": "<p>Script title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "5-200",
            "optional": false,
            "field": "description",
            "description": "<p>Script description</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "likes",
            "description": "<p>Script likes</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "likes._user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "dislikes",
            "description": "<p>Script dislikes</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "dislikes._user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "comments",
            "description": "<p>Script comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.text",
            "description": "<p>Comment text</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.user",
            "description": "<p>Comment user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.date",
            "description": "<p>Comment date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Script date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User who added script</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_subject",
            "description": "<p>Subject id</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "scripts/comment/:id",
    "title": "Post a comment for a script",
    "name": "PostComment",
    "group": "Script",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Script id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Comment text</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No script found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/scripts.js",
    "groupTitle": "Script",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "size": "5-50",
            "allowedValues": [
              "\"small\""
            ],
            "optional": false,
            "field": "title",
            "description": "<p>Script title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "5-200",
            "optional": false,
            "field": "description",
            "description": "<p>Script description</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "likes",
            "description": "<p>Script likes</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "likes._user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "dislikes",
            "description": "<p>Script dislikes</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "dislikes._user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "comments",
            "description": "<p>Script comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.text",
            "description": "<p>Comment text</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.user",
            "description": "<p>Comment user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.date",
            "description": "<p>Comment date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Script date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User who added script</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_subject",
            "description": "<p>Subject id</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "scripts/",
    "title": "Add a script",
    "name": "PostScript",
    "group": "Script",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "5-50",
            "optional": false,
            "field": "title",
            "description": "<p>Script title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "5-200",
            "optional": false,
            "field": "description",
            "description": "<p>Script description</p>"
          },
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "_subject",
            "description": "<p>Subject id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Script already exists",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/scripts.js",
    "groupTitle": "Script",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "size": "5-50",
            "allowedValues": [
              "\"small\""
            ],
            "optional": false,
            "field": "title",
            "description": "<p>Script title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "5-200",
            "optional": false,
            "field": "description",
            "description": "<p>Script description</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "likes",
            "description": "<p>Script likes</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "likes._user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "dislikes",
            "description": "<p>Script dislikes</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "dislikes._user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "comments",
            "description": "<p>Script comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.text",
            "description": "<p>Comment text</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.user",
            "description": "<p>Comment user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.date",
            "description": "<p>Comment date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Script date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User who added script</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_subject",
            "description": "<p>Subject id</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "subjects/",
    "title": "Delete all subjects",
    "name": "DeleteCities",
    "group": "Subject",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Cities deleted",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No subjects to delete",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/subjects.js",
    "groupTitle": "Subject"
  },
  {
    "type": "delete",
    "url": "subjects/:id",
    "title": "Delete a subject",
    "name": "DeleteCity",
    "group": "Subject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Subject id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Subject deleted",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Subject to delete not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/subjects.js",
    "groupTitle": "Subject"
  },
  {
    "type": "get",
    "url": "subjects/:id",
    "title": "Get subject by id",
    "name": "GetCity",
    "group": "Subject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Subject id</p>"
          },
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "_college",
            "description": "<p>College id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Subject id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Subject name</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No subject was found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/subjects.js",
    "groupTitle": "Subject"
  },
  {
    "type": "get",
    "url": "subjects/",
    "title": "Get all subjects",
    "name": "GetSubjects",
    "group": "Subject",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Subject id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Subject name</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "_college",
            "description": "<p>College id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No subjects were found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/subjects.js",
    "groupTitle": "Subject"
  },
  {
    "type": "patch",
    "url": "subjects/:id",
    "title": "Patch a subject",
    "name": "PatchCity",
    "group": "Subject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Subject id</p>"
          },
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "_college",
            "description": "<p>College id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Subject id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Subject name</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Subject to update not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/subjects.js",
    "groupTitle": "Subject"
  },
  {
    "type": "post",
    "url": "subjects/",
    "title": "Add a subject",
    "name": "PostSubject",
    "group": "Subject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Subject name 3-50 chars</p>"
          },
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "_college",
            "description": "<p>College id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Subject id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Subject name</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Subject already exists",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/subjects.js",
    "groupTitle": "Subject"
  },
  {
    "type": "delete",
    "url": "subjects/",
    "title": "Delete all universities",
    "name": "DeleteUniversities",
    "group": "University",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Universities deleted",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No universities to delete",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/universities.js",
    "groupTitle": "University"
  },
  {
    "type": "delete",
    "url": "universities/:id",
    "title": "Delete a university",
    "name": "DeleteUniversity",
    "group": "University",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>University id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "University deleted",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "University to delete not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/universities.js",
    "groupTitle": "University"
  },
  {
    "type": "get",
    "url": "universities/",
    "title": "Get all university",
    "name": "GetUniversities",
    "group": "University",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No universities where found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/universities.js",
    "groupTitle": "University",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>University id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>University name</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_city",
            "description": "<p>City name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "universities/:id",
    "title": "Get university by id",
    "name": "GetUniversity",
    "group": "University",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>University id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No university was found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/universities.js",
    "groupTitle": "University",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>University id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>University name</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_city",
            "description": "<p>City name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "universities/:id",
    "title": "Patch a university",
    "name": "PatchUniversity",
    "group": "University",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>University id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "5-50",
            "optional": false,
            "field": "name",
            "description": "<p>University name</p>"
          },
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "_city",
            "description": "<p>City name</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "University to update not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/universities.js",
    "groupTitle": "University",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>University id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>University name</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_city",
            "description": "<p>City name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "universities/",
    "title": "Add a university",
    "name": "PostUniversity",
    "group": "University",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "University already exists",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/universities.js",
    "groupTitle": "University",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "5-50",
            "optional": false,
            "field": "name",
            "description": "<p>University name</p>"
          },
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "_city",
            "description": "<p>City name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>University id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>University name</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_city",
            "description": "<p>City name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "users/current",
    "title": "Returns current user",
    "name": "CurrentUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Success 200",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "users/login",
    "title": "Login a user",
    "name": "LoginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6-30",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>Login success</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "defaultValue": "'Bearer' + token",
            "description": "<p>Login token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "User not found || Password incorrect",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "users/register",
    "title": "Regsiter a user",
    "name": "PostUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6-30",
            "optional": false,
            "field": "username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6-30",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Email already exists",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Success 200",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          }
        ]
      }
    }
  }
] });
