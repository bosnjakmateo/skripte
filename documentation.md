# Table of contents
1. [Users](#Users)

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