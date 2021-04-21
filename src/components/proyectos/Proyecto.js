import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({ proyecto }) => {

	// OBTENER EL STATE DE PROYECTOS
	const proyectosContext = useContext(proyectoContext);
	const { proyectoActual } = proyectosContext;

	// OBTENER EL STATE DE TAREA
	const tareasContext = useContext(tareaContext);
	const { obtenerTareas } = tareasContext;

	// FUNCION PARA AGREGAR PROYECTO ACTUAL
	const seleccionarProyecto = id => {
		proyectoActual(id); // OBTENER UN PROYECTO
		obtenerTareas(id); // Y TAMBIEN SUS TAREAS
	}

	return (
		<li>
			<button
				type="button"
				className="btn btn-blank"
				onClick={() => seleccionarProyecto(proyecto.id)}
			>{proyecto.nombre}</button>
		</li>
	);
}

export default Proyecto;