import { SideBar } from "./sidebar.component";
import { Main } from "./main.component";
import { UserComponent } from "./user.component";
// import "./App.css";
import { Button } from "./button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

export function App() {
  const [state, setState] = useState({
    url: "http://localhost:3001",
    rooms: [],
    activeRoom: window.localStorage.activeRoom,
    token: window.localStorage.doubtsAppToken,
    userName: "",
    toast,
  });
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  function logoutUser() {
    window.localStorage.doubtsAppToken = "";
    setState((oldState) => {
      return {
        ...oldState,
        token: window.localStorage.doubtsAppToken,
        userName: "",
        activeRoom: "",
      };
    });
    toast.success("Logged Out");
  }

  async function getRooms() {
    const res = await fetch(`${state.url}/rooms/user-rooms`, {
      method: "GET",
      headers: {
        authorization: state.token,
      },
    });
    const data = await res.json();
    if (!data.success) {
      window.localStorage.doubtsAppToken = "";
      setState((oldState) => {
        return {
          ...oldState,
          token: window.localStorage.doubtsAppToken,
        };
      });
    } else {
      setState((oldState) => {
        return {
          ...oldState,
          rooms: data.rooms,
          userName: data.userName,
        };
      });
    }
  }
  useEffect(() => {
    if (state.token) {
      getRooms();
    }
  }, []);

  if (state.token) {
    return (
      <AppContext.Provider value={{ state, setState }}>
        <div className="app realtive min-h-dvh min-w-dvw flex bg-light-purple font-[poppins]">
          <SideBar
            rooms={state.rooms}
            userName={state.userName}
            activeRoom={state.activeRoom}
            width={width}
          />
          <div className="absolute top-2 right-0 md:right-2 flex items-center justify-center text-black">
            <div className="user-name mx-4 hidden md:block">
              Hello, {state.userName}
            </div>
            <Button
              className={"text-sm scale-[0.75] md:scale-[0.9]"}
              onClick={logoutUser}
            >
              <i className="fa-solid text-xl p-[1px] fa-right-from-bracket"></i>
            </Button>
          </div>
          <Main />
        </div>
        <ToastContainer containerId={"a"} />
      </AppContext.Provider>
    );
  } else {
    return (
      <AppContext.Provider value={{ state, setState }}>
        <div className="min-h-dvh min-w-dvw flex items-center justify-center bg-light-purple font-[poppins]">
          <UserComponent />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </AppContext.Provider>
    );
  }
}
