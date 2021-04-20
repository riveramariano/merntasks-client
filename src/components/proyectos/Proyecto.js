import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Proyecto = ({ proyecto }) => {

	// OBTENER EL STATE DE PROYECTOS
	const proyectosContext = useContext(proyectoContext);
	const { proyectoActual } = proyectosContext;

	return (
		<li>
			<button
				type="button"
				className="btn btn-blank"
				onClick={() => proyectoActual(proyecto.id)}
			>{proyecto.nombre}</button>
		</li>
	);
}

export default Proyecto;