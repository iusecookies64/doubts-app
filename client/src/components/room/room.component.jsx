import { useState, useContext, useEffect } from "react";
import { AppContext } from "../app/App";
import { Doubt } from "../doubt/doubt.component";
import "./room.css";
import { Divider } from "../divider/divider";
import { Button } from "../button/button";
import { toast } from "react-toastify";

export function Room({ roomId }) {
    const { state } = useContext(AppContext);
    const [edit, setEdit] = useState("");
    const [roomData, setRoomData] = useState("");
    const [activeTopic, setActiveTopic] = useState("");
    // fetching room data
    useEffect(() => {
        async function fetchRoomData() {
            const res = await fetch(`${state.url}/rooms/${roomId}`, {
                method: "GET",
                headers: {
                    authorization: state.token,
                },
            });
            const data = await res.json();
            if (!data.success) {
                console.log("failed to get room data");
                return;
            }
            setRoomData(data.room);
            setActiveTopic(data.room.topics[0]["_id"]);
        }
        fetchRoomData();
    }, [roomId]);

    async function addNewTopic() {
        const len = roomData.topics.length;
        const title = `New Topic ${len + 1}`;
        const res = await fetch(`${state.url}/topics/create`, {
            method: "POST",
            headers: {
                authorization: state.token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                roomId,
            }),
        });
        const data = await res.json();
        if (!data.success) {
            console.log("failed to create topic");
            return;
        }

        roomData.topics.push(data.topic);
        setRoomData((oldData) => {
            return {
                ...oldData,
            };
        });
    }
    function editTopic(e) {
        const value = e.target.parentElement.getAttribute("id");

        setEdit(value);
    }
    async function setTopic(e) {
        const topicId = e.target.parentElement.getAttribute("id");
        const newTitle = e.target.parentElement.children[0].value;
        if (!newTitle) {
            setEdit("");
            return;
        }
        const indx = roomData.topics.findIndex(
            (topic) => topic["_id"] === topicId
        );

        const res = await fetch(`${state.url}/topics/update`, {
            method: "POST",
            headers: {
                authorization: state.token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                topicId,
                newTitle,
            }),
        });
        const data = await res.json();

        if (!data.success) {
            console.log("failed to update topic name");
            return;
        }
        roomData.topics[indx].title = newTitle;
        setEdit("");
        setRoomData((oldData) => {
            return {
                ...oldData,
            };
        });
    }

    function showEditButton(e) {
        const editButton = e.target.querySelector("i");
        if (!editButton) return;
        editButton.classList.remove("invisible");
    }
    function hideEditButton(e) {
        const editButton = e.target.querySelector("i");
        if (!editButton) return;
        editButton.classList.add("invisible");
    }

    function copyRoomId() {
        // if (navigator.clipboard) navigator.clipboard.writeText(state.activeRoom);
        toast.success("Copied To Clipboard", {
            theme: "dark",
            autoClose: 1500,
        });
    }

    if (roomData) {
        return (
            <div id={roomData["_id"]} className="room-container">
                <div className="room-title" key={roomData["_id"]}>
                    {roomData.title}
                </div>
                <Divider alignment={"horizontal"} />
                <div className="bar">
                    <div className="topics-container">
                        {roomData.topics.map((topic) => {
                            let classNames = "";
                            if (activeTopic === topic["_id"])
                                classNames = "active-tab";
                            if (edit !== topic["_id"]) {
                                return (
                                    <div
                                        className={`topic-tab ${classNames}`}
                                        id={topic["_id"]}
                                        key={topic["_id"]}
                                        onClick={() => {
                                            setActiveTopic(topic["_id"]);
                                        }}
                                        onMouseEnter={showEditButton}
                                        onMouseLeave={hideEditButton}
                                    >
                                        <div className="topic-name">
                                            {topic.title}
                                        </div>
                                        <i
                                            className="fa-solid fa-pencil invisible"
                                            onClick={editTopic}
                                        ></i>
                                    </div>
                                );
                            } else {
                                return (
                                    <>
                                        <div
                                            className={`topic-tab ${classNames}`}
                                            id={topic["_id"]}
                                            key={topic["_id"]}
                                        >
                                            <input
                                                className="edit-topic-name"
                                                placeholder={topic.title}
                                                type="text"
                                                autoFocus
                                            />
                                            <i
                                                className="fa-solid fa-check"
                                                onClick={setTopic}
                                            ></i>
                                        </div>
                                        <Divider alignment={"vertical"} />
                                    </>
                                );
                            }
                        })}
                        <Button content={"Add"} onClick={addNewTopic} />
                    </div>
                    <Button
                        content={"Share Room Id"}
                        onClick={copyRoomId}
                        className={"share-room"}
                    />
                </div>
                <Divider alignment={"horizontal"} />
                <Doubt topicId={activeTopic} />
            </div>
        );
    } else {
        return (
            <div className="room-container">
                <div>Loading...</div>
            </div>
        );
    }
}
