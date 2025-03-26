const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// get methods
app.get("/api/serchCourse", (req, res) => GetSearchCourse(req, res));

// post methods
app.post("/api/addNewCourse", (req, res) => addNewCourse(req, res));

app.listen(5000, () => console.log("Server is running on port 5000"));

// functions
function GetSearchCourse(req, res) {
  const { name } = req.query;

  const sql = "SELECT * FROM `course` WHERE name LIKE ?";
  const values = [];

  if (name) {
    values.push(`${name}%`);

    db.query(sql, values, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.length > 0) {
        res.json({
          status: true,
          data: results,
        });
      } else {
        return res.status(400).json({
          error: "Course Not Found.",
        });
      }
    });
  } else {
    return res.status(400).json({
      error: "Course Name is Required.",
    });
  }
}

function addNewCourse(req, res) {
  const { course_name } = req.body;

  if (!course_name) {
    return res.status(400).json({
      error: "Course Name is Required.",
    });
  }

  // Check if the course already exists
  const checkSql = "SELECT * FROM `course` WHERE name = ?";
  db.query(checkSql, [course_name], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: "Course already exists" });
    }

    // If course doesn't exist, insert new course
    const insertSql = "INSERT INTO `course` (name) VALUES (?)";
    db.query(insertSql, [course_name], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({
        message: "Course added successfully",
        courseId: result.insertId,
      });
    });
  });
}
