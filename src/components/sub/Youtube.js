import Layout from '../common/Layout';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import Pop from '../common/Pop';

function Youtube() {
	const pop = useRef(null);
	const [Index, setIndex] = useState(0);
	const Vids = useSelector((store) => store.youtube.data);

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
									onClick={() => {
										pop.current.open();
										setIndex(idx);
									}}
								/>
							</div>
						</article>
					);
				})}
			</Layout>
			<Pop ref={pop}>
				{Vids.length !== 0 && (
					<iframe
						title='video'
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				)}
			</Pop>
		</>
	);
}

export default Youtube;
