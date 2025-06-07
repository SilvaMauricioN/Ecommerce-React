import React from "react";
import "./Field.css";

const Field = ({ htmlFor, id, tipo = "text", texto, placeholder, name, classNameLabel = "label-form", classNameInput = "input-form" }) => {
    return (
        <div className="input-field">
            <label htmlFor={htmlFor || id} className={classNameLabel}>
                {texto}
            </label>

            <input
                id={id}
                type={tipo}
                placeholder={placeholder}
                name={name}
                className={classNameInput}
            />
        </div>
    );
};

export default Field;