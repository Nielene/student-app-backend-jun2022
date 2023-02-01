// same as app.js setup
const express = require("express");
const { response } = require("../app");
const controller = express.Router();

const studentData = require("../studentData.json");

// controller.get('/', (request, response) => {
//     response.send("Hello from the students controller")
// })

// controller.get("/", (request, response) => {
//   response.json({ hello: "world" });
// });

controller.get("/", (request, response) => {
  response.json(studentData);
});

controller.get("/:id", (request, response) => {
  try {
    const studentId = request.params.id;

    if (!/[0-9]/.test(studentId)) {
      response.send("Student ID must be a number.");
      return;
    }

    const singleStudent = studentData.students.find((student) => {
      return student.id === studentId;
    });
    //   response.json(studentData.students.id);
    // console.log(singleStudent);

    if (singleStudent) {
      response.json(singleStudent);
    } else {
      response.send("Student not found.");
    }
  } catch (err) {
    response.status(500).send("An error occurred.");
  }
});

// sending it back to app.js
module.exports = controller;
