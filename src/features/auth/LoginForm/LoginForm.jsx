import React from 'react';
import Field from '../../../components/Field/Field'
import PasswordField from '../../../components/PasswordField/PasswordField';
import Button from '../../../components/Button/Button';
import './LoginForm.css';

const LoginForm = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="form-login">
            <Field htmlfor="email" id="email" tipo="email" texto="Email" placeholder="john.doe@example.com" />
            <PasswordField texto="Contraseña" placeholder="Password" />
            <Button texto="Iniciar Sesión" />
        </form>
    );
};

export default LoginForm;
