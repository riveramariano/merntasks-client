import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [
        { nombre: 'Revivir a Chrono', estado: true },
        { nombre: 'Salvar a Frog', estado: true },
        { nombre: 'Derrotar a Lavos', estado: false },
        { nombre: 'Completar el Juego', estado: false }
    ]

    return (
        <Fragment>
            <h2>Proyecto: Chrono Trigger</h2>
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
                >Eliminar Proyecto &times;</button>
            </ul>

        </Fragment>
    );
}

export default ListadoTareas;