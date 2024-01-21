import { useState, useContext, useRef } from "react";
import { AppContext } from "./app";
import { toast } from "react-toastify";

export function DropDownList({ list, title, toggleSideBar }) {
  const { state, setState } = useContext(AppContext);
  const listRef = useRef();
  const downIcon = useRef();

  function setActiveRoom(id) {
    // toggleSideBar();
    setState((oldState) => {
      window.localStorage.activeRoom = id;
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
    const res = await fetch(`${state.url}/rooms/${roomId}`, {
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
      const indx = oldState.rooms.findIndex((room) => room["_id"] === roomId);
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

  function showList() {
    listRef.current.classList.toggle("max-h-40");
    // listRef.current.classList.toggle("");
    downIcon.current.classList.toggle("rotate-180");
  }
  return (
    <div className="drop-down-list flex-col text-white relative overflow-hidden mb-4 w-60">
      <div
        className="w-full border-b-[1px] flex justify-between cursor-pointer mb-2"
        onClick={showList}
      >
        <div>{title.toUpperCase()}</div>
        <div>
          <i
            ref={downIcon}
            className="fa-solid fa-angle-down transition-all linear duration-500"
          ></i>
        </div>
      </div>
      <div className="overflow-hidden relative">
        <div
          ref={listRef}
          className="overflow-hidden transition-all max-h-0 linear duration-500 bg-color-2 px-2 rounded-lg"
        >
          {(() => {
            if (list.length === 0)
              return <div className="list-item">No Rooms Yet</div>;
            else
              return list.map((listItem) => (
                <div
                  key={listItem["_id"]}
                  className="hover my-2 w-full flex justify-between cursor-pointer"
                  onClick={() => {
                    setActiveRoom(listItem["_id"]);
                  }}
                  onMouseEnter={showIcon}
                  onMouseLeave={hideIcon}
                >
                  {listItem.title[0].toUpperCase() + listItem.title.slice(1)}
                  <i
                    className="fa-solid fa-trash-can invisible"
                    onClick={() => deleteRoom(listItem["_id"])}
                  ></i>
                </div>
              ));
          })()}
        </div>
      </div>
    </div>
  );
}
