const express = require("express");
const mysql = require("mysql2");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const nodemailer = require("nodemailer");
require("dotenv").config();
// const http = require("http");

// const db = require('./db');

const app = express();
// const server = http.createServer(app);

app.use(cors());
app.use(express.json());

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/uploads/course", express.static(path.join(__dirname, "uploads/course")));

const db = mysql.createConnection({
    host: process.env.DB_HOST, user: process.env.DB_USER, password: process.env.DB_PASS, database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL");
    }
});

// Function to get the upload path dynamically
const getUploadPath = (type) => {
    const allowedPaths = ["testimonial", "course", "blog", "university"];
    if (!allowedPaths.includes(type)) return null;
    const uploadPath = path.join(__dirname, "uploads", type);
    // Ensure the directory exists
    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, {recursive: true});
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
    }, filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({
    storage, // limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file limit
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
app.get("/api/serchUniByTitle", (req, res) => GetUni(req, res));
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
app.get("/api/getAllUnis", (req, res) => getAllUnis(req, res));
app.get("/api/getAllTestimonials", (req, res) => getAllTestimonials(req, res));
app.get("/api/getAllEnrolls", (req, res) => getAllEnrolls(req, res));
app.get("/api/getAllEnrollsStudents", (req, res) => getAllEnrollsStudents(req, res));
app.get("/api/deleteCourse", (req, res) => deleteCourse(req, res));
app.get("/api/deleteBlog", (req, res) => deleteBlog(req, res));
app.get("/api/deleteUni", (req, res) => deleteUni(req, res));
app.get("/api/deleteTestimonial", (req, res) => deleteTestimonial(req, res));

// post methods
app.post("/api/signin", (req, res) => signin(req, res));
app.post("/api/addNewCourse", (req, res) => addNewCourse(req, res));
app.post("/api/addNewBlog", (req, res) => addNewBlog(req, res));
app.post("/api/addNewUni", (req, res) => addNewuUni(req, res));
app.post("/api/addNewTestimonial", (req, res) => addNewTestimonial(req, res));
app.post("/api/acceptEnroll", (req, res) => acceptEnroll(req, res));
app.post("/api/editCourse", (req, res) => editCourse(req, res));
app.post("/api/editBlog", (req, res) => editBlog(req, res));
app.post("/api/editUni", (req, res) => editUni(req, res));
app.post("/api/editTestimonial", (req, res) => editTestimonial(req, res));
app.post("/api/updateListingPriority", (req, res) => updateListingPriority(req, res));

// Upload Images
app.post("/api/uploadImage/:type", upload.single("file"), (req, res) => uploadImage(req, res));
app.post("/api/uploadMultiImages/:type", upload.array("files"), (req, res) => uploadMultiImages(req, res));

// Send Email
app.post("/api/sendEmail", (req, res) => sendMail(req, res));

// server.keepAliveTimeout = 360000; // ms
// server.headersTimeout = 360000; // ms
// server.timeout = 360000;

// listen port
app.listen(process.env.DB_PORT, () => console.log("Server is running on port 5000"));

// functions
function Addadmin(req, res) {
    const sql2 = "INSERT INTO `admin`(`fname`,`lname`,`email`,`password`,`reg_date`) VALUES(?,?,?,?,?)";
    const values2 = ["Super", "Admin", "admin@langfordcollege.com", "Langford@123", "2025-04-04 13:09:33",];

    db.query(sql2, values2, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.json({
            status: true, data: results[0],
        });
        return;
    });
}

function signin(req, res) {
    const {email, password} = req.body;

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

    db.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }

        if (results.length > 0) {
            res.json({
                status: true, data: results[0],
            });
            return;
        } else {
            return res.status(400).json({
                error: "Invalied Email or Password.",
            });
        }
    });
}

