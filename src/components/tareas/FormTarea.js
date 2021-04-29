import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    // OBTENER SI UN PROYECTO ESTA SELECCIONADO
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // OBTENER EL STATE DE TAREA
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, errortarea, obtenerTareas,
        agregarTarea, validarTarea, actualizarTarea } = tareasContext;

    // DETECTA SI HAY UNA TAREA SELECCIONADA
    useEffect(() => {
        if (tareaseleccionada !== null) {
            setTarea(tareaseleccionada);
        } else {
            setTarea({
                nombre: ''
            });
        }
    }, [tareaseleccionada]);

    // DEFINIR STATE FORMULARIO
    const [tarea, setTarea] = useState({
        nombre: ''
    })

    // DESTRUCTURING STATE
    const { nombre } = tarea;

    // SI NO HAY PROYECTO SELECCIONADO
    if (!proyecto) return null;

    // ARRAY DESTRUCTURING - EXTRAER PROYECTO ACTUAL
    const [proyectoActual] = proyecto;

    // LEER LOS VALORES DEL FORMULARIO
    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // VALIDAR LA TAREA
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        // REVISAR SI VA A EDITAR O AGREGAR UNA TAREA
        if (tareaseleccionada === null) {
            // AGREGAR LA NUEVA TAREA AL STATE
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        } else {
            // ACTUALIZAR TAREA EXISTENTE
            actualizarTarea(tarea);
        }

        // OBTENER Y FILTRAR LAS TAREAS DEL PROYECTO ACTUAL
        obtenerTareas(proyectoActual.id);

        // REINICIAR EL FORM
        setTarea({
            nombre: ''
        })
    }

    return (
        <div className="formulario">
            <form onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea.."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>
            {errortarea
                ? <p className="mensaje error">El Nombre de la Tarea es Obligatorio</p>
                : null
            }
        </div>
    );
}

export default FormTarea;
