const { Router, response } = require("express");
const router = Router();
const { Rooms, Topics } = require("../models");
const { use } = require("./room");
const zod = require("zod");

router.get("/user-rooms", async (req, res) => {
    const userDocument = await res.locals.userDocument.populate("rooms");
    res.json({
        success: true,
        rooms: userDocument.rooms,
        userName: userDocument.userName,
    });
});

router.post("/join/:roomId", async (req, res) => {
    const { roomId } = req.params;
    const { userDocument } = res.locals;
    // verifying id
    try {
        const isPresent = userDocument.rooms.some(
            (room) => room["_id"] == roomId
        );
        if (isPresent) {
            throw Error("room already joined");
        }
        const roomDocument = await Rooms.findOne({ _id: roomId });
        if (!roomDocument) {
            throw Error("room not found");
        }

        userDocument.rooms.push(roomDocument["_id"]);
        userDocument.save();
        res.json({ success: true, room: roomDocument });
    } catch (err) {
        res.status(404).json({ success: false, message: "Invalid Room Id" });
    }
});

router.get("/:roomId", async (req, res) => {
    const { roomId } = req.params;
    try {
        const roomDocument = await Rooms.findById(roomId).populate("topics");
        res.json({
            success: true,
            room: roomDocument,
        });
    } catch (err) {
        res.json({
            success: false,
            message: "Invalid Room Id",
        });
    }
});

router.post("/create-room", async (req, res) => {
    const { title, topic } = req.body;
    const { userDocument } = res.locals;

    // checking if user has some rooms with same name or not
    const roomDocument = new Rooms({
        title,
        createdBy: userDocument.userName,
    });
    const topicDocument = new Topics({
        title: topic,
    });

    // pushing the topic into the room
    roomDocument["topics"].push(topicDocument["_id"]);

    // pushing the room into the user rooms
    userDocument.rooms.push(roomDocument["_id"]);
    roomDocument.save();
    userDocument.save();
    topicDocument.save();
    res.json({
        success: true,
        message: "Room Created Successfully",
        room: roomDocument,
    });
});

router.delete("/:roomId", async (req, res) => {
    const { userDocument } = res.locals;
    const { roomId } = req.params;
    try {
        // const roomDocument = await Rooms.findById(roomId);
        // for now we only delete room from users room list and not completely from db
        const indx = userDocument.rooms.findIndex((room) => room == roomId);
        if (indx === -1) {
            throw Error("Room not found");
        }

        userDocument.rooms.splice(indx, 1);
        userDocument.save();
        res.json({ success: true, message: "Room Deleted Successfully" });
    } catch (err) {
        res.status(403).json({
            success: false,
            message: "Room was not deleted",
        });
    }
});

module.exports = router;
