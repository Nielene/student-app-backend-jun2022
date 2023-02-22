const express = require("express");
const repeatNTimesWithSpace = require("../utils/stringUtils");
const controller = express.Router();

const repeatNTimesWithSpace = require("../utils/stringUtils");

controller.get("/:name/:times", (request, response) => {
  try {
    // get name
    const name = request.params.name;
    // get times
    const times = request.params.times;

    // get result of repeatNTimesWithSpace
    const repeatedNames = repeatNTimesWithSpace(name, times);

    // send string response of result
    response.send(repeatedNames);
  } catch (err) {
    response.send("There was an error.");
  }
});

module.exports = controller;
