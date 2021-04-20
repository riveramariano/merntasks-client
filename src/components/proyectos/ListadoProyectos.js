import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

	// OBTENER EL STATE DE LOS PROYECTOS
	const proyectosContext = useContext(proyectoContext);
	const { proyectos, obtenerProyectos } = proyectosContext;

	// OBTENER PROYECTOS CUANDO CARGA EL COMPONENTE
	useEffect(() => {
		obtenerProyectos();
	}, [obtenerProyectos]);

	// VALIDAR SI TIENE CONTENIDO
	if (proyectos.length === 0) return null;

	return (
		<ul className="listado-proyectos">
			{proyectos.map(proyecto => (
				<Proyecto
					key={proyecto.id}
					proyecto={proyecto} />
			))}
		</ul>
	);

}

export default ListadoProyectos;