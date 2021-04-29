import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import clienteAxios from '../../config/axios';

// COMO SE LLAMA INDEX, NO SE LLAMA
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
    PROYECTO_ERROR
} from '../../types';

const ProyectoState = props => {

    // DEFINIR EL STATE
    const initialState = {
        proyectos: [],
        formulario: false,
        error: false,
        proyecto: null,
        mensaje: null
    }

    // DISPATCH PARA EJECUTAR LAS ACCIONES
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // SERIE DE FUNCIONES PARA EL CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    }

    // OBTENER LOS PROYECTOS
    const obtenerProyectos = async () => {
        try {
            const resultado = await clienteAxios.get('/api/proyectos');
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
            });
        } catch (error) {
            console.log(error);
        }
    }

    // AGREGAR NUEVO PROYECTO  
    const agregarProyecto = async proyecto => {
        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            // INSERT PROYECTO EN EL STATE
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    // VALIDA EL FORMULARIO POR ERRORES
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        });
    }

    // SELECCIONA EL PROYECTO QUE EL USUARIO DIO CLIC
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        });
    }

    // ELIMINA UN PROYECTO
    const eliminarProyecto = async proyectoId => {
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            });
        } catch (error) {
            const alerta = {
                msg: 'Hubo un Error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            });
        }
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                error: state.error,
                proyecto: state.proyecto,
                mensaje: state.mensaje,
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