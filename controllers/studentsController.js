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

  let {limit=25, min=0, max=INFINITY} = request.query; 
  
  limit = Number(limit);   

  // studentData.students = studentData.students.slice(0, limit); // "limit" not included
  // because we are working from static data and are (not?) going back to the database the whole time: -> copy the object -> create a copy we are going to process for delivery -> on this one that we are going to deliver, take the students array and slice it with our limit -> then return that student data for delivery as a json file.

  let studentDataForDelivery = {...studentData};
  studentDataForDelivery.students = studentDataForDelivery.students.slice(0, limit); // "limit" not included

  response.json(studentDataForDelivery);

  // if working from PGPromise (SQL queries):
  // SELECT * FROM students
  // SELECT * FROM students LIMIT $1, [limit]
  // SELECT * FROM students WHERE id >= $1 AND id <= $2, [min, max]
  
  // combined:
  // let {limit=25, min=0, max=INFINITY} = request.query; 
  // SELECT * FROM students WHERE id >= $1 AND id <= $2 LIMIT $3, [min, max, limit] 
  
  // or less logic:
  // let {limit=25, min, max} = request.query; // remove defaults so it does not return TRUE
  // SELECT * FROM students
  // if(!min && !max) {
    // SELECT * FROM students LIMIT $1, [limit]
  // } else {
    // SELECT * FROM students WHERE id >= $1 AND id <= $2, [min, max]
  // }

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
