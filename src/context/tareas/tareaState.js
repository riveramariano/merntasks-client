import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO
} from '../../types';

const TareaState = props => {

    // DEFINIR EL STATE
    const initialState = {
        tareas: [
            { nombre: 'Revivir a Chrono', estado: true, proyectoId: 2 },
            { nombre: 'Salvar a Frog', estado: true, proyectoId: 2 },
            { nombre: 'Derrotar a Lavos', estado: false, proyectoId: 2 },
            { nombre: 'Completar el Juego', estado: false, proyectoId: 4 },
            { nombre: 'Salvar a Zelda', estado: true, proyectoId: 3 },
            { nombre: 'Terminar el Proyecto', estado: false, proyectoId: 1 },
            { nombre: 'Comprar Shadowlands', estado: false, proyectoId: 4 },
        ],
        tareasproyecto: null
    }

    // DISPATCH PARA EJECUTAR LAS ACCIONES
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // SERIE DE FUNCIONES PARA EL CRUD
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                obtenerTareas
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;