const express = require("express");
const { HelloGet, HelloPost } = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController");
const JWTpractice = require("../controllers/JWTpractice");
const StudentsJwtController = require("../controllers/StudentsJwtController");
const StudentsJwtVerify = require("../middleware/StudentsJwtVerify");

const router = express.Router();

router.get("/hello-get", HelloGet);
router.post("/hello-post", HelloPost);

// // with mongoose
// router.post("/insert-student", StudentsController.InsertStudentData);
// router.get("/read-student", StudentsController.ReadStudentData);
// router.post("/update-student/:id", StudentsController.UpdateStudentData);
// router.post("/delete-student/:id", StudentsController.DeleteStudentData);

// with mongoose and Apply JWT Auth
router.get("/student-token", StudentsJwtController.CreateStudentToken);

router.post(
    "/insert-student",
    StudentsJwtVerify,
    StudentsController.InsertStudentData
);
router.get(
    "/read-student",
    StudentsJwtVerify,
    StudentsController.ReadStudentData
);
router.post(
    "/update-student/:id",
    StudentsJwtVerify,
    StudentsController.UpdateStudentData
);
router.post(
    "/delete-student/:id",
    StudentsJwtVerify,
    StudentsController.DeleteStudentData
);
// Create JWT token
router.get("/CreateToken", JWTpractice.CreateToken);
router.get("/DeCodeToken", JWTpractice.DeCodeToken);
module.exports = router;
