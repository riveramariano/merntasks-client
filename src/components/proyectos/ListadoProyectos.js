import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import alertaContext from '../../context/alertas/alertaContext';

const ListadoProyectos = () => {

	// OBTENER EL STATE DE LOS PROYECTOS
	const proyectosContext = useContext(proyectoContext);
	const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

	const alertasContext = useContext(alertaContext);
	const { alerta, mostrarAlerta } = alertasContext;

	// OBTENER PROYECTOS CUANDO CARGA EL COMPONENTE
	useEffect(() => {
		// SI HAY UN ERROR
		if (mensaje) {
			mostrarAlerta(mensaje.msg, mensaje.categoria);
		}
		obtenerProyectos();
		// eslint-disable-next-line
	}, [mensaje]);

	// VALIDAR SI TIENE CONTENIDO
	if (proyectos.length === 0) return <p>No hay Proyectos</p>;

	return (
		<ul className="listado-proyectos">
			{alerta
				? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>)
				: null
			}
			<TransitionGroup>
				{proyectos.map(proyecto => (
					// _ID ES LA FORMA DE MONGO DE LLAMAR AL ID
					<CSSTransition key={proyecto._id} timeout={200} classNames="proyecto">
						<Proyecto proyecto={proyecto} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</ul>
	);

}

export default ListadoProyectos;