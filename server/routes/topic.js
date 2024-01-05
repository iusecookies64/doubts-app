const { Router } = require("express");
const router = Router();
const { Rooms, Topics } = require("../models");

router.post("/create", async (req, res) => {
    const { title, roomId } = req.body;
    const roomDocument = await Rooms.findById(roomId);
    const topicDocument = new Topics({ title });
    if (!topicDocument || !roomDocument) {
        res.status(404).json({
            success: false,
            message: "Invalid Topic Name Or Room Id",
        });
        return;
    }
    roomDocument.topics.push(topicDocument["_id"]);
    topicDocument.save();
    roomDocument.save();
    res.json({
        success: true,
        topic: topicDocument,
    });
});

router.post("/update", async (req, res) => {
    const { newTitle, topicId } = req.body;
    try {
        const topicDocument = await Topics.findById(topicId);
        if (!topicDocument) {
            res.status(404).json({
                success: false,
                message: "Invalid Topic Id",
            });
            return;
        }
        topicDocument.title = newTitle;
        topicDocument.save();
        res.json({
            success: true,
        });
    } catch (err) {
        res.json({
            success: false,
            message: "Invalid Topic Name",
        });
    }
});

module.exports = router;
