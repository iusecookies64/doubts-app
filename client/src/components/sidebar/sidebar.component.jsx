import { DropDownList } from "../dropdownlist/dropdown.component";
import { CreateRoom } from "../create-room/createRoom.component";
import { AppContext } from "../app/App";
import { Button } from "../button/button";
import { Divider } from "../divider/divider";
import "./sidebar.css";
import { useContext } from "react";
import { toast } from "react-toastify";

export function SideBar({ rooms, userName, activeRoom }) {
    const { state, setState } = useContext(AppContext);
    const previousRooms = rooms.filter((room) => room.createdBy !== userName);
    const userRooms = rooms.filter((room) => room.createdBy === userName);
    async function joinRoom() {
        const input = document.getElementById("join-room-id");
        const id = input.value;
        input.value = "";

        if (!id) return;
        const res = await fetch(`http://localhost:3001/rooms/join/${id}`, {
            method: "POST",
            headers: {
                authorization: state.token,
            },
        });
        const data = await res.json();
        if (!data.success) {
            toast.error("Room Not Found", { theme: "dark" });
            return;
        } else {
            toast.success("Joined Room Successfully", { theme: "dark" });
        }

        setState((oldState) => {
            oldState.rooms.push(data.room);
            return {
                ...oldState,
                activeRoom: data.room["_id"],
            };
        });
    }
    return (
        <div className="sidebar">
            <div className="logo">Doubts App</div>
            <Divider alignment={"horizontal"} />
            <div className="sidebar-content">
                <DropDownList list={previousRooms} title="Previous Rooms" />
                <Divider alignment={"horizontal"} />
                <DropDownList list={userRooms} title="My Rooms" />
                {(() => {
                    if (activeRoom) {
                        return <CreateRoom />;
                    }
                })()}
            </div>
            <div className="join-room">
                <input id="join-room-id" type="text" placeholder="Room Id" />
                <Button content="Join Room" onClick={joinRoom} />
            </div>
        </div>
    );
}
