// Define app; now need to serve it; create server.js

// import code for express
const express = require("express");

// initialize app
const app = express();

// set up routes/controllers; same name as the variable itself:
const studentsController = require("./controllers/studentsController");

// when s'thing goes to /9000/student app, use studentController
app.use("/students", studentsController);

// route
app.get("/", (request, response) => {
  response.send("Hello world!");
});

// export app
module.exports = app;
