import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    // STATE PARA INICIO DE SESION
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    // DESTRUCTURING STATE
    const { email, password } = usuario;

    // CADA QUE EL USUARIO ESCRIBA
    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    // CUANDO EL USUARIO PRESIONA EL BOTON
    const onSubmit = e => {
        e.preventDefault();

        // VALIDAR CAMPOS VACIOS

        // PASARLO AL ACTION

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tú Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tú Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesion"
                        />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Crear Nueva Cuenta
                </Link>
            </div>
        </div>
    );
}

export default Login;