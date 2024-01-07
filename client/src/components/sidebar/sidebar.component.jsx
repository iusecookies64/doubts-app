import { DropDownList } from "../dropdownlist/dropdown.component";
import { CreateRoom } from "../create-room/createRoom.component";
import { AppContext } from "../app/App";
import { Button } from "../button/button";
import { Divider } from "../divider/divider";
import "./sidebar.css";
import { useContext } from "react";
import { toast } from "react-toastify";

export function SideBar({ rooms, userName, activeRoom, width }) {
    const { state, setState } = useContext(AppContext);
    const previousRooms = rooms.filter((room) => room.createdBy !== userName);
    const userRooms = rooms.filter((room) => room.createdBy === userName);
    const bars = <i className="fa-solid fa-bars"></i>;
    const xbar = <i className="fa-solid fa-xmark"></i>;
    let sideBarClass = "";
    if (width < 950) {
        sideBarClass = "sidebar-float display-none";
    }
    const xButton = (
        <Button
            content={xbar}
            onClick={toggleSideBar}
            className="sidebar-button float-right"
        />
    );
    const barsButton = (
        <Button
            content={bars}
            onClick={toggleSideBar}
            className="sidebar-button float-left"
        />
    );
    async function joinRoom() {
        const input = document.getElementById("join-room-id");
        const id = input.value;
        input.value = "";

        if (!id) return;
        const res = await fetch(`${state.url}/rooms/join/${id}`, {
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
            // for responsive
            if (width < 950) toggleSideBar();
        }

        setState((oldState) => {
            oldState.rooms.push(data.room);
            return {
                ...oldState,
                activeRoom: data.room["_id"],
            };
        });
    }

    function toggleSideBar() {
        if (width > 950) return;
        const element = document.getElementById("sidebar");
        element.classList.toggle("display-none");
    }
    return (
        <>
            {width < 950 ? barsButton : null}
            <div id="sidebar" className={`sidebar ${sideBarClass}`}>
                {width < 950 ? xButton : null}
                <div className="logo">Doubts App</div>
                <Divider alignment={"horizontal"} />
                <div className="sidebar-content">
                    <DropDownList
                        list={previousRooms}
                        title="Previous Rooms"
                        toggleSideBar={toggleSideBar}
                    />
                    <Divider alignment={"horizontal"} />
                    <DropDownList
                        list={userRooms}
                        title="My Rooms"
                        toggleSideBar={toggleSideBar}
                    />
                    {activeRoom ? <CreateRoom /> : null}
                </div>
                <div className="join-room">
                    <input
                        id="join-room-id"
                        type="text"
                        placeholder="Room Id"
                    />
                    <Button content="Join Room" onClick={joinRoom} />
                </div>
            </div>
        </>
    );
}
