### car-crud-app

### change directory to car-crud-app
cd car-crud-app

### install the required packages
npm install

### start the vue app on http://localhost:8080
npm run serve

### change directory into the backend folder (may need new tab in terminal)
cd backend

### add required packages
npm install

### install mongoDB if you have not already
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

### run mongoDB and start database
brew services start mongodb-community@4.4
mongo

### Start node server (may need new tab in terminal)
nodemon

### Open app in broswer
http://localhost:8080/

<!-- TODO: add filters/queries -->
<!-- TODO: unit tests -->

#### Code Challenge Description

This challenge is designed for you to quickly and creatively show us your ability as an engineer. Keep it simple and try not to spend too much time on the project. If you can convey your abilities in a few hours, great! If you have fun and spend more time on it - also great!

We simply ask that you submit your project within 3 days of receiving these details. If this is a problem, please work with your hiring contact to negotiate the timing.

During the interview, you'll have the ability to discuss the choices you made and elaborate on your implementation.

#### Architectural Guidelines
We leave the architecture up to you on whether you want to use a database or in-memory storage. Keep in mind that we should be able to run your code with ease.

#### Requirements
1. Create a Node Express server to support an inventory of cars with the following endpoints:
    - Ability to add/delete `Cars` with `Make`, `Model`, `Year` and `Color` to the inventory
    - Ability to filter/query `Cars` based on `Make`, `Model`, `Year`, and `Color`
    - Ability to edit an existing entry in the inventory
2. Build a front-end UI using React or Vue (or related library) that leverages the endpoints created in the Express server
3. Write Unit Tests
4. Push your code to GitLab or GitHub and send us the link. Make sure we have the appropriate access to your project's source code and clear instructions on how to run your application.
5. Be creative!