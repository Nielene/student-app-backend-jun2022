// same as app.js setup
const express = require("express");
const { response } = require("../app");
const controller = express.Router();

const studentData = require("../studentData.json");

// controller.get('/', (request, response) => {
//   response.send("Hello from the students controller")
// })

// controller.get("/", (request, response) => {
//   response.json({ hello: "world" });
// });

controller.get("/", (request, response) => {

  // how do i handle a query string?
  let {limit=25} = request.query; // if request.query has a limit, then set limit to that; otherwise, we'll set our limit to 25;
                                 // http://localhost:9000/students?limit=1
  
  limit = Number(limit);   //use "let" not "const" above, since redefining "limit" in this line.
  console.log(limit); // 10

  // how do i change the student data according to the limit?
  // studentData.students = [ 25 items]
  studentData.students = studentData.students.slice(0, limit); // "limit" not included

  response.json(studentData);
});

// write a query that accepts a student id as part of the path.
// returning an object (JSON), representing the student with that id.
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
    // response.json(studentData.students.id);
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
