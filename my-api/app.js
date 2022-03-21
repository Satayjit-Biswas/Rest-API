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
// Security Middleware implement
app.use(rateLimit());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(cors());

// for express rate limit
const Limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
app.use(Limiter);

app.use("/api/v1", router);

// Undefined router
app.use("*", (req, res) => {
    res.status(404).json({ status: "fail", data: "NOT FOUND" });
});

module.exports = app;
