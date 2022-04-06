const express = require("express");
const router = require("./src/routes/api");
const app = new express();
// Security Middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// Security Middleware implement
app.use(rateLimit());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(cors());
app.use(bodyParser.json());

// for express rate limit
const Limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
app.use(Limiter);

// mongo db database connection
// Local laptop Connection
const URI = "mongodb://127.0.0.1:27017/School";
const OPTION = { user: "", pass: "" };
mongoose.connect(URI, OPTION, (err) => {
    console.log("Database Connection Success ");
    if (err) {
        console.log(err);
    }
});

app.use("/api/v1", router);

// Undefined router
app.use("*", (req, res) => {
    res.status(404).json({ status: "fail", data: "NOT FOUND" });
});

module.exports = app;