// add
function addNewCourse(req, res) {
    const {
        course_name,
        course_start_date,
        course_location,
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
        banner_path,
        ucas_code,
        ucas_points,
        duration,
        fee,
        course_leader,
    } = req.body;

    const slugbluiddql = "SELECT id FROM `course` ORDER BY id DESC LIMIT 1";

    db.query(slugbluiddql, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        const slug = results[0]?.id ? `COURSE_${course_name}_${results[0]?.id + 1}` : `COURSE_${course_name}_${1}`;

        const existSql = "SELECT * FROM `course` WHERE `slug` = ?";
        const existValues = [slug];

        db.query(existSql, existValues, (err, results) => {
            if (err) {
                return res.status(500).json({error: err.message});
            }
            if (results.length > 0) {
                return res.status(400).json({
                    error: "Slug Already Exists, Please Try Again.",
                });
            }

            const sql = "INSERT INTO `course`(`course_name`, `course_start_date`, `course_location`, `how_it_works`, `course_module`, `entry_requirements`, `cost_and_payment`, `career_progression`, `university_options`, `image_path`,`banner_path`,`course_level`,`annual_payment`,`monthly_payment`,`ucas_code`, `ucas_points` , `duration`,`fee`,`course_leader`,`listingPriority`,`slug`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            const values = [course_name, course_start_date, course_location, how_it_works, course_module, entry_requirements, cost_and_payment, career_progression, university_options, image_path, banner_path, course_level, annual_payment, monthly_payment, ucas_code, ucas_points, duration, fee, course_leader, "None", slug,];

            db.query(sql, values, (err, results) => {
                if (err) {
                    return res.status(500).json({error: err.message});
                }
                res.status(201).json({
                    status: true, message: "Course added successfully", courseId: results.insertId,
                });
                return;
            });
        });
    });
}

function addNewBlog(req, res) {
    const {title, description, image_path} = req.body;

    const slugbluiddql = "SELECT id FROM blog ORDER BY id DESC LIMIT 1";

    db.query(slugbluiddql, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        const slug = results[0]?.id ? `BLOG_${title}_${results[0]?.id + 1}` : `BLOG_${title}_${1}`;

        const existSql = "SELECT * FROM `blog` WHERE `slug` = ?";
        const existValues = [slug];

        db.query(existSql, existValues, (err, results) => {
            if (err) {
                return res.status(500).json({error: err.message});
            }
            if (results.length > 0) {
                return res.status(400).json({
                    error: "Slug Already Exists, Please Try Again.",
                });
            }

            const sql = "INSERT INTO `blog`(`title`, `description`, `image_path`, `slug`) VALUES (?,?,?,?)";
            const values = [title, description, image_path, slug];

            db.query(sql, values, (err, results) => {
                if (err) {
                    return res.status(500).json({error: err.message});
                }
                res.status(201).json({
                    status: true, message: "Blog added successfully", blogId: results.insertId,
                });
                return;
            });
        });
    });
}

function addNewuUni(req, res) {
    const {
        title, description,
        image_path,
        banner_path,
        link,
        location,
        no_of_students,
        intake_available,
        unique_facility
    } = req.body;

    const existSql = "SELECT * FROM `blog` WHERE `title` = ?";
    const existValues = [title];

    db.query(existSql, existValues, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        if (results.length > 0) {
            return res.status(400).json({
                error: "University Already Exists, Please Try Again.",
            });
        }

        const sql = "INSERT INTO `university`(`title`, `description`, `image_path`, `banner_path`,`link`,`location`,`no_of_students`,`intake_available`,`unique_facility`) VALUES (?,?,?,?,?,?,?,?,?)";
        const values = [title, description, image_path, banner_path, link, location, no_of_students, intake_available, unique_facility];

        db.query(sql, values, (err, results) => {
            if (err) {
                return res.status(500).json({error: err.message});
            }
            res.status(201).json({
                status: true, message: "University added successfully", uniId: results.insertId,
            });
            return;
        });
    });
}

function addNewTestimonial(req, res) {
    const {title, description, image_path} = req.body;

    const slugbluiddql = "SELECT id FROM testimonial ORDER BY id DESC LIMIT 1";

    db.query(slugbluiddql, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        const slug = results[0]?.id ? `TESTIMONIAL_${title}_${results[0]?.id + 1}` : `TESTIMONIAL_${title}_${1}`;

        const existSql = "SELECT * FROM `testimonial` WHERE `slug` = ?";
        const existValues = [slug];

        db.query(existSql, existValues, (err, results) => {
            if (err) {
                return res.status(500).json({error: err.message});
            }
            if (results.length > 0) {
                return res.status(400).json({
                    error: "Slug Already Exists, Please Try Again.",
                });
            }

            const sql = "INSERT INTO `testimonial`(`title`, `description`, `image_path`, `slug`) VALUES (?,?,?,?)";
            const values = [title, description, image_path, slug];

            db.query(sql, values, (err, results) => {
                if (err) {
                    return res.status(500).json({error: err.message});
                }
                res.status(201).json({
                    status: true, message: "Testimonial added successfully", testimonialId: results.insertId,
                });
                return;
            });
        });
    });
}

