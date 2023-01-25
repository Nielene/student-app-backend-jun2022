// Define app; now need to serve it; create server.js

// import code for express
const express = require("express");

// initialize app
const app = express();

// route
app.get("/", (request, response) => {
  response.send("Hello world!");
});

// export app
module.exports = app;