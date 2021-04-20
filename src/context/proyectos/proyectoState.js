import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

// COMO SE LLAMA INDEX, NO SE LLAMA
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types';

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
        formulario: false
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

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}>
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;