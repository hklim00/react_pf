// Import Swiper React components
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import Pop from '../common/Pop';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import 'swiper/css/scrollbar';

function Vids() {
	const pop = useRef(null);
	const [Index, setIndex] = useState(0);
	const { youtube } = useSelector((store) => store.youtube.data);
	return (
		<>
			<section id='vids' className='myScroll'>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, Autoplay]}
					loop={true}
					spaceBetween={50}
					slidesPerView={3}
					navigation={{ clickable: true }}
					pagination={{ clickable: true }}
					centeredSlides={true}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}>
					{youtube.map((vid, idx) => {
						if (idx >= 4) return;
						return (
							<SwiperSlide key={vid.id}>
								<div className='inner'>
									<div
										className='pic'
										onClick={() => {
											setIndex(idx);
											pop.current.open();
										}}>
										<img
											src={vid.snippet.thumbnails.standard.url}
											alt={vid.snippet.title}
										/>
									</div>
									<h2>{vid.snippet.title}</h2>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>
			<Pop ref={pop}>
				{youtube.length !== 0 && (
					<iframe
						title='video'
						src={`https://www.youtube.com/embed/${youtube[Index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				)}
			</Pop>
		</>
	);
}

export default Vids;
