import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // OBTENER EL STATE DEL FORMULARIO
    const proyectosContext = useContext(proyectoContext);
    const { formulario, error, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    // DEFINIR EL STATE
    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    // DESTRUCTURING
    const { nombre } = proyecto;

    // LEER LOS CONTENIDOS DEL INPUT
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    // CUANDO EL USUARIO AGREGA UN PROYECTO
    const onSubmitProyecto = e => {
        e.preventDefault();

        // VALIDAR EL PROYECTO
        if (nombre === '') {
            mostrarError();
            return;
        }

        // AGREGAR AL STATE
        agregarProyecto(proyecto);

        // REINICIAR EL FORM
        setProyecto({
            nombre: ''
        })
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario()}
            >Nuevo Proyecto</button>
            {formulario
                ? (
                    <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                        />
                    </form>
                ) : null}
            {error ? <p className="mensaje error">El Nombre es Obligatorio</p> : null}
        </Fragment>
    );
}

export default NuevoProyecto;