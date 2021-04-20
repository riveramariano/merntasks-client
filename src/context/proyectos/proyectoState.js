import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

// COMO SE LLAMA INDEX, NO SE LLAMA
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';

const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Chrono Trigger' },
        { id: 3, nombre: 'Breath of the Wild' },
        { id: 4, nombre: 'World of Warcraft' }
    ]

    // DEFINIR EL STATE
    const initialState = {
        proyectos: [],
        formulario: false,
        error: false,
        proyecto: null
    }

    // DISPATCH PARA EJECUTAR LAS ACCIONES
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // SERIE DE FUNCIONES PARA EL CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // OBTENER LOS PROYECTOS
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // AGREGAR NUEVO PROYECTO  
    const agregarProyecto = proyecto => {
        proyecto.id = uuid();

        // INSERT PROYECTO EN EL STATE
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    // VALIDA EL FORMULARIO POR ERRORES
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // SELECCIONA EL PROYECTO QUE EL USUARIO DIO CLIC
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // ELIMINA UN PROYECTO
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                error: state.error,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}>
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;