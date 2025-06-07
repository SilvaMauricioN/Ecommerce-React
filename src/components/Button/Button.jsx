import React from "react";
import "./Button.css";

const Button = ({ texto, tipo = "submit", onClick, claseExtra = "" }) => {
    return (
        <button
            type={tipo}
            className={`btn-register ${claseExtra}`}
            onClick={onClick}
        >
            {texto}
        </button>
    );
};

export default Button;