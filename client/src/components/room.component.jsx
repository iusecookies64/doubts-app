import { useState, useContext, useEffect } from "react";
import { AppContext } from "./app";
import { Doubt } from "./doubt.component";
import { Divider } from "./divider";
import { Button } from "./button";
import { toast } from "react-toastify";

export function Room({ roomId }) {
  const { state } = useContext(AppContext);
  const [edit, setEdit] = useState("");
  const [roomData, setRoomData] = useState("");
  const [activeTopic, setActiveTopic] = useState("");
  const inputStyles =
    "text-sm text-white bg-transparent outline-none placeholder:text-white";
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
  async function setTopic(topicId, newTitle) {
    if (!newTitle) {
      setEdit("");
      return;
    }
    const indx = roomData.topics.findIndex((topic) => topic["_id"] === topicId);

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
      <div id={roomData["_id"]} className="flex flex-col h-full w-full px-4">
        <div
          className="w-full py-4 flex text-lg items-center justify-center lg:text-xl font-bold"
          key={roomData["_id"]}
        >
          {roomData.title}
        </div>
        <div className="flex justify-between items-center">
          <div className="max-w-full flex justify-start items-center py-2 overflow-x-auto">
            {roomData.topics.map((topic) => {
              let color = "";
              if (activeTopic === topic["_id"]) color = "bg-color-2";
              else color = "bg-deep";
              if (edit !== topic["_id"]) {
                return (
                  <div
                    className={`min-w-[10rem] h-8 lg:h-12 flex justify-between items-center cursor-pointer mr-2 p-2 text-white text-sm ${color}`}
                    id={topic["_id"]}
                    key={topic["_id"]}
                    onClick={() => {
                      setActiveTopic(topic["_id"]);
                    }}
                    onMouseEnter={showEditButton}
                    onMouseLeave={hideEditButton}
                  >
                    <div className="topic-name">{topic.title}</div>{" "}
                    <i
                      className="fa-solid fa-pencil invisible"
                      onClick={editTopic}
                    ></i>
                  </div>
                );
              } else {
                return (
                  <div
                    className={`min-w-[8rem] lg:min-w-[10rem] h-8 lg:h-12 flex justify-between items-center cursor-pointer mr-2 px-2 text-white text-sm ${color}`}
                    id={topic["_id"]}
                    key={topic["_id"]}
                  >
                    <input
                      className={inputStyles}
                      placeholder={topic.title}
                      onBlur={() => setEdit("")}
                      onKeyUp={(e) => {
                        if (e.key === "Enter")
                          setTopic(topic["_id"], e.target.value);
                      }}
                      type="text"
                      autoFocus
                    />
                  </div>
                );
              }
            })}
            <Button
              content={"Add"}
              className={"h-8 lg:h-12"}
              onClick={addNewTopic}
            />
          </div>
          <Button
            content={"Share"}
            onClick={copyRoomId}
            className={"flex-nowrap h-8 lg:h-12 ml-2"}
          />
        </div>
        <Divider alignment={"horizontal"} />
        <Doubt topicId={activeTopic} />
      </div>
    );
  } else {
    return (
      <div className="room-container">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }
}
