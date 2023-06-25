var express = require("express");
var router = express.Router();

var html = `
  <h1>Welcome to Assigning Mentor and Students with Database 😍😍</h1>
  <p>Create a Mentor : POST - "/mentor"</p>
  <p>Create a Student : POST - "/student"</p>
  <p>Assign a student to a mentor : PUT - "/mentor/:mentorId/student/:studentId"</p>
  <p>Assign/change a mentor for a student : PUT - "/student/:studentId/mentor/:mentorId"</p>
  <p>Show all students for a mentor : GET - "/mentor/:mentorId/student"</p>
  <p>Show the previously assigned mentor for a student : GET - "/student/:studentId/mentor"</p>
`;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(html);
});

module.exports = router;
