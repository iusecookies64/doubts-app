import { useState, useContext } from "react";
import { AppContext } from "./app";
import { toast } from "react-toastify";
import { Button } from "./button";

export function UserComponent() {
  const [signupState, setSignupState] = useState(false);
  const { state, setState } = useContext(AppContext);

  const inputStyles =
    "my-4 p-2 w-full text-black text-lg outline-none rounded-xl placeholder:text-black md:text-xl";

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
    const res = await fetch(`${state.url}/users/signup`, {
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

    const url = `${state.url}/users/signin`;
    const res = await fetch(url, {
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
      <div className="userComponent bg-deep flex-col items-center justify-center py-4 px-8 text-white text-lg rounded-xl">
        <div className="title my-4 flex justify-center">Sign In</div>
        <input
          className={inputStyles}
          type="text"
          placeholder="Email Or Username"
          id="userId"
        />
        <br />
        <input
          className={inputStyles}
          type="password"
          placeholder="Password"
          id="password"
        />
        <div className="controls my-4 flex justify-between">
          <Button
            className={"cursor-pointer"}
            content="Log In"
            onClick={logninUser}
          />
          <Button
            className={"cursor-pointer"}
            content="Sign Up"
            onClick={toggleSignup}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="userComponent bg-deep flex-col items-center justify-center py-4 px-8 text-white text-lg rounded-xl">
        <div className="title my-4 flex justify-center text-white">Sign Up</div>
        <input
          className={inputStyles}
          type="text"
          placeholder="Username"
          id="userName"
        />
        <br />
        <input
          className={inputStyles}
          type="text"
          placeholder="Email"
          id="email"
        />
        <br />
        <input
          className={inputStyles}
          type="password"
          placeholder="Password"
          id="password"
        />
        <br />
        <div className="controls flex justify-between my-4">
          <Button
            className={"cursor-pointer"}
            content="Create Account"
            onClick={createUserAccount}
          />
          <Button
            className={"cursor-pointer"}
            content="Sign In"
            onClick={toggleSignup}
          />
        </div>
      </div>
    );
  }
}
