const app = require('../../app.js')
const supertest = require('supertest');  //import this library. works on top of jest. 'npm install -D supertest'

//need a describe block:
describe ('returns json data for all students', () => {
    it ('returns an object with all students', async () => {
        
        await supertest(app).get("/students")
            .expect(200)
            .then((response) => { // this API should return an object, which should have a key of students, whose value should be an array 
                expect(response.body.students).toBeInstanceOf(Array);
                expect(response.body.students.length).toBe(25);
                // expect(response.body.students[0].firstName).toBe('Ingaberg');

            })
    })

    it ('returns an object with a number of students equal to or less than a limit', async () => {
        
        await supertest(app).get("/students?limit=10")
        .expect(200)
        .then((response) => {
            expect(response.body.students).toBeInstanceOf(Array);
            expect(response.body.students.length).toBe(10);
        })

        await supertest(app).get("/students?limit=35")
        .expect(200)
        .then((response) => {
            expect(response.body.students).toBeInstanceOf(Array);
            expect(response.body.students.length).toBe(25);
        })
    })
})


// modify this api so that it takes a min and max id and returns all students in that range.

// /students?min=3&max=10 => all students with ids >= 3 and <=10
// go to students route - set up min and max - will return 3 4 5 6 7 8 9 10 (8 studnts with the ids 3 through 10)