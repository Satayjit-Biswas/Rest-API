const express = require("express");
const { HelloGet, HelloPost } = require("../controllers/HelloController");
const router = express.Router();

router.get("/hello-get", HelloGet);
router.post("/hello-post",HelloPost);

module.exports = router;
