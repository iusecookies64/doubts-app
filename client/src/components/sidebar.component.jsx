import { DropDownList } from "./dropdown.component";
import { CreateRoom } from "./createRoom.component";
import { AppContext } from "./app";
import { Button } from "./button";
import { Divider } from "./divider";
// import "./sidebar.css";
import { useContext } from "react";
import { toast } from "react-toastify";

export function SideBar({ rooms, userName, activeRoom, width }) {
  const { state, setState } = useContext(AppContext);
  const previousRooms = rooms.filter((room) => room.createdBy !== userName);
  const userRooms = rooms.filter((room) => room.createdBy === userName);

  const inputStyles =
    "my-4 p-2 text-black text-lg outline-none rounded-xl placeholder:text-black md:text-xl";

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
    document.getElementById("sidebar").classList.toggle("translate-x-[-100%]");
    document.getElementById("cross").classList.toggle("hidden");
    document.getElementById("cross").classList.toggle("flex");
  }
  return (
    <>
      <div
        className="absolute top-4 left-4 text-2xl cursor-pointer lg:hidden"
        onClick={toggleSideBar}
      >
        <i className="fa-solid fa-bars"></i>
      </div>
      <div
        id="sidebar"
        className={`min-h-full bg-deep translate-x-[-100%] lg:translate-x-0 transition-all linear duration-300 absolute top-0 left-0 lg:relative lg:flex px-4 flex-col items-center justify-start z-50`}
      >
        {/* {width < 950 ? xButton : null} */}
        <div className="logo text-white text-4xl my-6 font-bold">
          Doubts App
        </div>
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
          {activeRoom ? <CreateRoom small={true} /> : null}
        </div>
        <div className="absolute bottom-0 w-full py-4 flex flex-col justify-center items-center">
          <input
            className="p-2 text-black text-sm outline-none placeholder:text-black mb-4"
            id="join-room-id"
            type="text"
            placeholder="Room Id"
          />
          <Button content="Join Room" onClick={joinRoom} />
        </div>
      </div>
      <div
        id="cross"
        className="hidden h-dvh w-dvw absolute top-0 left-0 bg-modal z-10 text-white text-2xl p-2 justify-end cursor-pointer"
        onClick={toggleSideBar}
      >
        <i className="fa-solid fa-xmark"></i>
      </div>
    </>
  );
}
