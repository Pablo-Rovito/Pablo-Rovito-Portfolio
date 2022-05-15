import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import { useEffect } from 'react';

/////////////////////////////////////METER TRANSICIÓN ENTRE PROYECTOS, HABRÁ Q MAPEAR CADA PROYECTO Y DAR ESTILO SEGÚN EL INDEX, COMO EN LAS IMGGALLERY/////////////////////////////////////

/////////////////////////////////////CAMBIAR ÍCONO DEL HEADER/////////////////////////////////////

/////////////////////////////////////SUMAR 2DA ANIMACIÓN VERTICAL A INDICADOR DEL BOTÓN DE MENÚ, PARA HACER MÁS EVIDENTE LA ACCIÓN/////////////////////////////////////

/////////////////////////////////////INCLUIR RUTAS DINÁMICAS EN LA NAVEGACIÓN PARA QUE LOS LINKS DEL MENÚ FUNCIONEN MÁS SIMILAR A REACT/////////////////////////////////////

/////////////////////////////////////MAILTO DEBERÍA CAMBIAR A UN DROPDOWN CON TRANSLATEY ONHOVER QUE MUESTRE UN FORM CON BOTÓN SEND/////////////////////////////////////

export default function Home() {
	useEffect(() => {
		document?.getElementById(styles.container).classList.add(styles.ready);
	}, []);

	return (
		<div id={styles.container} className={styles.container}>
			<Head>
				<title>Pablo Rovito Fullstack Dev</title>
				<meta
					name='description'
					content='My NextJS-Typescript portfolio'
				/>
			</Head>

			<Layout>
				<h1>Hola</h1>
			</Layout>
		</div>
	);
}
