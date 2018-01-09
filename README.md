# Node JS focused projects

## 1. node-tests
### Setting up automated testing with nodemon for a simple Express web server.
#### Dependencies
1. Dev: Express
2. Tst: Mocha, Expect, Rewire, Supertest

## 2. node-todo-api
### Creating a Todo application REST API that hooks into a database and is hosted on Heroku
#### Dependencies
1. Dev: Mongodb, Mongoose, Lodash, Express, Body-parser
2. Tst: Expect, Mocha, Nodemon, Supertest
3. Debug: Postman (http requests), Robo 3T (Mongodb gui)

## 3. node-webserver
### Creating a simple Express webserver with routes and templates using Handlebars
#### Dependencies
1. Dev: Express, Hbs (Handlebars)

## 4. notes-node
### Note taking application that receives input from the command line
#### Dependencies (package.json)
1. Dev: Lodash, Yargs (command line parsing)

## 5. weather-app
### Make aync calls to Google Maps API for location and Dark Sky API for weather at that location.
#### Dependencies (package.json)
1. Dev: Axios (Promise style http request library, returns Json!), Request (Simple http requests), Yargs
2. Dark Sky: https://api.darksky.net/forecast/7b2a4ce4ec9fb55f4af448634803c7c8/${lat},${long}
3. Google Maps: https://maps.google.com/maps/api/geocode/json?address=${inputAddr}
