const jwt = require("jsonwebtoken");

exports.CreateToken = (req, res) => {
    const Payload = {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        date: { Name: "Satayjit biswas", City: "Dhaka", admin: true },
    };

    const token = jwt.sign(Payload, "Soooogooo12345");
    console.log(token);
    res.send(token);
};

exports.DeCodeToken = (req, res) => {
    const token = req.headers["token-key"];
    console.log(token);
    jwt.verify(token, "Soooogooo12345", function (err, decode) {
        if (err) {
            res.status(401).json({ status: "invalid token", data: err });
        } else {
            res.status(201).json({ status: "Success", data: decode });
        }
    });
};
