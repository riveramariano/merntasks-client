import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import alertaContext from '../../context/alertas/alertaContext';
import authContext from '../../context/autenticacion/authContext';

const Login = (props) => {

    // EXTRAER LOS VALORES DEL CONTEXT
    const alertasContext = useContext(alertaContext);
    const { alerta, mostrarAlerta } = alertasContext;

    const authsContext = useContext(authContext);
    const { mensaje, autenticado, iniciarSesion } = authsContext;

    // EN CASO DE QUE EL PASSWORD O CORREO NO EXISTAN O SEAN INCORRECTOS
    useEffect(() => {
        // SI ESTA AUTENTICADO PASA A PROYECTOS
        if (autenticado) {
            props.history.push('/proyectos');
        }
        // SI HAY UN ERROR, MANDA UN MSG
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);

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
        if (email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los Campos son Obligatorios', 'alerta-error');
        }

        // PASARLO AL ACTION
        iniciarSesion({ email, password });
    }

    return (
        <div className="form-usuario">
            {alerta
                ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>)
                : null
            }
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