function enrollNow(req, res) {
    const {
        first_name, last_name, email, phone, course, course_level, study_qualification, job_title, payment_option,
    } = req.body;

    const sql = "INSERT INTO `course_enroll_request`(`fname` , `lname` , `email` , `phone` , `course` , `course_level` , `study_qualification` , `job_title` , `payment_option`) VALUES (?,?,?,?,?,?,?,?,?)";
    const values = [first_name, last_name, email, phone, course, course_level, study_qualification, job_title, payment_option,];

    db.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({
            status: true, message: "Enroll request sent successfully", courseId: results.insertId,
        });
        return;
    });
}

function acceptEnroll(req, res) {
    const {
        id, fname, lname, email, phone, course, course_level, studyQualification, jobTitle, paymentOption,
    } = req.body;

    const sql = "INSERT INTO `enrolled_students`(`fname` , `lname` , `email` , `phone` ,`course_level` , `course` ,  `study_qualification` , `job_title` , `payment_option` , status) VALUES (?,?,?,?,?,?,?,?,?,?)";
    const values = [fname, lname, email, phone, course_level, course, studyQualification, jobTitle, paymentOption, "true",];

    db.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }

        db.query("DELETE FROM `course_enroll_request` WHERE `id` = ?", [id], (err) => {
            if (err) {
                return res.status(500).json({error: err.message});
            }
        });

        res.status(201).json({
            status: true, message: "Enrolled Successfully", enroledId: results.insertId,
        });
        return;
    });
}

// get
function GetSearchCourse(req, res) {
    const {name} = req.query;

    const sql = "SELECT * FROM `course` WHERE course_name LIKE ?";
    const values = [];

    if (name) {
        values.push(`%${name}%`);

        db.query(sql, values, (err, results) => {
            if (err) {
                return res.status(500).json({error: err.message});
            }
            if (results.length > 0) {
                res.json({
                    status: true, data: results,
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

function getDashboard(req, res) {
    const sql = "SELECT COUNT(*) AS total_count FROM `course_enroll_request`";
    const sql1 = "SELECT COUNT(*) AS total_count FROM `enrolled_students`";
    const sql2 = "SELECT COUNT(*) AS total_count FROM `blog`";
    const sql3 = "SELECT COUNT(*) AS total_count FROM `testimonial`";
    const sql4 = "SELECT COUNT(*) AS total_count FROM `course`";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        db.query(sql1, (err, results1) => {
            if (err) {
                return res.status(500).json({error: err.message});
            }
            db.query(sql2, (err, results2) => {
                if (err) {
                    return res.status(500).json({error: err.message});
                }
                db.query(sql3, (err, results3) => {
                    if (err) {
                        return res.status(500).json({error: err.message});
                    }
                    db.query(sql4, (err, results4) => {
                        if (err) {
                            return res.status(500).json({error: err.message});
                        }
                        res.status(201).json({
                            status: true, data: {
                                total_enroll_requests: results[0].total_count,
                                total_enrolled_students: results1[0].total_count,
                                total_blogs: results2[0].total_count,
                                total_testimonials: results3[0].total_count,
                                total_courses: results4[0].total_count,
                            },
                        });
                        return;
                    });
                });
            });
        });
    });
}

function getProfile(req, res) {
    const {email} = req.query;
    const sql = "SELECT * FROM `admin` WHERE `email` = ?";
    const values = [email];
    db.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({
            status: true, data: results[0],
        });
        return;
    });
}

function getAllCourse(req, res) {
    const sql = "SELECT * FROM `course`";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({
            status: true, data: results,
        });
        return;
    });
}

function getAllBlogs(req, res) {
    const sql = "SELECT * FROM `blog`";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({
            status: true, data: results,
        });
        return;
    });
}

function getAllUnis(req, res) {
    const sql = "SELECT * FROM `university`";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({
            status: true, data: results,
        });
        return;
    });
}

function getAllTestimonials(req, res) {
    const sql = "SELECT * FROM `testimonial`";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({
            status: true, data: results,
        });
        return;
    });
}

function GetCourse(req, res) {
    const {slug} = req.query;

    const sql = "SELECT * FROM `course` WHERE `slug` = ?";
    const values = [slug];

    if (slug) {
        db.query(sql, values, (err, results) => {
            if (err) {
                return res.status(500).json({error: err.message});
            }
            if (results.length > 0) {
                res.json({
                    status: true, data: results[0],
                });
                return;
            } else {
                return res.status(400).json({
                    error: "Course Not Found.",
                });
            }
        });
    } else {
        return res.status(400).json({
            error: "Somthing went wrong.",
        });
    }
}

