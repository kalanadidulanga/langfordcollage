const express = require("express");
// const mysql = require("mysql2");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const nodemailer = require("nodemailer");
require("dotenv").config();
// const http = require("http");

const db = require("./db");

const app = express();
// const server = http.createServer(app);

app.use(cors());
app.use(express.json());

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(
  "/uploads/course",
  express.static(path.join(__dirname, "uploads/course"))
);

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) {
//     console.error("Database connection failed:", err);
//   } else {
//     console.log("Connected to MySQL");
//   }
// });

db.on("connection", (connection) => {
  console.log("MySQL Pool Connection ID:", connection.threadId);
  connection.query("SET SESSION wait_timeout = 28800");
});

db.on("error", (err) => {
  console.error("MySQL Pool Error:", err);
});

// Function to get the upload path dynamically
const getUploadPath = (type) => {
  const allowedPaths = ["testimonial", "course", "blog"];
  if (!allowedPaths.includes(type)) return null;
  const uploadPath = path.join(__dirname, "uploads", type);
  // Ensure the directory exists
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }

  return uploadPath;
};

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = getUploadPath(req.params.type);
    if (!uploadPath) {
      return cb(new Error("Invalid upload type"), null);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage,
  // limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file limit
});

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

app.get("/api", (req, res) => {
  res.send("API is working");
});

// User routes
// get methods
app.get("/api/serchCourse", (req, res) => GetSearchCourse(req, res));
app.get("/api/serchCourseBySlug", (req, res) => GetCourse(req, res));
app.get("/api/serchBlogBySlug", (req, res) => GetBlog(req, res));
app.get("/api/serchTestimonialBySlug", (req, res) => GetTestimonial(req, res));

// post methods
app.post("/api/serchCourseByLevel", (req, res) => GetCourseByLevel(req, res));
app.post("/api/enrollNow", (req, res) => enrollNow(req, res));

// Admin routes
// get methods
app.post("/api/createAdmin", (req, res) => Addadmin(req, res));
app.get("/api/getDashboard", (req, res) => getDashboard(req, res));
app.get("/api/getProfile", (req, res) => getProfile(req, res));
app.get("/api/getAllCources", (req, res) => getAllCourse(req, res));
app.get("/api/getAllBlogs", (req, res) => getAllBlogs(req, res));
app.get("/api/getAllTestimonials", (req, res) => getAllTestimonials(req, res));
app.get("/api/getAllEnrolls", (req, res) => getAllEnrolls(req, res));
app.get("/api/getAllEnrollsStudents", (req, res) =>
  getAllEnrollsStudents(req, res)
);
app.get("/api/deleteCourse", (req, res) => deleteCourse(req, res));
app.get("/api/deleteBlog", (req, res) => deleteBlog(req, res));
app.get("/api/deleteTestimonial", (req, res) => deleteTestimonial(req, res));

// post methods
app.post("/api/signin", (req, res) => signin(req, res));
app.post("/api/addNewCourse", (req, res) => addNewCourse(req, res));
app.post("/api/addNewBlog", (req, res) => addNewBlog(req, res));
app.post("/api/addNewTestimonial", (req, res) => addNewTestimonial(req, res));
app.post("/api/acceptEnroll", (req, res) => acceptEnroll(req, res));
app.post("/api/editCourse", (req, res) => editCourse(req, res));
app.post("/api/editBlog", (req, res) => editBlog(req, res));
app.post("/api/editTestimonial", (req, res) => editTestimonial(req, res));
app.post("/api/updateListingPriority", (req, res) =>
  updateListingPriority(req, res)
);

// Upload Images
app.post("/api/uploadImage/:type", upload.single("file"), (req, res) =>
  uploadImage(req, res)
);
app.post("/api/uploadMultiImages/:type", upload.array("files"), (req, res) =>
  uploadMultiImages(req, res)
);

// Send Email
app.post("/api/sendEmail", (req, res) => sendMail(req, res));

// server.keepAliveTimeout = 360000; // ms
// server.headersTimeout = 360000; // ms
// server.timeout = 360000;

