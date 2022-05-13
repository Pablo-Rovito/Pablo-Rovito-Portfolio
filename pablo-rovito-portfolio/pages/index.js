import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Slider from '../components/slider';

export default function Home() {
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
				<h1>This is a work in progress, clearly</h1>
				<p>Don&apos;t be fooled by this apparent simplicity</p>
				<cite>
					Everything is in my head, and I&apos;ll be updating this
					repo frequently
				</cite>
				<address>Trying new stuff and exploring advanced CSS</address>
				<div className={styles.slider_container}>
					<Slider />
				</div>
			</main>

			<div className={styles.footer_wrapper}></div>

			<footer className={styles.footer}>
				<span>
					<ul className={styles.contact}>
						<li>
							<a href='https://api.whatsapp.com/send?phone=5492255570472'>
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
							<a href='http://www.linkedin.com/in/pablo-rovito-fullstack-dev'>
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
							<a href='https://github.com/Pablo-Rovito'>
								<Image
									priority
									src='/images/GitHub-Mark-64px.png'
									className={styles.icon}
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
				</span>
			</footer>
		</div>
	);
}
