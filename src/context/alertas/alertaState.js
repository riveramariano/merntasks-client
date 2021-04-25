import React, { useReducer } from 'react';
import alertaReducer from './alertaReducer';
import alertaContext from './alertaContext';
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';

const AlertaState = props => {

    // DEFINIR EL STATE
    const initialState = {
        alerta: null
    }

    // DISPATCH PARA EJECUTAR LAS ACCIONES
    const [state, dispatch] = useReducer(alertaReducer, initialState);

    // FUNCIONES
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg, // OBJECT LITERAL ENHANCEMENT
                categoria
            }
        });

        // DESPUES DE 5s LIMPIAR LA ALERTA
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA,
            })
        }, 5000);
    }

    return (
        <alertaContext.Provider value={{ alerta: state.alerta, mostrarAlerta }}>
            {props.children}
        </alertaContext.Provider>
    )
}

export default AlertaState;