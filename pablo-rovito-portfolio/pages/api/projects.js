export default function handler(req, res) {
	const backgrounds = [
		{
			id: 0,
			title: 'POSH boutique',
			img: `${__dirname}/assets/arcoiris_doge.jpg`,
			link: 'https://frontend-five-gules.vercel.app/',
		},
		{
			id: 1,
			title: 'Henry Videogames',
			img: 'fs.readFile(`${__dirname}/assets/resaca_doge.jpg`)',
			link: 'https://pi-videogames-main-hazel.vercel.app/',
		},
		{
			id: 2,
			title: 'PowerBI integration',
			img: 'fs.readFile(`${__dirname}/assets/badboy_doge.jpg`)',
			link: 'https://powerbi-next.vercel.app/',
		},
	];

	res.status(200).json(backgrounds);
}
