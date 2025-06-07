import React from 'react';
import Field from '../../../components/Field/Field';
import PasswordField from '../../../components/PasswordField/PasswordField';
import Button from '../../../components/Button/Button';
import './RegisterForm.css';

const RegisterForm = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="form-register">
            <div className="field-pair">
                <Field htmlfor="nombre" id="nombre" tipo="text" texto="Primer Nombre" placeholder="john" />
                <Field htmlfor="Apellido" id="Apellido" tipo="text" texto="Apellido" placeholder="doe" />
            </div>

            <Field htmlfor="Email" id="Email" tipo="email" texto="Email" placeholder="john.doe@example.com" />
            <Field htmlfor="Tel" id="Tel" tipo="tel" texto="Telefono" placeholder="+1 (555) 000-000" />

            <PasswordField texto="Contraseña" placeholder="Password" />
            <PasswordField texto="Confirmar Contraseña" placeholder="Confirmar Password" />
            <Button texto="Registrarse" />
        </form>
    );
};

export default RegisterForm;
