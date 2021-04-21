import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

	// OBTENER EL STATE DE LOS PROYECTOS
	const proyectosContext = useContext(proyectoContext);
	const { proyectos, obtenerProyectos } = proyectosContext;

	// OBTENER PROYECTOS CUANDO CARGA EL COMPONENTE
	useEffect(() => {
		obtenerProyectos();
	}, []);

	// VALIDAR SI TIENE CONTENIDO
	if (proyectos.length === 0) return <p>No hay Proyectos</p>;

	return (
		<ul className="listado-proyectos">
			<TransitionGroup>
				{proyectos.map(proyecto => (
					<CSSTransition key={proyecto.id} timeout={200} classNames="proyecto">
						<Proyecto proyecto={proyecto} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</ul>
	);

}

export default ListadoProyectos;