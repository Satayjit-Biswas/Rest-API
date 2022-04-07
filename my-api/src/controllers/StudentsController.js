const StudentsModel = require("../models/StudentsModels");

// CRUD for Mongoose

// C = Create data
exports.InsertStudentData = (req, res) => {
    let reqBody = req.body;
    StudentsModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: "Failed", data: err });
        } else {
            res.status(201).json({ status: "Success", data: data });
        }
    });
};

// Read data
exports.ReadStudentData = (req, res) => {
    const Query = {};
    const Projection = "Name Roll Class";
    StudentsModel.find(Query, Projection, (err, data) => {
        if (err) {
            res.status(400).json({ status: "Failed", data: err });
        } else {
            res.status(201).json({ status: "Success", data: data });
        }
    });
};

// Update data
exports.UpdateStudentData = (req, res) => {
    const id = req.params.id;
    const Query = { _id: id };
    let reqBody = req.body;
    StudentsModel.updateOne(Query, reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: "Failed", data: err });
        } else {
            res.status(201).json({ status: "Success", data: data });
        }
    });
};
// Delete data
exports.DeleteStudentData = (req, res) => {
    const id = req.params.id;
    const Query = { _id: id };
    StudentsModel.remove(Query, (err, data) => {
        if (err) {
            res.status(400).json({ status: "Failed", data: err });
        } else {
            res.status(201).json({ status: "Success", data: data });
        }
    });
};

