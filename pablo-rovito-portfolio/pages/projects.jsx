import styles from '../styles/Slider.module.css';
import Layout from '../components/layout';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleDoubleLeft,
	faAngleDoubleRight,
	faDisplay,
} from '@fortawesome/free-solid-svg-icons';
import ImgGallery from '../components/imgGallery';

const projectsInfo = [
	{
		id: 0,
		title: 'POSH boutique',
		img: [
			'https://user-images.githubusercontent.com/91141985/165199111-791edd30-58da-45fd-b36a-54a0fdc5e9ce.png',
			'https://user-images.githubusercontent.com/91141985/165198948-124f8fbe-23e1-4ab0-ae68-bce5d6e849b7.png',
			'https://user-images.githubusercontent.com/91141985/165199026-3a710837-91e8-46ae-a322-92eede949108.png',
			'https://user-images.githubusercontent.com/91141985/165199159-3b602f61-3bcb-4f03-a674-31b369ee5687.png',
		],
		link: 'https://frontend-five-gules.vercel.app/',
	},
	{
		id: 1,
		title: 'Henry videogames',
		img: [
			'https://user-images.githubusercontent.com/91141985/160293417-6ebc8da2-bc30-43e1-81da-0ef1c42f2dff.png',
			'https://user-images.githubusercontent.com/91141985/160293353-c94a5d33-d334-4df3-92f4-f3813cf1f37a.png',
			'https://user-images.githubusercontent.com/91141985/160293336-315bc09b-b1f0-4e4f-a937-591fe4dc6f13.png',
			'https://user-images.githubusercontent.com/91141985/160293398-4698a66c-ec36-4db6-8d0b-f874c24b7763.png',
		],
		link: 'https://pi-videogames-main-hazel.vercel.app/',
	},
	{
		id: 1,
		title: 'PowerBI viewer',
		img: [
			'https://user-images.githubusercontent.com/91141985/167699372-9a61c44f-2554-4a1b-82c8-f7ada331f39f.png',
			'https://user-images.githubusercontent.com/91141985/167699381-4b9e2853-a574-4064-bd58-e4004f591b2f.png',
		],
		link: 'https://powerbi-next.vercel.app/',
	},
];

export default function Slider() {
	useEffect(() => {
		document
			?.getElementById(styles.hero_slider)
			.classList.add(styles.ready);
	}, []);

	var [p, setP] = useState(0);

	function changeProject(e, action) {
		e.preventDefault();
		setP(
			action === 'next'
				? p === projectsInfo.length - 1
					? (p = 0)
					: (p) => p + 1
				: p === 0
				? projectsInfo.length - 1
				: (p) => p - 1
		);
	}
	let project = projectsInfo[p];

	return (
		<Layout>
			<main id={styles.hero_slider}>
				<div id={styles.logo} className={styles.mask}>
					<span className={styles.logo_text}>Pablo Rovito</span>
				</div>
				<div id={styles.slideshow}>
					<div id={styles.slides_main} className={styles.slides}>
						<div className={styles.slide} key={project.id}>
							<div className={styles.abs_mask}>
								<div className={styles.slide_image}>
									<ImgGallery images={project.img} />
								</div>
								<div
									className={styles.slide_title}
									key={project.id}>
									<p>
										<FontAwesomeIcon icon={faDisplay} />
									</p>
									<a
										href={project.link}
										target='_blank'
										rel='noopener noreferrer'>
										{project.title}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id={styles.info}>
					<div className={styles.slider_title_wrapper}>
						<span className={styles.line}></span>
						<span className={styles.slider_title}>Projects</span>
					</div>
					<div className={styles.about}>
						<p>A NextJS/Typescript/CSS portfolio</p>
						<br />
						<p>With its own API REST</p>
					</div>
				</div>
				<nav id={styles.slider_nav}>
					<button
						className={styles.current}
						onClick={(e) => changeProject(e, 'prev')}>
						<FontAwesomeIcon icon={faAngleDoubleLeft} />
					</button>
					<span className={styles.sep}></span>
					<button
						className={styles.total}
						onClick={(e) => changeProject(e, 'next')}>
						<FontAwesomeIcon icon={faAngleDoubleRight} />
					</button>
				</nav>
			</main>
		</Layout>
	);
}
