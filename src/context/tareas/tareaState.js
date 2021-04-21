import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types';

const TareaState = props => {

    // DEFINIR EL STATE
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Revivir a Chrono', estado: true, proyectoId: 2 },
            { id: 2, nombre: 'Salvar a Frog', estado: true, proyectoId: 2 },
            { id: 3, nombre: 'Derrotar a Lavos', estado: false, proyectoId: 2 },
            { id: 4, nombre: 'Completar el Juego', estado: false, proyectoId: 4 },
            { id: 5, nombre: 'Salvar a Zelda', estado: true, proyectoId: 3 },
            { id: 6, nombre: 'Terminar el Proyecto', estado: false, proyectoId: 1 },
            { id: 7, nombre: 'Comprar Shadowlands', estado: false, proyectoId: 4 },
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
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

    // AGREGAR UNA TAREA AL PROYECTO SELECCIONADO
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // VALIDA Y MUESTRA UN ERROR EN EL FORMULARIO TAREA
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // ELIMINA UNA TAREA
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    // MODIFICAR EL ESTADO DE UNA TAREA
    const modificarEstado = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    // EXTRAE LA TAREA PARA EDITARLA
    const tareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    // EDITA UNA TAREA
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                modificarEstado,
                tareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;