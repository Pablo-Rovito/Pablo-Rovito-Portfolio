import styles from '../styles/Slider.module.css';

export default function Slider() {
	return (
		<section id='hero-slider' className={styles.container}>
			<div id={styles.logo} className={styles.mask}>
				<span className={styles.logo_text_masked}>Pablo Rovito</span>
			</div>
			<div id='slideshow' className={styles.slideshow}>
				<div id='slides-main' className={styles.slides}>
					<div className={styles.slide} key={0}>
						<div className={styles.abs_mask}>
							<h2 className={styles.slide_title} key={0}>
								<a href='#'>#64 Paradigm</a>
							</h2>
							<div className={styles.slide_image}></div>
						</div>
					</div>
				</div>
			</div>
			<div id='info' className={styles.info}>
				<div className={styles.slider_title_wrapper}>Title</div>
			</div>
			<nav id='slider-nav'>Slide indicators</nav>
		</section>
	);
}
