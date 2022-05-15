import styles from '../styles/imgGallery.module.css';
import { useEffect, useState } from 'react';
export default function Slider({ images }) {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCounter(counter === images.length - 1 ? 0 : counter + 1);
		}, 4500);

		return () => {
			clearTimeout(timeout);
		};
	}, [counter]);

	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				{images?.map((image, i) => {
					return (
						<div
							key={i}
							className={
								counter === i
									? styles.slide_active
									: styles.slide
							}>
							<img
								id={styles.img}
								src={image}
								alt='POSH boutique'
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
