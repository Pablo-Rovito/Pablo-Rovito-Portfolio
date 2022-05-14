import styles from '../styles/Slider.module.css';

const backgrounds = [
	{
		id: 0,
		title: 'POSH boutique',
		img: '../public/images/resaca_doge.jpg',
		link: 'deploy_link',
	},
];

export default function Slider() {
	return (
		<main id={styles.hero_slider}>
			<div id={styles.logo} className={styles.mask}>
				<span className={styles.logo_text}>Pablo Rovito</span>
			</div>
			<div id={styles.slideshow}>
				<div id={styles.slides_main} className={styles.slides}>
					{backgrounds.map((background) => {
						return (
							<div className={styles.slide} key={background.id}>
								<div className={styles.abs_mask}>
									<div className={styles.slide_image}></div>
									<div
										className={styles.slide_title}
										key={background.id}>
										<a href={background.link}>
											{background.title}
										</a>
									</div>
								</div>
							</div>
						);
					})}
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
				<span className={styles.current}>XX</span>
				<span className={styles.sep}></span>
				<span className={styles.total}>{backgrounds.length}</span>
			</nav>
		</main>
	);
}
