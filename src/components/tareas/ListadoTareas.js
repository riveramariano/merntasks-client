import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {

    // OBTENER EL STATE DE PROYECTOS
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // SI NO HAY PROYECTO SELECCIONADO
    if (!proyecto) return <h2>Selecciona un Proyecto</h2>;

    // ARRAY DESTRUCTURING - EXTRAER PROYECTO ACTUAL
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        { nombre: 'Revivir a Chrono', estado: true },
        { nombre: 'Salvar a Frog', estado: true },
        { nombre: 'Derrotar a Lavos', estado: false },
        { nombre: 'Completar el Juego', estado: false }
    ]

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay Tareas</p></li>)
                    : tareasProyecto.map(tarea => (
                        <Tarea tarea={tarea} />
                    ))
                }
                <button
                    type="button"
                    className="btn btn-eliminar"
                    onClick={() => eliminarProyecto(proyectoActual.id)}
                >Eliminar Proyecto &times;</button>
            </ul>

        </Fragment>
    );
}

export default ListadoTareas;