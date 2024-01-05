const { Topics, Doubts } = require("./models/index");

function socketHandler(socket) {
    socket.on("GetDoubts", async (topicId) => {
        try {
            const topicDocument = await Topics.findById(topicId).populate(
                "doubts"
            );
            socket.emit("DoubtsData", topicDocument.doubts);
        } catch (err) {
            socket.emit("error", "invalid topic id");
        }
    });

    socket.on("CreateDoubt", async ({ topicId, userName, description }) => {
        try {
            // getting topic document
            const topicDocument = await Topics.findById(topicId);
            const doubtDocument = new Doubts({
                description,
                createdBy: userName,
            });
            topicDocument.doubts.push(doubtDocument["_id"]);
            topicDocument.save();
            doubtDocument.save();
            socket.to(topicId).emit("NewDoubt", doubtDocument);
            socket.emit("NewDoubt", doubtDocument);
        } catch (err) {
            socket.emit("error", "invalid topic id or userName");
        }
    });

    socket.on("JoinRoom", (topicId) => {
        socket.join(topicId);
    });

    socket.on(
        "vote",
        async ({ doubtId, topicId, isUpvote, previousVote, unVote }) => {
            // getting room doubt document
            const doubtDocument = await Doubts.findById(doubtId);
            if (!doubtDocument) {
                socket.emit("error", "Invalid Doubt Id");
                return;
            }

            if (isUpvote) {
                if (unVote) {
                    doubtDocument.upvotes--;
                } else {
                    doubtDocument.upvotes++;
                    if (previousVote) doubtDocument.downvotes--;
                }
            } else {
                if (unVote) {
                    doubtDocument.downvotes--;
                } else {
                    doubtDocument.downvotes++;
                    if (previousVote) doubtDocument.upvotes--;
                }
            }
            doubtDocument.save();

            // sending to all people in this room
            socket
                .to(topicId)
                .emit(
                    "vote",
                    doubtId,
                    doubtDocument.upvotes,
                    doubtDocument.downvotes
                );

            // sending to person who voted
            socket.emit(
                "vote",
                doubtId,
                doubtDocument.upvotes,
                doubtDocument.downvotes
            );
        }
    );
}

module.exports = socketHandler;
