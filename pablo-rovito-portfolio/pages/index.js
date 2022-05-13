import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Slider from '../components/slider';
import { useState } from 'react';

export default function Home() {
	const [visible, setVisible] = useState(false);

	function changeFooterClass(e) {
		e.preventDefault();
		setVisible((prev) => !prev);
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Pablo Rovito Fullstack Dev</title>
				<meta
					name='description'
					content='My NextJS-Typescript portfolio'
				/>
			</Head>

			<main className={styles.main}>
				<Slider />
			</main>
			<button
				className={
					visible
						? styles.contact_button
						: styles.contact_button_hidden
				}
				onClick={(e) => changeFooterClass(e)}>
				CONTACT
			</button>
			<footer className={visible ? styles.footer : styles.footer_hidden}>
				<ul className={styles.contact}>
					<li>
						<a
							href='https://api.whatsapp.com/send?phone=5492255570472'
							/* target='_blank' */
						>
							<Image
								priority
								src='/images/WP.svg'
								className={styles.icon}
								height={30}
								width={30}
								alt=''
							/>
						</a>
					</li>
					<li>
						<a
							href='http://www.linkedin.com/in/pablo-rovito-fullstack-dev'
							/* target='_blank' */
						>
							<Image
								priority
								src='/images/LIn.svg'
								className={styles.icon}
								height={30}
								width={30}
								alt=''
							/>
						</a>
					</li>
					<li>
						<a
							href='https://github.com/Pablo-Rovito'
							/* target='_blank' */
						>
							<Image
								priority
								src='/images/GitHub-Mark-64px.png'
								className={styles.icon}
								id={styles.github}
								height={30}
								width={30}
								alt=''
							/>
						</a>
					</li>
					<li>
						<a href='mailto: pablo.rovito@outlook.com'>
							<Image
								priority
								src='/images/gmail.svg'
								className={styles.icon}
								height={30}
								width={30}
								alt=''
							/>
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}
