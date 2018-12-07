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


# Colleges

## POST api/colleges
### Add a college
### Request (application/json)
```json
    name: "FIPU" - string, 5-50 chars
    _city: "abc123" - city id
    _college: "abc123" - college id
```

### Response 200 (application/json)
        returns created college

## GET api/scripts
### Get all scripts

### Response 200 (application/json)
        returns all colleges


# Universities

## POST api/universities
### Add a universitie
### Request (application/json)
```json
    name: "Sveuciliste Juraj Dobrila u Puli" - string, 5-50 chars
```

### Response 200 (application/json)
        returns created college

## GET api/universities
### Get all universities

### Response 200 (application/json)
        returns all colleges


# Cities

## POST api/cities
### Add a city
### Request (application/json)
```json
    name: "FIPU" - string, 3-50 chars
```

### Response 200 (application/json)
        returns created college

## GET api/cities
### Get all cities

### Response 200 (application/json)
        returns all cities