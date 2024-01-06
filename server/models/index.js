const mongoose = require("mongoose");

// Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/doubtsapp");
// mongodb+srv://traghav64:<password>@cluster.xsbvklr.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(process.env.DATABASE_URL);
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        required: true,
    },
    rooms: [
        // list of all the rooms that the user is a part of
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rooms",
        },
    ],
});

const roomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    topics: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Topics",
        },
    ],
    createdBy: {
        type: String,
        required: true,
    },
});

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    doubts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doubts",
        },
    ],
});

const doubtSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
    },
    upvotes: {
        type: Number,
        default: 0,
    },
    downvotes: {
        type: Number,
        default: 0,
    },
});

const Rooms = mongoose.model("Rooms", roomSchema);
const Topics = mongoose.model("Topics", topicSchema);
const Doubts = mongoose.model("Doubts", doubtSchema);
const Users = mongoose.model("Users", userSchema);

module.exports = {
    Rooms,
    Topics,
    Doubts,
    Users,
};
