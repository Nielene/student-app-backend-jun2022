// Define app; now need to serve it; create server.js

// import code for express
const express = require("express");

// initialize app
const app = express();

// set up routes/controllers; same name as the variable itself:
const studentsController = require("./controllers/studentsController");
const namesController = require("./controllers/namesController");

// when s'thing goes to /9000/student app, use studentController
app.use("/students", studentsController);
app.use("/names", namesController);

// route
app.get("/", (request, response) => {
  response.send("Hello world!");
});

// export app
module.exports = app;
