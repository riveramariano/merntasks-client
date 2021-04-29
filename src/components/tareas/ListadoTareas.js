import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // npm i react-transition-group
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {

    // OBTENER EL STATE DE PROYECTOS
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // OBTENER EL STATE DE TAREA
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

    // SI NO HAY PROYECTO SELECCIONADO
    if (!proyecto) return <h2>Selecciona un Proyecto</h2>;

    // ARRAY DESTRUCTURING - EXTRAER PROYECTO ACTUAL
    const [proyectoActual] = proyecto;

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ? (<li className="tarea"><p>No hay Tareas</p></li>)
                    :
                    <TransitionGroup>
                        {tareasproyecto.map(tarea => (
                            <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
                                <Tarea tarea={tarea} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
                <button
                    type="button"
                    className="btn btn-eliminar"
                    onClick={() => eliminarProyecto(proyectoActual._id)}
                >Eliminar Proyecto &times;</button>
            </ul>

        </Fragment>
    );
}

export default ListadoTareas;