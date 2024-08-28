import React from "react";
import './ButtonReaction.css';

interface ButtonInfo {
    className?: string;
    onClick: () => void;
    children?: React.ReactNode;
}

const ButtonReaction: React.FC<ButtonInfo> = ({ className = '', children
    , onClick
}) => {
    return (
        <button className={`${className} button`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ButtonReaction;