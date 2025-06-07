import React from 'react';
import LoginForm from '../../features/auth/LoginForm/LoginForm';
import './LoginPage.css';

const LoginPage = () => {
    const handleLogin = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Iniciar Sesión</h2>
                <LoginForm onSubmit={handleLogin} />
            </div>
        </div>
    );
};

export default LoginPage;