# Table of contents
1. [Users](#Users)
2. [Scripts](#Scripts)
3. [Colleges](#Colleges)
4. [Universities](#Universities)
5. [Cities](#Cities)

# Users

## POST api/users
### Registers a user
### Request (application/json)
```json
    username: "perop" - string, 6-30 chars
    password: "123456" - string, 6-30 chars  
    email: "perop@gmail.com" - string, valid email
```

### Response 200 (application/json)
        returns username, email and id of registered user

## POST api/users/login
### Login a user
### Request (application/json)
```json    
    email: "perop@gmail.com" - string, valid email
    password: "pero1234" - string, 6-30 chars
```

### Response 200 (application/json)
```json    
    success: true
    token: "Bearer " + token - jwt
```

## POST api/users/current
### Returns current user
### Request (application/json)
```json    
    auth token
```

### Response 200 (application/json)
```json    
    username: "perop" - string, 6-30 chars
    email: "perop@gmail.com" - string, valid email
```


# Scripts

## POST api/scripts
### Add a script
### Request (application/json)
```json
    title: "Praktikum" - string, 5-50 chars
    description: "Skripta za praktikum" - string, 5-200 chars  
    _college: "abc123" - college id
```

### Response 200 (application/json)
        returns created script

## GET api/scripts
### Get all scripts
### Response 200 (application/json)
        returns all scripts

### Response 404 (application/json)
```json
    message: "No scripts where found"
```

## GET api/scripts/:id
### Get one script by id
### Response 200 (application/json)
        returns one script

### Response 404 (application/json)
```json
    message: "No script was found"
```

## PATCH api/scripts/:id
### Update a script
### Request (application/json)
```json
    title: "Praktikum" - string, 5-50 chars
    description: "Skripta za praktikum" - string, 5-200 chars  
    _college: "abc123" - college id
```

### Response 200 (application/json)
        returns updated script

### Response 404 (application/json)
```json
    message: "Script to update not found"
```

## DELETE api/scripts/:id
### Delete script via id
### Response 200 (application/json)
```json
    message: "Script deleted"
```
### Response 404 (application/json)
```json
    message: "Script to delete not found"
```

## DELETE api/scripts
### Delete all scripts
### Response 200 (application/json)
```json
    message: "Scripts removed"
```
### Response 404 (application/json)
```json
    message: "No scripts to delete"
```


# Colleges

## POST api/colleges
### Add a college
### Request (application/json)
```json
    name: "FIPU" - string, 5-50 chars
    _city: "abc123" - city id
    _university: "abc123" - college id
```

### Response 200 (application/json)
        returns created college

## GET api/scripts
### Get all scripts
### Response 200 (application/json)
        returns all colleges

### Response 404 (application/json)
```json
    message: "No colleges where found"
```

## GET api/colleges/:id
### Get one college by id
### Response 200 (application/json)
        returns one college

### Response 404 (application/json)
```json
    message: "No college was found"
```

## PATCH api/colleges/:id
### Update a college
### Request (application/json)
```json
    name: "FIPU" - string, 5-50 chars
    _city: "abc123" - city id
    _university: "abc123" - college id
```

### Response 200 (application/json)
        returns updated college

### Response 404 (application/json)
```json
    message: "College to update not found"
```

## DELETE api/colleges/:id
### Delete college via id
### Response 200 (application/json)
```json
    message: "College deleted"
```
### Response 404 (application/json)
```json
    message: "College to delete not found"
```

## DELETE api/colleges
### Delete all colleges
### Response 200 (application/json)
```json
    message: "Colleges removed"
```
### Response 404 (application/json)
```json
    message: "No colleges to delete"
```


# Universities

## POST api/universities
### Add a universitie
### Request (application/json)
```json
    name: "Sveuciliste Juraj Dobrila u Puli" - string, 5-50 chars
```

### Response 200 (application/json)
        returns created universities

## GET api/universities
### Get all universities
### Response 200 (application/json)
        returns all universities

### Response 404 (application/json)
```json
    message: "No universities where found"
```

## GET api/universities/:id
### Get one university by id
### Response 200 (application/json)
        returns one university

### Response 404 (application/json)
```json
    message: "No university was found"
```

## PATCH api/universities/:id
### Update a university
### Request (application/json)
```json
    name: "Sveuciliste Juraj Dobrila u Puli" - string, 5-50 chars
```

### Response 200 (application/json)
        returns updated university

### Response 404 (application/json)
```json
    message: "University to update not found"
```

## DELETE api/universities/:id
### Delete university via id
### Response 200 (application/json)
```json
    message: "University deleted"
```
### Response 404 (application/json)
```json
    message: "University to delete not found"
```

## DELETE api/universities
### Delete all universities
### Response 200 (application/json)
```json
    message: "University removed"
```
### Response 404 (application/json)
```json
    message: "No universities to delete"
```


# Cities

## POST api/cities
### Add a city
### Request (application/json)
```json
    name: "Pula" - string, 3-50 chars
```

### Response 200 (application/json)
        returns created college

## GET api/cities
### Get all cities
### Response 200 (application/json)
        returns all cities

### Response 404 (application/json)
```json
    message: "No cities where found"
```

## GET api/cities/:id
### Get one city by id
### Response 200 (application/json)
        returns one city

### Response 404 (application/json)
```json
    message: "No city was found"
```

## PATCH api/cities/:id
### Update a city
### Request (application/json)
```json
    name: "Pula" - string, 3-50 chars
```

### Response 200 (application/json)
        returns updated city

### Response 404 (application/json)
```json
    message: "City to update not found"
```

## DELETE api/cities/:id
### Delete city via id
### Response 200 (application/json)
```json
    message: "City deleted"
```
### Response 404 (application/json)
```json
    message: "City to delete not found"
```

## DELETE api/cities
### Delete all cities
### Response 200 (application/json)
```json
    message: "City removed"
```
### Response 404 (application/json)
```json
    message: "No cities to delete"
```