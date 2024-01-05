import React, { useState } from "react";
import "./flash.css";

export const Flash = ({ message, duration, type }) => {
    let [visibility, setVisibility] = useState(true);

    setTimeout(() => {
        setVisibility(false);
    }, duration);
    return (
        visibility && (
            <div className={`alert alert-${type}`}>
                <p>{message}</p>
            </div>
        )
    );
};
