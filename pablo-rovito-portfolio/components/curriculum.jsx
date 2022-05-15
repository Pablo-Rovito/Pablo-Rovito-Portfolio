import styles from '../styles/Slider.module.css';
import { useEffect } from 'react';

export default function Slider() {
	useEffect(() => {
		document
			?.getElementById(styles.curriculum_container)
			.classList.add(styles.ready);
	}, []);

	return (
		<main id={styles.curriculum_container}>
			<div id={styles.logo} className={styles.mask}>
				<span className={styles.logo_text}>Pablo Rovito</span>
			</div>
			<div id={styles.slideshow}>
				<div id={styles.slides_main} className={styles.slides}>
					<iframe
						id={styles.curriculum_iframe}
						loading='lazy'
						src='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE7qktnGAQ&#x2F;view?embed'
						allowFullScreen='allowfullscreen'
						allow='fullscreen'></iframe>
				</div>
			</div>
			<div id={styles.info}>
				<div className={styles.slider_title_wrapper}>
					<span className={styles.line}></span>
					<span className={styles.curriculum_slider_title}>
						Curriculum
					</span>
				</div>
				<div className={styles.about}>
					<p>A NextJS/Typescript/CSS portfolio</p>
					<br />
					<p>With its own API REST</p>
				</div>
			</div>
		</main>
	);
}
