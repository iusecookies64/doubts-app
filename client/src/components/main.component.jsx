import { AppContext } from "./app";
import { useContext } from "react";
import { CreateRoom } from "./createRoom.component";
import { Room } from "./room.component";
// import "./main.css";

export function Main() {
  const { state } = useContext(AppContext);
  if (!state.activeRoom) {
    return (
      <div className="main-section flex items-center justify-center w-full h-100 ">
        <CreateRoom />
      </div>
    );
  } else {
    return (
      <div className="main-section flex items-center justify-center w-full h-100">
        <Room roomId={state.activeRoom} />
      </div>
    );
  }
}
