import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import alertaContext from '../../context/alertas/alertaContext';

const NuevaCuenta = () => {

    // EXTRAER LOS VALORES DEL CONTEXT
    const alertasContext = useContext(alertaContext);
    const { alerta, mostrarAlerta } = alertasContext;

    // STATE PARA NUEVA CUENTA
    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // DESTRUCTURING STATE
    const { nombre, email, password, confirmar } = usuario;

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
        if (nombre.trim() === '' || email.trim() === '' ||
            password.trim() === '' || confirmar.trim() === '') {
            mostrarAlerta('Todos los Campos son Obligarios', 'alerta-error');
            return;
        }

        // PASSOWORD MINIMO 6 CARACTERES
        if (password.length < 6) {
            mostrarAlerta('El Password debe de Tener Mínimo 6 Caracteres', 'alerta-error');
            return;
        }

        // LOS 2 PASSWORD SEAN IGUALES
        if(password !== confirmar) {
            mostrarAlerta('Los Passwords deben ser Iguales', 'alerta-error');
            return;
        }

        // PASARLO AL ACTION

    }

    return (
        <div className="form-usuario">
            {alerta
                ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>)
                : null
            }
            <div className="contenedor-form sombra-dark">
                <h1>Crear una Nueva Cuenta</h1>

                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tú Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
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
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tú Password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;