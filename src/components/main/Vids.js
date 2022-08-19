// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

function Vids() {
	return (
		<section id='vids' className='myScroll'>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				loop={true}
				spaceBetween={50}
				slidesPerView={3}
				navigation={{ clickable: true }}
				pagination={{ clickable: true }}
				// scrollbar={{ draggable: true }}
				centeredSlides={true}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}>
				<SwiperSlide>
					<div className='inner'>Slide 1</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>Slide 2</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>Slide 3</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>Slide 4</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>Slide 5</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Vids;
