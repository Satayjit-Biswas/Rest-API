const express = require("express");
const { HelloGet, HelloPost } = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController");

const router = express.Router();

router.get("/hello-get", HelloGet);
router.post("/hello-post", HelloPost);

// with mongoose
router.post("/insert-student", StudentsController.InsertStudentData);
router.get("/read-student", StudentsController.ReadStudentData);
router.post("/update-student/:id", StudentsController.UpdateStudentData);
router.post("/delete-student/:id", StudentsController.DeleteStudentData);

module.exports = router;