function GetBlog(req, res) {
    const {slug} = req.query;

    const sql = "SELECT * FROM `blog` WHERE `slug` = ?";
    const values = [slug];

    if (slug) {
        db.query(sql, values, (err, results) => {
            if (err) {
                return res.status(500).json({error: err.message});
            }
            if (results.length > 0) {
                res.json({
                    status: true, data: results[0],
                });
                return;
            } else {
                return res.status(400).json({
                    error: "Blog Not Found.",
                });
            }
        });
    } else {
        return res.status(400).json({
            error: "Somthing went wrong.",
        });
    }
}

function GetUni(req, res) {
    const {title} = req.query;

    const sql = "SELECT * FROM `university` WHERE `title` = ?";
    const values = [title];

    if (title) {
        db.query(sql, values, (err, results) => {
            if (err) {
                return res.status(500).json({error: err.message});
            }
            if (results.length > 0) {
                res.json({
                    status: true, data: results[0],
                });
                return;
            } else {
                return res.status(400).json({
                    error: "University Not Found.",
                });
            }
        });
    } else {
        return res.status(400).json({
            error: "Somthing went wrong.",
        });
    }
}

function getAllEnrolls(req, res) {
    const sql = "SELECT * FROM `course_enroll_request`";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({
            status: true, data: results,
        });
        return;
    });
}

function getAllEnrollsStudents(req, res) {
    const sql = "SELECT * FROM `enrolled_students`";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({
            status: true, data: results,
        });
        return;
    });
}

function GetTestimonial(req, res) {
    const {slug} = req.query;

    const sql = "SELECT * FROM `testimonial` WHERE `slug` = ?";
    const values = [slug];

    if (slug) {
        db.query(sql, values, (err, results) => {
            if (err) {
                return res.status(500).json({error: err.message});
            }
            if (results.length > 0) {
                res.json({
                    status: true, data: results[0],
                });
                return;
            } else {
                return res.status(400).json({
                    error: "Testimonial Not Found.",
                });
            }
        });
    } else {
        return res.status(400).json({
            error: "Somthing went wrong.",
        });
    }
}

function GetCourseByLevel(req, res) {
    const {course_level} = req.body;

    const sql = "SELECT * FROM `course` WHERE `course_level` = ?";
    const values = [course_level];

    if (course_level) {
        db.query(sql, values, (err, results) => {
            if (err) {
                return res.status(500).json({error: err.message});
            }
            if (results.length > 0) {
                res.json({
                    status: true, data: results,
                });
                return;
            } else {
                return res.status(400).json({
                    error: "Course Not Found.",
                });
            }
        });
    } else {
        return res.status(400).json({
            error: "Somthing went wrong.",
        });
    }
}

// edit
function editCourse(req, res) {
    const {
        course_name,
        course_start_date,
        course_location,
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
        banner_path,
        ucas_code,
        ucas_points,
        duration,
        fee,
        course_leader,
        courseId,
    } = req.body;

    const sql = "UPDATE `course` SET `course_name` = ?, `course_start_date` = ?, `course_location` = ?, `how_it_works` = ?, `course_module` = ?, `entry_requirements` = ?, `cost_and_payment` = ?, `career_progression` = ?, `university_options` = ?, `image_path` = ?, `banner_path` = ?,`course_level` = ?,`annual_payment` = ?,`monthly_payment` = ? ,`ucas_code` = ? , `ucas_points` = ? ,`duration` = ? , `fee` = ? , `course_leader` = ?, `slug` = ? WHERE `id` = ?;";
    const slug = `COURSE_${course_name}_${courseId}`;
    const values = [course_name, course_start_date, course_location, how_it_works, course_module, entry_requirements, cost_and_payment, career_progression, university_options, image_path, banner_path, course_level, annual_payment, monthly_payment, ucas_code, ucas_points, duration, fee, course_leader, slug, courseId,];

    db.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({
            status: true, message: "Course updated successfully", courseId: courseId,
        });
        return;
    });
}

function editBlog(req, res) {
    const {blogId, title, description, image_path} = req.body;

    const sql = "UPDATE `blog` SET `title` = ?, `description` = ?, `image_path` = ? , slug = ? WHERE `id` = ?";
    const slug = `BLOG_${title}_${blogId}`;
    const values = [title, description, image_path, slug, blogId];

    db.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({
            status: true, message: "Blog updated successfully",
        });
        return;
    });
}

