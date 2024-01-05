import { SideBar } from "../sidebar/sidebar.component";
import { Main } from "../main/main.component";
import { UserComponent } from "../user/user.component";
import "./App.css";
import { Button } from "../button/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { useState, createContext, useEffect } = require("react");

export const AppContext = createContext();

export function App() {
    const [state, setState] = useState({
        rooms: [],
        activeRoom: null,
        token: window.localStorage.doubtsAppToken,
        userName: "",
        toast,
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
        const res = await fetch("http://localhost:3001/rooms/user-rooms", {
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
                <div className="app">
                    <div className="user-details">
                        <div className="user-name">Hello, {state.userName}</div>
                        <Button content={"Logout"} onClick={logoutUser} />
                    </div>
                    <SideBar
                        rooms={state.rooms}
                        userName={state.userName}
                        activeRoom={state.activeRoom}
                    />
                    <Main />
                </div>
                <ToastContainer containerId={"a"} />
            </AppContext.Provider>
        );
    } else {
        return (
            <AppContext.Provider value={{ state, setState }}>
                <div className="app">
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
