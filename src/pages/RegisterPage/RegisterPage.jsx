import React, {useState} from 'react'
import RegisterForm from '../../features/auth/RegisterForm/RegisterForm'
import './RegisterPage.css'

const RegisterPage = () => {
    const [formValues, setformValues] = useState()
    const dataForm = {
        Nombre: "Nombre",
        Apellido: "Apellido",
        Email: "Email",
        Telefono: "Tel"
    }
    const handleSubmitContactform = (event) => {
        e.preventDefault();
        event.target
        console.dir(event.target.className)

        const dataContactForm = new FormData(event.target)

        const contactFormValues = {}

        for (let field in dataForm) {
            contactFormValues[dataForm[field]] = dataContactForm.get(dataForm[field])
        }
        setformValues(contactFormValues)
    };

    console.log(formValues)

    return (
        <div className="register-container">
            <div className="register-box">
                <h2 className='title-register'>Crear una Cuenta</h2>
                <p className='subtitle-register'>Ingresa tus datos para registrarte</p>
                <RegisterForm onSubmit={handleSubmitContactform} />
            </div>
        </div>
    );
};

export default RegisterPage;
