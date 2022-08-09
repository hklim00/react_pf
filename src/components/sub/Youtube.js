import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import Pop from '../common/Pop';

function Youtube() {
	const line = useRef(null);
	const [Vids, setVids] = useState([]);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);

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
		<>
			<Layout name={'Youtube'}>
				{Vids.map((vid, idx) => {
					let tit = vid.snippet.title;
					let des = vid.snippet.description;
					let date = vid.snippet.publishedAt;
					return (
						<article key={vid.id}>
							<h2>{tit.length > 30 ? tit.substr(0, 30) + '...' : tit}</h2>
							<div className='txt'>
								<p>{des.length > 200 ? des.substr(0, 200) + '...' : des}</p>
								<span>{date.split('T')[0]}</span>
							</div>
							<div className='pic'>
								<img src={vid.snippet.thumbnails.high.url} alt='' />
								<FontAwesomeIcon
									icon={faYoutube}
									ref={line}
									onClick={() => {
										setOpen(true);
										setIndex(idx);
									}}
								/>
							</div>
						</article>
					);
				})}
			</Layout>
			{Open && (
				<Pop setOpen={setOpen}>
					<iframe
						title='video'
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				</Pop>
			)}
		</>
	);
}

export default Youtube;
