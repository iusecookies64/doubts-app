import { AppContext } from "../app/App";
import { useContext } from "react";
import { CreateRoom } from "../create-room/createRoom.component";
import { Room } from "../room/room.component";
import "./main.css";

export function Main() {
    const { state } = useContext(AppContext);
    if (!state.activeRoom) {
        return (
            <div className="main-section">
                <CreateRoom />
            </div>
        );
    } else {
        return (
            <div className="main-section">
                <Room roomId={state.activeRoom} />
            </div>
        );
    }
}
