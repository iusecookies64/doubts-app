const jwt = require("jsonwebtoken");
const jwtPassword = process.env["JWT_SECRET"];
const { Users } = require("../models/index");

async function authorizeUser(req, res, next) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const userDocument = await Users.findOne({ email: decoded.email });
        if (!userDocument) {
            throw Error("unauthorized");
        }
        res.locals.userDocument = userDocument;
        next();
    } catch (err) {
        res.status(401).json({
            message: "unauthorized",
            success: false,
        });
        return;
    }
}

module.exports = authorizeUser;
