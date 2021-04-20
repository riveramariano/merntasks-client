import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

    // OBTENER SI UN PROYECTO ESTA SELECCIONADO
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // SI NO HAY PROYECTO SELECCIONADO
    if (!proyecto) return null;

    // ARRAY DESTRUCTURING - EXTRAER PROYECTO ACTUAL
    const [proyectoActual] = proyecto;

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea.."
                        name="nombre"
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTarea;
