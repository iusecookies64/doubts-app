import { useState, useContext } from "react";
import "./user.css";
import { AppContext } from "../app/App";
import { toast } from "react-toastify";
import { Button } from "../button/button";

export function UserComponent() {
    const [signupState, setSignupState] = useState(false);
    const { setState } = useContext(AppContext);

    function toggleSignup() {
        setSignupState(!signupState);
    }

    async function createUserAccount() {
        const userName = document.getElementById("userName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const bodyObj = {
            userName,
            email,
            password,
        };
        const res = await fetch("http://localhost:3001/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyObj),
        });

        const data = await res.json();
        if (data.success) {
            setSignupState(!signupState);
            toast.success("Account Created Successfully", {
                theme: "dark",
                autoClose: 1500,
            });
        } else {
            toast.error(data.message, {
                theme: "dark",
                autoClose: 1500,
            });
        }
    }

    async function logninUser() {
        const userId = document.getElementById("userId").value;
        const password = document.getElementById("password").value;
        const bodyObj = {
            userId,
            password,
        };
        const res = await fetch("http://localhost:3001/users/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyObj),
        });
        const data = await res.json();
        if (data.success) {
            window.localStorage.doubtsAppToken = data.token;
            // changing global state
            toast.success("Login Successful", {
                theme: "dark",
                autoClose: 1500,
            });
            setState((oldState) => {
                return {
                    ...oldState,
                    token: data.token,
                    userName: data.userName,
                    userId: data.userId,
                    rooms: data.rooms,
                };
            });
        } else {
            // showing error message
            toast.error(data.message, {
                theme: "dark",
                autoClose: 1500,
            });
        }
    }

    if (!signupState) {
        return (
            <div className="userComponent">
                <div className="title">Sign In</div>
                <input
                    type="text"
                    placeholder="Email Or Username"
                    id="userId"
                />
                <input type="password" placeholder="Password" id="password" />
                <div className="controls">
                    <Button content="Log In" onClick={logninUser} />
                    <Button content="Sign Up" onClick={toggleSignup} />
                </div>
            </div>
        );
    } else {
        return (
            <div className="userComponent">
                <div className="title">Sign Up</div>
                <input type="text" placeholder="Username" id="userName" />
                <input type="text" placeholder="Email" id="email" />
                <input type="password" placeholder="Password" id="password" />
                <div className="controls">
                    <Button
                        content="Create Account"
                        onClick={createUserAccount}
                    />
                    <Button content="Sign In" onClick={toggleSignup} />
                </div>
            </div>
        );
    }
}