// listen port
app.listen(process.env.DB_PORT, () =>
  console.log("Server is running on port 5000")
);

// functions
async function Addadmin(req, res) {
  const sql2 =
    "INSERT INTO `admin`(`fname`,`lname`,`email`,`password`,`reg_date`) VALUES(?,?,?,?,?)";
  const values2 = [
    "Super",
    "Admin",
    "admin@langfordcollege.com",
    "Langford@123",
    "2025-04-04 13:09:33",
  ];

  try {
    const [res] = await db.query(sql2, values2);
    res.json({
      status: true,
      data: results[0],
    });
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
}
async function signin(req, res) {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      error: "Please Enter Email Address.",
    });
  } else if (!password) {
    return res.status(400).json({
      error: "Please Enter Password.",
    });
  }

  const sql = "SELECT * FROM `admin` WHERE email = ? AND password = ?";
  const values = [email, password];

  try {
    const [res] = await db.query(sql, values);
    if (res.length > 0) {
      res.json({
        status: true,
        data: results[0],
      });
    } else {
      res.status(400).json({
        error: "Invalied Email or Password.",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// add
async function addNewCourse(req, res) {
  const {
    course_name,
    course_start_date,
    course_location,
    study_pace,
    qualification,
    assessment,
    includes,
    course_level,
    annual_payment,
    monthly_payment,
    how_it_works,
    course_module,
    entry_requirements,
    cost_and_payment,
    career_progression,
    university_options,
    image_path,
  } = req.body;

  const slugbluiddql = "SELECT id FROM `course` ORDER BY id DESC LIMIT 1";

  try {
    const [results] = await db.query(slugbluiddql);

    const slug = results[0]?.id
      ? `COURSE_${course_name}_${results[0]?.id + 1}`
      : `COURSE_${course_name}_${1}`;

    const existSql = "SELECT * FROM `course` WHERE `slug` = ?";
    const existValues = [slug];

    try {
      const [results1] = db.query(existSql, existValues);
      if (results1.length > 0) {
        res.status(400).json({
          error: "Slug Already Exists, Please Try Again.",
        });
      }
      const sql =
        "INSERT INTO `course`(`course_name`, `course_start_date`, `course_location`, `study_pace`, `qualification`, `assessment`, `includesData`, `how_it_works`, `course_module`, `entry_requirements`, `cost_and_payment`, `career_progression`, `university_options`, `image_path`,`course_level`,`annual_payment`,`monthly_payment`,`listingPriority`,`slug`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
      const values = [
        course_name,
        course_start_date,
        course_location,
        study_pace,
        qualification,
        assessment,
        includes,
        how_it_works,
        course_module,
        entry_requirements,
        cost_and_payment,
        career_progression,
        university_options,
        image_path,
        course_level,
        annual_payment,
        monthly_payment,
        "None",
        slug,
      ];

      try {
        const [results2] = await db.query(sql, values);
        res.status(201).json({
          status: true,
          message: "Course added successfully",
          courseId: results2.insertId,
        });
      } catch (error) {
        return res.status(500).json({ error: err.message });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
async function addNewBlog(req, res) {
  const { title, description, image_path } = req.body;

  try {
    const [results] = await db.query("SELECT id FROM blog ORDER BY id DESC LIMIT 1");
    const slug = results[0]?.id
      ? `BLOG_${title}_${results[0].id + 1}`
      : `BLOG_${title}_1`;

    const [exists] = await db.query("SELECT * FROM blog WHERE slug = ?", [slug]);
    if (exists.length > 0) {
      return res.status(400).json({ error: "Slug Already Exists, Please Try Again." });
    }

    const sql = `
      INSERT INTO blog (title, description, image_path, slug)
      VALUES (?, ?, ?, ?)
    `;
    const values = [title, description, image_path, slug];

    const [insertResult] = await db.query(sql, values);

    res.status(201).json({
      status: true,
      message: "Blog added successfully",
      blogId: insertResult.insertId
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
}
async function addNewTestimonial(req, res) {
  const { title, description, image_path } = req.body;

  try {
    const [results] = await db.query("SELECT id FROM testimonial ORDER BY id DESC LIMIT 1");
    const slug = results[0]?.id
      ? `TESTIMONIAL_${title}_${results[0].id + 1}`
      : `TESTIMONIAL_${title}_1`;

    const [exists] = await db.query("SELECT * FROM testimonial WHERE slug = ?", [slug]);
    if (exists.length > 0) {
      return res.status(400).json({ error: "Slug Already Exists, Please Try Again." });
    }

    const sql = `
      INSERT INTO testimonial (title, description, image_path, slug)
      VALUES (?, ?, ?, ?)
    `;
    const values = [title, description, image_path, slug];

    const [insertResult] = await db.query(sql, values);

    res.status(201).json({
      status: true,
      message: "Testimonial added successfully",
      testimonialId: insertResult.insertId
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
}
async function enrollNow(req, res) {
  const {
    first_name,
    last_name,
    email,
    phone,
    course,
    course_level,
    study_qualification,
    job_title,
    payment_option
  } = req.body;

  const sql = `
    INSERT INTO course_enroll_request (
      fname, lname, email, phone, course, course_level, study_qualification, job_title, payment_option
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    first_name, last_name, email, phone, course, course_level,
    study_qualification, job_title, payment_option
  ];

  try {
    const [result] = await db.query(sql, values);
    res.status(201).json({
      status: true,
      message: "Enroll request sent successfully",
      courseId: result.insertId
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
}
async function acceptEnroll(req, res) {
  const {
    id, fname, lname, email, phone, course, course_level,
    studyQualification, jobTitle, paymentOption
  } = req.body;

  const sql = `
    INSERT INTO enrolled_students (
      fname, lname, email, phone, course_level, course,
      study_qualification, job_title, payment_option, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    fname, lname, email, phone, course_level, course,
    studyQualification, jobTitle, paymentOption, "true"
  ];

  try {
    const [result] = await db.query(sql, values);
    await db.query("DELETE FROM course_enroll_request WHERE id = ?", [id]);

    res.status(201).json({
      status: true,
      message: "Enrolled Successfully",
      enroledId: result.insertId
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
}

// get
async function GetSearchCourse(req, res) {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: "Course Name is Required." });
  }

  const sql = "SELECT * FROM course WHERE course_name LIKE ?";
  const value = [`%${name}%`];

  try {
    const [results] = await db.query(sql, value);
    if (results.length === 0) {
      return res.status(400).json({ error: "Course Not Found." });
    }
    res.json({ status: true, data: results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
}
async function getDashboard(req, res) {
  try {
    const [[{ total_count: total_enroll_requests }]] = await db.query("SELECT COUNT(*) AS total_count FROM course_enroll_request");
    const [[{ total_count: total_enrolled_students }]] = await db.query("SELECT COUNT(*) AS total_count FROM enrolled_students");
    const [[{ total_count: total_blogs }]] = await db.query("SELECT COUNT(*) AS total_count FROM blog");
    const [[{ total_count: total_testimonials }]] = await db.query("SELECT COUNT(*) AS total_count FROM testimonial");
    const [[{ total_count: total_courses }]] = await db.query("SELECT COUNT(*) AS total_count FROM course");

    res.json({
      status: true,
      data: {
        total_enroll_requests,
        total_enrolled_students,
        total_blogs,
        total_testimonials,
        total_courses
      }
    });
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
}
async function getProfile(req, res) {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  const sql = "SELECT * FROM `admin` WHERE `email` = ?";
  const values = [email];

  try {
    const [results] = await db.query(sql, values);

    if (results.length === 0) {
      return res.status(404).json({ error: "Admin not found." });
    }

    res.status(200).json({
      status: true,
      data: results[0],
    });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
}
async function getAllCourse(req, res) {
  try {
    const [results] = await db.query("SELECT * FROM `course`");
    res.status(200).json({
      status: true,
      data: results,
    });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Failed to fetch courses." });
  }
}
async function getAllBlogs(req, res) {
  try {
    const [results] = await db.query("SELECT * FROM `blog`");
    res.status(200).json({
      status: true,
      data: results,
    });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Failed to fetch blogs." });
  }
}
async function getAllTestimonials(req, res) {
  try {
    const [results] = await db.query("SELECT * FROM `testimonial`");
    res.status(200).json({
      status: true,
      data: results,
    });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Failed to fetch testimonials." });
  }
}
async function GetCourse(req, res) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ error: "Something went wrong." });
  }

  const sql = "SELECT * FROM `course` WHERE `slug` = ?";
  const values = [slug];

  try {
    const [results] = await db.query(sql, values);

    if (results.length > 0) {
      return res.json({
        status: true,
        data: results[0],
      });
    } else {
      return res.status(404).json({
        error: "Course Not Found.",
      });
    }
  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
}
async function GetBlog(req, res) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ error: "Something went wrong." });
  }

  const sql = "SELECT * FROM `blog` WHERE `slug` = ?";
  const values = [slug];

  try {
    const [results] = await db.query(sql, values);

    if (results.length > 0) {
      return res.json({
        status: true,
        data: results[0],
      });
    } else {
      return res.status(404).json({
        error: "Blog Not Found.",
      });
    }
  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
}
async function getAllEnrolls(req, res) {
  try {
    const [results] = await db.query("SELECT * FROM `course_enroll_request`");
    res.status(200).json({
      status: true,
      data: results,
    });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Failed to fetch enroll requests." });
  }
}
async function getAllEnrollsStudents(req, res) {
  try {
    const [results] = await db.query("SELECT * FROM `enrolled_students`");
    res.status(200).json({
      status: true,
      data: results,
    });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Failed to fetch enrolled students." });
  }
}

async function GetTestimonial(req, res) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ error: "Something went wrong." });
  }

  const sql = "SELECT * FROM `testimonial` WHERE `slug` = ?";
  const values = [slug];

  try {
    const [results] = await db.query(sql, values);

    if (results.length > 0) {
      return res.json({
        status: true,
        data: results[0],
      });
    } else {
      return res.status(404).json({
        error: "Testimonial Not Found.",
      });
    }
  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
}
async function GetCourseByLevel(req, res) {
  const { course_level } = req.body;

  if (!course_level) {
    return res.status(400).json({ error: "Something went wrong." });
  }

  const sql = "SELECT * FROM `course` WHERE `course_level` = ?";
  const values = [course_level];

  try {
    const [results] = await db.query(sql, values);

    if (results.length > 0) {
      return res.json({
        status: true,
        data: results,
      });
    } else {
      return res.status(404).json({
        error: "Course Not Found.",
      });
    }
  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
}

// edit
async function editCourse(req, res) {
  const {
    course_name,
    course_start_date,
    course_location,
    study_pace,
    qualification,
    assessment,
    includes,
    course_level,
    annual_payment,
    monthly_payment,
    how_it_works,
    course_module,
    entry_requirements,
    cost_and_payment,
    career_progression,
    university_options,
    image_path,
    courseId,
  } = req.body;

  const slug = `COURSE_${course_name}_${courseId}`;

  const sql =
    "UPDATE `course` SET `course_name` = ?, `course_start_date` = ?, `course_location` = ?, `study_pace` = ?, `qualification` = ?, `assessment` = ?, `includesData` = ?, `how_it_works` = ?, `course_module` = ?, `entry_requirements` = ?, `cost_and_payment` = ?, `career_progression` = ?, `university_options` = ?, `image_path` = ?, `course_level` = ?, `annual_payment` = ?, `monthly_payment` = ?, `slug` = ? WHERE `id` = ?";
  
  const values = [
    course_name,
    course_start_date,
    course_location,
    study_pace,
    qualification,
    assessment,
    includes,
    how_it_works,
    course_module,
    entry_requirements,
    cost_and_payment,
    career_progression,
    university_options,
    image_path,
    course_level,
    annual_payment,
    monthly_payment,
    slug,
    courseId,
  ];

  try {
    const [results] = await db.query(sql, values);
    res.status(200).json({
      status: true,
      message: "Course updated successfully",
      courseId: courseId,
    });
  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({ error: "Failed to update course." });
  }
}
async function editBlog(req, res) {
  const { blogId, title, description, image_path } = req.body;

  const slug = `BLOG_${title}_${blogId}`;
  const sql =
    "UPDATE `blog` SET `title` = ?, `description` = ?, `image_path` = ?, `slug` = ? WHERE `id` = ?";
  const values = [title, description, image_path, slug, blogId];

  try {
    const [results] = await db.query(sql, values);
    res.status(200).json({
      status: true,
      message: "Blog updated successfully",
    });
  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({ error: "Failed to update blog." });
  }
}
async function editTestimonial(req, res) {
  const { testimonialId, title, description, image_path } = req.body;

  if (!testimonialId || !title) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const slug = `TESTIMONIAL_${title}_${testimonialId}`;
  const sql =
    "UPDATE `testimonial` SET `title` = ?, `description` = ?, `image_path` = ?, `slug` = ? WHERE `id` = ?";
  const values = [title, description, image_path, slug, testimonialId];

  try {
    const [results] = await db.query(sql, values);
    res.status(200).json({
      status: true,
      message: "Testimonial updated successfully",
    });
  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({ error: "Failed to update testimonial." });
  }
}
async function updateListingPriority(req, res) {
  const { id, listingPriority } = req.body;

  if (!id || !listingPriority) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const sqlCheck = "SELECT * FROM `course` WHERE `listingPriority` = ?";
  const valuesCheck = [listingPriority];

  try {
    const [existing] = await db.query(sqlCheck, valuesCheck);

    if (existing.length > 0) {
      const secsql = "UPDATE `course` SET `listingPriority` = ? WHERE `id` = ?";
      const secvalues = ["None", existing[0].id];
      await db.query(secsql, secvalues);
    }

    const thirdsql = "UPDATE `course` SET `listingPriority` = ? WHERE `id` = ?";
    const thirdvalues = [listingPriority, id];
    await db.query(thirdsql, thirdvalues);

    res.status(200).json({
      status: true,
      message: "Listing priority updated successfully",
    });

  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({ error: "Failed to update listing priority." });
  }
}

// delete
async function deleteCourse(req, res) {
  const { courseId } = req.query;

  if (!courseId) {
    return res.status(400).json({ error: "Course ID is required." });
  }

  const sql = "DELETE FROM `course` WHERE `id` = ?";
  const values = [courseId];

  try {
    const [results] = await db.query(sql, values);
    res.status(200).json({
      status: true,
      message: "Course deleted successfully",
    });
  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({ error: "Failed to delete course." });
  }
}
async function deleteBlog(req, res) {
  const { blogId } = req.query;

  if (!blogId) {
    return res.status(400).json({ error: "Blog ID is required." });
  }

  const sql = "DELETE FROM `blog` WHERE `id` = ?";
  const values = [blogId];

  try {
    const [results] = await db.query(sql, values);
    res.status(200).json({
      status: true,
      message: "Blog deleted successfully",
    });
  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({ error: "Failed to delete blog." });
  }
}
async function deleteTestimonial(req, res) {
  const { testimonialId } = req.query;

  if (!testimonialId) {
    return res.status(400).json({ error: "Testimonial ID is required." });
  }

  const sql = "DELETE FROM `testimonial` WHERE `id` = ?";
  const values = [testimonialId];

  try {
    const [results] = await db.query(sql, values);
    res.status(200).json({
      status: true,
      message: "Testimonial deleted successfully",
    });
  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({ error: "Failed to delete testimonial." });
  }
}

// upload
function uploadImage(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded!" });
    }
    const fileUrl = `${process.env.DB_URL}/uploads/${req.params.type}/${req.file.filename}`;
    return res.json({
      status: true,
      message: "File uploaded successfully!",
      fileUrl: fileUrl,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}
function uploadMultiImages(req, res) {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }
    const filePaths = req.files.map(
      (file) => `${process.env.DB_URL}/uploads/certificate/${file.filename}`
    );
    return res.json({
      status: true,
      message: "Files uploaded successfully",
      files: filePaths,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}

// send mail
async function sendMail(req, res) {
  const { to, subject, html } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ status: true, info });
    return;
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
    return;
  }
}
