const { Router } = require("express");
const router = Router();
const { Users } = require("../models");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const nameSchema = zod.string().min(3);
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

router.post("/signup", async (req, res) => {
    const { userName, email, password } = req.body;
    try {
        nameSchema.parse(userName);
        emailSchema.parse(email);
        passwordSchema.parse(password);
    } catch (err) {
        res.status(403).json({
            success: false,
            message: "invalid input",
        });
        return;
    }

    // checking if userName or email is unique or not,
    try {
        const userDocument = new Users({ userName, email, password }); // throws error when userName or email not unique
        await userDocument.save();
        res.status(200).json({
            success: true,
            message: "Account Created Successfully",
        });
    } catch (err) {
        res.status(403).json({
            success: false,
            message: "username or email is not unique",
        });
    }
});

router.post("/signin", async (req, res) => {
    const { userId, password } = req.body;

    const userDocument = await Users.findOne({
        $or: [{ email: userId }, { userName: userId }], // if userId matches email or username
    });

    if (!userDocument) {
        res.status(401).json({
            message: "invalid credentials",
            success: false,
        });
        return;
    }

    // checking if password is same
    if (userDocument.password !== password) {
        res.status(401).json({
            success: false,
            message: "Wrong Username Or Password",
        });
        return;
    }

    // if found, then we populate all rooms of users and then return them
    await userDocument.populate("rooms");
    const token = jwt.sign({ email: userDocument.email }, jwtPassword);
    const decoded = jwt.verify(token, jwtPassword);
    res.json({
        success: true,
        token,
        userName: userDocument.userName,
        userId: userDocument["_id"],
        rooms: userDocument.rooms,
        message: "Logged In Successfully",
    });
});

module.exports = router;
