import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import { useEffect } from 'react';

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
