const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.headers["token-key"];
    jwt.verify(token, "Soooogooo12345", function (err, decode) {
        if (err) {
            res.status(401).json({ status: "invalid token", data: err });
        } else {
            next();
            console.log(decode);
        }
    });
};
