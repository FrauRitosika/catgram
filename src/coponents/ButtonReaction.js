import React from "react";

export default function ButtonReaction ({ className, onClick, children }) {
    return (
        <button className={`${className} button`} onClick={onClick}>
            {children}
        </button>
    );
}