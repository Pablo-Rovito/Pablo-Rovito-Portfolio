import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
	useEffect(() => {
		document
			?.getElementById(styles.bio_container)
			.classList.add(styles.ready);
	}, []);

	return (
		<div id={styles.container} className={styles.container}>
			<Head>
				<link rel='shortcut icon' href='/images/favicon.ico' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/images/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/images/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/images/favicon-16x16.png'
				/>

				<title>Pablo Rovito Fullstack Dev</title>
				<meta
					name='description'
					content='My NextJS-Typescript portfolio'
				/>
			</Head>

			<Layout>
				<div id={styles.bio_container}>
					<div id={styles.greet}>
						<div id={styles.greetAux}>
							<div id={styles.greetAux2}>
								<h1>Hi! </h1>
								<h3>Hope you are doing great!</h3>
							</div>
						</div>
					</div>
					<header id={styles.header}>
						<span id={styles.menu_direction}>
							<span id={styles.txt}>
								Projects, curriculum and contact over there!
								lalalalala
							</span>
							<span>
								<FontAwesomeIcon
									icon={faHandPointer}
									id={styles.pointer}
								/>
							</span>
						</span>
					</header>
					<main>
						<div id={styles.portrait}>
							<Image
								priority
								src='/images/cv.jpg'
								className={styles.icon}
								height={300}
								width={300}
								alt=''
							/>
						</div>
						<section id={styles.bio_text}>
							<p>
								<span>
									I really do love creating very much indeed,
									emphasis intended. It used to be channeled
									through drawing, writing music, building
									stuff and engineering design, and now
								</span>
								<span
									style={{
										color: 'magenta',
										fontWeight: '400',
									}}>
									{' '}
									coding{' '}
								</span>
								is my newfound passion.
								<span></span>
							</p>
							<p>
								History and philosophy always grab my attention.
								Great dating topics, those...
							</p>
							<p>
								I am a big fan of outdoors, specially if
								mountains are involved. I raced in mountain bike
								a couple of times, but I do trekking more often.
								However, my girlfriend and my dog love the beach
								so most of the time I end up there.
							</p>
						</section>
					</main>
					<footer>
						<div id={styles.stack}>
							<label>Stack</label>
							<ul>
								<li>React</li>
								<li>NextJS</li>
								<li>Javascript</li>
								<li>Typescript</li>
								<li>HTML / CSS</li>
								<li>Express</li>
								<li>Sequelize</li>
								<li>PostgreSQL</li>
								<li>NodeJS</li>
								<li>some Python</li>
								<li>some Ruby</li>
								<li>some Matlab</li>
							</ul>
						</div>
					</footer>
				</div>
			</Layout>
		</div>
	);
}
