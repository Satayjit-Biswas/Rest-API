const jwt = require("jsonwebtoken");

exports.CreateStudentToken = (req, res) => {
    const Payload = {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        date: { Name: "Satayjit biswas", City: "Dhaka", admin: true },
    };

    const token = jwt.sign(Payload, "Soooogooo12345");
    console.log(token);
    res.send(token);
};
