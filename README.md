# keleya server
A server made using Node.js and TypeScript for mini-onboarding

## Set up
To set up the project there are some steps:
1. Clone the project
2. Install packages running the follow command:
  ``
  yarn install
  ``
  3. Download and import database to your machine ( mysql database )
 
 That's all, after this just ``yarn run dev`` to start server
 
 The database file is in the database folder with keleya name ( src/database/keleya.sql )

## Endpoints
### POST: /api/users
Create a new user and return a token
![Created a new user](https://github.com/antonio-nicolau/keleya-server/blob/master/screenshots/create_user.png)


### PATCH: /api/users
Update a user and return a token
![Update a user](https://github.com/antonio-nicolau/keleya-server/blob/master/screenshots/update_user.png)


### POST: /api/users/auth
Authenticate a user and return a token
![Authenticate user](https://github.com/antonio-nicolau/keleya-server/blob/master/screenshots/auth_user.png)

## Tests
I used Jest to write unitary test and supertest to integration test

All the tests are in the tests folder

To run all tests:
``
yarn test
``

![Tests running](https://github.com/antonio-nicolau/keleya-server/blob/master/screenshots/test_run.png)
