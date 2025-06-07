import React, { useState } from "react";
import Icon from "../Icon/Icon";
import "./PasswordField.css";

const PasswordField = ({htmlFor, id, texto, placeholder, classNameLabel = "",
    classNameInput = "",
    classNameButton = "",
}) => {
    const [mostrarPassword, setMostrarPassword] = useState(false);

    const alternarPassword = () => {
        setMostrarPassword((prev) => !prev);
    };

    return (
        <div className="password-container">
            <label htmlFor={htmlFor || id} className={`field-title ${classNameLabel}`}>
                {texto}
            </label>

            <div className="container-input">
                <input
                    id={id}
                    type={mostrarPassword ? "text" : "password"}
                    placeholder={placeholder}
                    className={`input-password ${classNameInput}`}
                />

                <button
                    type="button"
                    onClick={alternarPassword}
                    className={`eye-button ${classNameButton}`}
                    aria-label={mostrarPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                    {mostrarPassword ? (
                        <Icon.EYE_OFF className="eye-icon" />
                    ) : (
                        <Icon.EYE className="eye-icon" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default PasswordField;
