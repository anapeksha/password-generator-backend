# Password Generator

REST API for generating random password with `crypto` module

The **swagger.yml** file for following sample responses is available at:

https://github.com/anapeksha/password-generator/blob/main/docs/swagger.yml

## Sample API Endpoint

> https://randompassword-generator.herokuapp.com/api/v1/generatePWD?length=10&characters=abcd1234

## Install

    yarn install

## Run the development server

    yarn start-dev

## Run the production server

    yarn start

## Success Responses

GET - Success response - HTTP Response Code: **200**

```javascript
    HTTP/1.1 200
    Content-Type: application/json

    {
        "password": "dhfkjahs"
    }
```

## Error Responses

GET - Error response - HTTP Response Code: **400**

```javascript
    HTTP/1.1 400
    Content-Type: application/json

      {
        "error": "Bad Query Parameters"
      }
```