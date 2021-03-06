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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
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
    "url": "fields/:id",
    "title": "Delete a field",
    "name": "DeleteField",
    "group": "Field",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Field id</p>"
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
            "defaultValue": "Field deleted",
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
            "defaultValue": "Field to delete not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/fields.js",
    "groupTitle": "Field"
  },
  {
    "type": "delete",
    "url": "fields/",
    "title": "Delete all fields",
    "name": "DeleteFields",
    "group": "Field",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Fields deleted",
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
            "defaultValue": "No fields to delete",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/fields.js",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "fields/:id",
    "title": "Get field by id",
    "name": "GetField",
    "group": "Field",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Field id</p>"
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
            "defaultValue": "No field was found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/fields.js",
    "groupTitle": "Field",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Field id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Field name</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_college",
            "description": "<p>College name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "fields/",
    "title": "Get all fields",
    "name": "GetFields",
    "group": "Field",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "No fields were found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/fields.js",
    "groupTitle": "Field",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Field id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Field name</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_college",
            "description": "<p>College name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "fields/:id",
    "title": "Patch a field",
    "name": "PatchField",
    "group": "Field",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Field id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Field name</p>"
          },
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "_college",
            "description": "<p>College name</p>"
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
            "defaultValue": "Field to update not found",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/fields.js",
    "groupTitle": "Field",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Field id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Field name</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_college",
            "description": "<p>College name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "fields/",
    "title": "Add a field",
    "name": "PostField",
    "group": "Field",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Field name</p>"
          },
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "_college",
            "description": "<p>College name</p>"
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
            "defaultValue": "Field already exists",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/fields.js",
    "groupTitle": "Field",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>Field id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Field name</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_college",
            "description": "<p>College name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "scripts/comment/:id/:commentId",
    "title": "Delete a comment from a script",
    "name": "DeleteComment",
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
            "type": "CommentId",
            "optional": false,
            "field": "commentId",
            "description": "<p>Comment id</p>"
          }
        ]
      }
    },
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
            "field": "message",
            "defaultValue": "Comment deleted",
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
            "defaultValue": "No script found || No comment found",
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
    "type": "post",
    "url": "scripts/favorites/:id",
    "title": "Delete script from favorites",
    "name": "DeleteFavorite",
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
            "field": "message",
            "defaultValue": "Script deleted from favorites",
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
            "defaultValue": "Script not found/No script found",
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
            "optional": false,
            "field": "title",
            "description": "<p>Script title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "10-80",
            "optional": false,
            "field": "description",
            "description": "<p>Script description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pdfPath",
            "description": "<p>Script link from aws</p>"
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
            "optional": false,
            "field": "title",
            "description": "<p>Script title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "10-80",
            "optional": false,
            "field": "description",
            "description": "<p>Script description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pdfPath",
            "description": "<p>Script link from aws</p>"
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
          },
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
            "size": "10-80",
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
            "optional": false,
            "field": "title",
            "description": "<p>Script title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "10-80",
            "optional": false,
            "field": "description",
            "description": "<p>Script description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pdfPath",
            "description": "<p>Script link from aws</p>"
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
            "optional": false,
            "field": "title",
            "description": "<p>Script title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "10-80",
            "optional": false,
            "field": "description",
            "description": "<p>Script description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pdfPath",
            "description": "<p>Script link from aws</p>"
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
    "url": "scripts/favorites/:id",
    "title": "Add script to favorites",
    "name": "PostFavorite",
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
            "field": "message",
            "defaultValue": "Script added to favorites",
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
            "defaultValue": "Script not found || No script found || Script already added to favorites",
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
            "size": "10-80",
            "optional": false,
            "field": "description",
            "description": "<p>Script description</p>"
          },
          {
            "group": "Parameter",
            "type": "Url",
            "optional": false,
            "field": "pdfPath",
            "description": "<p>Script link from aws</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Script already exists || No file was uploaded || No user found",
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
            "optional": false,
            "field": "title",
            "description": "<p>Script title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "10-80",
            "optional": false,
            "field": "description",
            "description": "<p>Script description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pdfPath",
            "description": "<p>Script link from aws</p>"
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
    "url": "subjects/favorites/:id",
    "title": "Delete subject from favorites",
    "name": "DeleteFavorite",
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
            "field": "message",
            "defaultValue": "Subject deleted from favorites",
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
            "defaultValue": "Subject not found/No user found",
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
    "name": "DeleteSubject",
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
    "type": "delete",
    "url": "subjects/",
    "title": "Delete all subjects",
    "name": "DeleteSubjects",
    "group": "Subject",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": "Subjects deleted",
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
    "type": "get",
    "url": "subjects/:id",
    "title": "Get subject by id",
    "name": "GetSubject",
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
    "groupTitle": "Subject",
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>Subject semester</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_college",
            "description": "<p>College id</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "subjects/",
    "title": "Get all subjects",
    "name": "GetSubjects",
    "group": "Subject",
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
    "groupTitle": "Subject",
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>Subject semester</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_college",
            "description": "<p>College id</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "subjects/:id",
    "title": "Patch a subject",
    "name": "PatchSubject",
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
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Subject name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>Subject semester</p>"
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
    "groupTitle": "Subject",
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>Subject semester</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_college",
            "description": "<p>College id</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "subjects/favorites/:id",
    "title": "Add subject to favorites",
    "name": "PostFavorite",
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
            "field": "message",
            "defaultValue": "Subject added to favorites",
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
            "defaultValue": "Subject not found || No user found || Subject already added to favorites",
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
    "groupTitle": "Subject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Subject name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>Subject semester</p>"
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>Subject semester</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "_college",
            "description": "<p>College id</p>"
          }
        ]
      }
    }
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
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>City name</p>"
          },
          {
            "group": "Parameter",
            "type": "Id",
            "optional": false,
            "field": "id",
            "description": "<p>University id</p>"
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
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "favoriteSubjects",
            "description": "<p>User favorite subjects</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "favoriteSubjects._id",
            "description": "<p>User favorite subject</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "favoriteScripts",
            "description": "<p>User favorite scripts</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "favoriteScripts._id",
            "description": "<p>User favorite script</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "scripts",
            "description": "<p>User scripts</p>"
          },
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "scripts._script",
            "description": "<p>User script</p>"
          },
          {
            "group": "Success 200",
            "type": "Tutorial",
            "optional": false,
            "field": "tutorial",
            "description": "<p>User tutorial</p>"
          },
          {
            "group": "Success 200",
            "type": "Theme",
            "optional": false,
            "field": "theme",
            "description": "<p>User theme</p>"
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
            "size": "3-20",
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
  },
  {
    "type": "patch",
    "url": "users/theme",
    "title": "Set theme",
    "name": "ThemeUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Light || Dark\""
            ],
            "optional": false,
            "field": "theme",
            "description": "<p>User theme</p>"
          }
        ]
      }
    },
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
            "field": "message",
            "defaultValue": "Theme changed",
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
    "type": "patch",
    "url": "users/tutorial",
    "title": "Set tutorial to true",
    "name": "TutorialUser",
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
            "field": "message",
            "defaultValue": "Tutorial set to true",
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
    "type": "get",
    "url": "/sign-s3",
    "title": "Get signed token",
    "name": "GetToken",
    "group": "Utils",
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
            "type": "Data",
            "optional": false,
            "field": "signedRequest",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Url",
            "optional": false,
            "field": "url",
            "description": "<p>Url to file</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/server.js",
    "groupTitle": "Utils"
  }
] });
