import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faAngleDoubleDown,
	faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';

export default function Layout({ children }) {
	useEffect(() => {
		document?.getElementById(styles.container).classList.add(styles.ready);
	}, []);

	const [visible, setVisible] = useState(false);

	function changeFooterClass(e) {
		e.preventDefault();
		setVisible((prev) => !prev);
	}

	return (
		<div id={styles.container} className={styles.container}>
			<Head>
				<title>Pablo Rovito Fullstack Dev</title>
				<meta
					name='description'
					content='My NextJS-Typescript portfolio'
				/>
			</Head>
			<main className={styles.main}>{children}</main>
			<button
				className={
					visible
						? styles.contact_button
						: styles.contact_button_hidden
				}
				onClick={(e) => changeFooterClass(e)}>
				<p>
					<FontAwesomeIcon
						icon={visible ? faAngleDoubleUp : faAngleDoubleDown}
					/>
				</p>
				<span>
					<FontAwesomeIcon icon={faBars} />
				</span>
			</button>
			<footer className={visible ? styles.footer : styles.footer_hidden}>
				<ul className={styles.contact}>
					<li>
						<a
							href='https://api.whatsapp.com/send?phone=5492255570472'
							target='_blank'
							rel='noopener noreferrer'>
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
							target='_blank'
							rel='noopener noreferrer'>
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
							target='_blank'
							rel='noopener noreferrer'>
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
						<Link href='mailto: pablo.rovito@outlook.com'>
							<a>
								<Image
									priority
									src='/images/gmail.svg'
									className={styles.icon}
									height={30}
									width={30}
									alt=''
								/>
							</a>
						</Link>
					</li>
				</ul>
				<div className={styles.links}>
					<Link href='/projects'>
						<a>Projects</a>
					</Link>
					<Link href='/curriculum'>
						<a>Curriculum</a>
					</Link>
					<Link href='/'>
						<a>Bio</a>
					</Link>
				</div>
			</footer>
		</div>
	);
}
