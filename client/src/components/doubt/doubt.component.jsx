import { useContext, useEffect, useState } from "react";
import "./doubt.css";
import { io } from "socket.io-client";
import { AppContext } from "../app/App";
import { Button } from "../button/button";
let socket;
export function Doubt({ topicId }) {
    const [isConnected, setIsConnected] = useState(false);
    const [doubtList, setDoubtList] = useState([]);
    const { state } = useContext(AppContext);
    // here we send a socket connection to server
    useEffect(() => {
        socket = io(`${state.url}`);
        socket.on("connect", () => {
            setIsConnected(true);
            // emitting event to get doubt list
            // joining topic room when connection established
            socket.emit("JoinRoom", topicId);
            socket.emit("GetDoubts", topicId);
        });

        socket.on("DoubtsData", (data) => {
            setDoubtList(data);
        });

        socket.on("NewDoubt", (data) => {
            setDoubtList((oldList) => {
                return [...oldList, data];
            });
        });

        socket.on("vote", (doubtId, upvotes, downvotes) => {
            // console.log("vote", doubtId, upvotes, downvotes);
            setDoubtList((oldList) => {
                const indx = oldList.findIndex((doubt) => {
                    // console.log(doubt["_id"] === doubtId);
                    return doubt["_id"] === doubtId;
                });
                if (indx === -1) {
                    // console.log("invalid tatti");
                    return oldList; // return old list
                }
                // removing disabled class from element
                document.getElementById(doubtId).classList.remove("disabled");
                // updating list
                oldList[indx].upvotes = upvotes;
                oldList[indx].downvotes = downvotes;
                return [...oldList];
            });
        });

        socket.on("error", (err) => {
            console.log(err);
        });

        return () => {
            socket.disconnect();
        };
    }, [topicId]);

    function askDoubt() {
        const input = document.getElementById("ask-doubt");
        const description = input.value;
        input.value = "";
        if (!description) return;
        socket.emit("CreateDoubt", {
            description,
            userName: state.userName,
            topicId,
        });
    }
    function vote(iconElement, doubtId, isUpvote) {
        // checking if button is disabled or not
        const element = document.getElementById(doubtId);
        if (element.classList.contains("disabled")) return;

        const currElement = iconElement.parentElement;

        // checking if same vote casted previously
        if (iconElement.classList.contains("voted")) {
            // user unvoted
            iconElement.classList.remove("voted");
            socket.emit("vote", {
                doubtId,
                topicId,
                isUpvote,
                previousVote: true,
                unVote: true,
            });
            return;
        }
        // adding voted class to color the icon
        iconElement.classList.add("voted");

        // checking if this element was up voted previously
        let siblingElement;
        if (isUpvote) siblingElement = currElement.nextElementSibling;
        else siblingElement = currElement.previousElementSibling;

        let previousVote = false;
        if (siblingElement.querySelector("i").classList.contains("voted")) {
            // remove this class from siblingElement icon
            siblingElement.querySelector("i").classList.remove("voted");
            previousVote = true;
        }

        socket.emit("vote", {
            doubtId,
            topicId,
            isUpvote,
            previousVote,
            unVote: false,
        });
        // addin disabled so that no upvote till update from server comes
        element.classList.add("disabled");
    }

    if (!isConnected) {
        return <div className="doubt-container">Connecting To Room</div>;
    } else {
        // sorting the array
        doubtList.sort((a, b) => {
            if (a.upvotes > b.upvotes) return -1;
            else return 1;
        });
        return (
            <div className="doubt-container">
                <div className="active-doubts">
                    {doubtList.map((doubt) => (
                        <div
                            className="doubt"
                            key={doubt["_id"]}
                            id={doubt["_id"]}
                        >
                            <div className="doubt-sidebar">
                                <div className="votes">
                                    {doubt.upvotes}
                                    <i
                                        className="fa-solid fa-up-long"
                                        onClick={(e) => {
                                            vote(e.target, doubt["_id"], true);
                                        }}
                                    ></i>
                                </div>
                                <div className="votes">
                                    {doubt.downvotes}
                                    <i
                                        className="fa-solid fa-down-long"
                                        onClick={(e) => {
                                            vote(e.target, doubt["_id"], false);
                                        }}
                                    ></i>
                                </div>
                            </div>
                            <div className="doubt-content">
                                {doubt.description}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="doubt-input">
                    <input
                        id="ask-doubt"
                        type="text"
                        placeholder="Ask Doubt"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") askDoubt();
                        }}
                    />
                    <Button content={"Ask"} onClick={askDoubt} />
                </div>
            </div>
        );
    }
}
