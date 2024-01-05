import { useState, useContext } from "react";
import { AppContext } from "../app/App";
import "./drop-down-list.css";
import { toast } from "react-toastify";

export function DropDownList({ list, title }) {
    const { state, setState } = useContext(AppContext);

    function setActiveRoom(id) {
        setState((oldState) => {
            return {
                ...oldState,
                activeRoom: id,
            };
        });
    }

    async function deleteRoom(roomId) {
        // confirming from the user
        if (!window.confirm("Delete This Room")) return;
        // sending req to delete this room
        const res = await fetch(`http://localhost:3001/rooms/${roomId}`, {
            method: "DELETE",
            headers: {
                authorization: state.token,
            },
        });

        const data = await res.json();
        if (!data.success) {
            toast.error("Error In Deleting Room", {
                theme: "dark",
                autoClose: 1500,
            });
            return;
        }

        toast.success("Room Deleted Successfully", {
            theme: "dark",
            autoClose: 1500,
        });
        // removing room from current list of rooms
        setState((oldState) => {
            const indx = oldState.rooms.findIndex(
                (room) => room["_id"] === roomId
            );
            if (indx === -1) return oldState;
            oldState.rooms.splice(indx, 1);
            // if active room was this room then we change it to null
            if (oldState.activeRoom === roomId) oldState.activeRoom = "";
            return {
                ...oldState,
            };
        });
    }

    function showIcon(e) {
        const icon = e.target.querySelector("i");
        if (!icon) return;
        icon.classList.remove("invisible");
    }

    function hideIcon(e) {
        const icon = e.target.querySelector("i");
        if (!icon) return;
        icon.classList.add("invisible");
    }
    return (
        <div className="drop-down-list">
            <div className="list-item list-title">{title.toUpperCase()}</div>
            <div className="list-container">
                {(() => {
                    if (list.length === 0)
                        return <div className="list-item">No Rooms Yet</div>;
                    else
                        return list.map((listItem) => (
                            <div
                                key={listItem["_id"]}
                                className="list-item hover"
                                onClick={() => {
                                    setActiveRoom(listItem["_id"]);
                                }}
                                onMouseEnter={showIcon}
                                onMouseLeave={hideIcon}
                            >
                                {listItem.title[0].toUpperCase() +
                                    listItem.title.slice(1)}
                                <i
                                    className="fa-solid fa-trash-can invisible"
                                    onClick={() => deleteRoom(listItem["_id"])}
                                ></i>
                            </div>
                        ));
                })()}
            </div>
        </div>
    );
}