function editUni(req, res) {
    const {
        uniId,
        title,
        description,
        image_path,
        banner_path,
        link,
        location,
        no_of_students,
        intake_available,
        unique_facility
    } = req.body;

    const sql = "UPDATE `university` SET `title` = ?, `description` = ?, `image_path` = ? ,`banner_path` = ?, link = ? , location = ? , no_of_students = ?,intake_available = ?,unique_facility = ? WHERE `id` = ?";
    const values = [title, description, image_path, banner_path, link, location, no_of_students, intake_available, unique_facility, uniId];

    db.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({
            status: true, message: "University updated successfully",
        });
        return;
    });
}

function editTestimonial(req, res) {
    const {testimonialId, title, description, image_path} = req.body;

    const sql = "UPDATE `testimonial` SET `title` = ?, `description` = ?, `image_path` = ? , slug = ? WHERE `id` = ?";
    const slug = `TESTIMONIAL_${title}_${testimonialId}`;
    const values = [title, description, image_path, slug, testimonialId];

    db.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({
            status: true, message: "Testimonial updated successfully",
        });
        return;
    });
}

function updateListingPriority(req, res) {
    const {id, listingPriority} = req.body;

    const sql = "SELECT * FROM `course` WHERE `listingPriority` = ?";
    const values = [listingPriority];

    db.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        if (results.length > 0) {
            const secsql = "UPDATE `course` SET `listingPriority` = ? WHERE `id` = ?";
            const secvalues = ["None", results[0].id];
            db.query(secsql, secvalues, (err, results) => {
                if (err) {
                    return res.status(500).json({error: err.message});
                }
                const thirdsql = "UPDATE `course` SET `listingPriority` = ? WHERE `id` = ?";
                const thirdvalues = [listingPriority, id];
                db.query(thirdsql, thirdvalues, (err, results) => {
                    if (err) {
                        return res.status(500).json({error: err.message});
                    }
                    res.status(201).json({
                        status: true, message: "Listing priority updated successfully",
                    });
                    return;
                });
            });
        }
        const thirdsql = "UPDATE `course` SET `listingPriority` = ? WHERE `id` = ?";
        const thirdvalues = [listingPriority, id];
        db.query(thirdsql, thirdvalues, (err, results) => {
            if (err) {
                return res.status(500).json({error: err.message});
            }
            res.status(201).json({
                status: true, message: "Listing priority updated successfully",
            });
            return;
        });
    });
}

// delete
function deleteCourse(req, res) {
    const {courseId} = req.query;

    const sql = "DELETE FROM `course` WHERE `id` = ?";
    const values = [courseId];

    db.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({
            status: true, message: "Course deleted successfully",
        });
        return;
    });
}

function deleteBlog(req, res) {
    const {blogId} = req.query;

    const sql = "DELETE FROM `blog` WHERE `id` = ?";
    const values = [blogId];

    db.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({
            status: true, message: "Blog deleted successfully",
        });
        return;
    });
}

function deleteUni(req, res) {
    const {uniId} = req.query;

    const sql = "DELETE FROM `university` WHERE `id` = ?";
    const values = [uniId];

    db.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({
            status: true, message: "University deleted successfully",
        });
        return;
    });
}

function deleteTestimonial(req, res) {
    const {testimonialId} = req.query;

    const sql = "DELETE FROM `testimonial` WHERE `id` = ?";
    const values = [testimonialId];

    db.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({
            status: true, message: "Testimonial deleted successfully",
        });
        return;
    });
}

// upload
function uploadImage(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({message: "No file uploaded!"});
        }
        const fileUrl = `${process.env.DB_URL}/uploads/${req.params.type}/${req.file.filename}`;
        return res.json({
            status: true, message: "File uploaded successfully!", fileUrl: fileUrl,
        });
    } catch (error) {
        return res
            .status(500)
            .json({message: "Internal server error", error: error.message});
    }
}

function uploadMultiImages(req, res) {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({message: "No files uploaded"});
        }
        const filePaths = req.files.map((file) => `${process.env.DB_URL}/uploads/certificate/${file.filename}`);
        return res.json({
            status: true, message: "Files uploaded successfully", files: filePaths,
        });
    } catch (error) {
        return res
            .status(500)
            .json({message: "Internal server error", error: error.message});
    }
}

// send mail
async function sendMail(req, res) {
    const {to, subject, html} = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail", auth: {
            user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, to, subject, html,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({status: true, info});
        return;
    } catch (error) {
        res.status(500).json({status: false, error: error.message});
        return;
    }
}
