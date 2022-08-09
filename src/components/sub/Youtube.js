import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Youtube() {
	const [Vids, setVids] = useState([]);

	useEffect(() => {
		const key = 'AIzaSyBDL1S8asY8CR73ihG02orQB3BdWha5F1A';
		const playlistId = 'PL_RxE5V-zXWLz8bPJ5xi6dsdqg2mnwgPr';
		const num = 6;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

		axios.get(url).then((json) => {
			setVids(json.data.items);
		});
	}, []);

	return (
		<Layout name={'Youtube'}>
			{Vids.map((vid) => (
				<article key={vid.id}>
					<h2>{vid.snippet.title}</h2>
					<div className='txt'>
						<p>{vid.snippet.description}</p>
						<span>{vid.snippet.publishedAt}</span>
					</div>
					<div className='pic'>
						<img src={vid.snippet.thumbnails.high.url} alt='' />
					</div>
				</article>
			))}
		</Layout>
	);
}

export default Youtube;
