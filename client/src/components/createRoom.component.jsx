import { useContext, useState } from "react";
import { AppContext } from "./app";
import { Button } from "./button";
// import "./create-room.css";
import { toast } from "react-toastify";

export function CreateRoom({ small }) {
  const [activeForm, setActiveForm] = useState(false);
  const { state, setState } = useContext(AppContext);
  const inputStyles = small
    ? "my-2 p-2 text-black text-sm outline-none placeholder:text-black"
    : "my-4 p-2 text-black text-lg outline-none placeholder:text-black md:text-xl";
  function toggleActiveForm() {
    setActiveForm(!activeForm);
  }

  async function createRoom(e) {
    e.preventDefault();
    // getting room title, and topic from input values
    const title = e.target.parentElement.children[0].value;
    const topic = e.target.parentElement.children[1].value;
    if (!title || !topic) return; // if any of the field is empty we return

    // calling server to create room
    const res = await fetch(`${state.url}/rooms/create-room/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: state.token,
      },
      body: JSON.stringify({ title, topic }),
    });

    // server returns data as object {success, room}
    const data = await res.json();

    // if rooms created successfully then we update the state
    if (data.success) {
      toast.success("Room Created Successfully", {
        theme: "dark",
      });
      setState((oldState) => {
        oldState.rooms.push(data.room);
        return {
          ...oldState,
          activeRoom: data.room["_id"], // setting active as created room
        };
      });
    } else {
      toast.error("Error In Creating Room", { theme: "dark" });
    }
  }
  return (
    <div className="create-room">
      {(() => {
        if (activeForm)
          return (
            <form className="create-room-form flex flex-col">
              <input
                className={inputStyles}
                id="create-room-title"
                type="text"
                placeholder="Room Name"
              />
              <input
                className={inputStyles}
                id="create-room-subroom"
                type="text"
                placeholder="Topic 1"
              />
              <Button content="Create New Room" onClick={createRoom} />
            </form>
          );
        else return <Button content="Create Room" onClick={toggleActiveForm} />;
      })()}
    </div>
  );
}
