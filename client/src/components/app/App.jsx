import { SideBar } from "../sidebar/sidebar.component";
import { Main } from "../main/main.component";
import { UserComponent } from "../user/user.component";
import "./App.css";
import { Button } from "../button/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

export function App() {
    const [state, setState] = useState({
        url: "http://localhost:3001",
        rooms: [],
        activeRoom: null,
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
                <div className="app">
                    <div className="user-details">
                        {width > 700 ? (
                            <div className="user-name">
                                Hello, {state.userName}
                            </div>
                        ) : null}
                        <Button content={"Logout"} onClick={logoutUser} />
                    </div>
                    <SideBar
                        rooms={state.rooms}
                        userName={state.userName}
                        activeRoom={state.activeRoom}
                        width={width}
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
