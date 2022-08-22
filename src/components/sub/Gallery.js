import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Pop from '../common/Pop';
import Masonry from 'react-masonry-component';
import { useSelector, useDispatch } from 'react-redux';

function Gallery() {
	const dispatch = useDispatch();
	const frame = useRef(null);
	const input = useRef(null);
	const pop = useRef(null);
	const Pics = useSelector((store) => store.flickrReducer.flickr);

	const [Index, setIndex] = useState(0);
	const [Loading, setLoading] = useState(true);
	const [EnableClick, setEnableClick] = useState(false);
	const masonryOptions = { transitionDuration: '.5s' };
	const num = 50;
	const user = '196144884@N05';

	const [Opt, setOpt] = useState({ type: 'user', user: user });

	//interest요청 함수
	const showInterest = () => {
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		setOpt({
			type: 'interest',
		});
		setEnableClick(false);
	};

	//search요청 함수
	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result) return alert('검색어를 입력하세요');
		if (!EnableClick) return;
		setEnableClick(false);
		setLoading(true);
		frame.current.classList.remove('on');
		setOpt({
			type: 'search',
			tag: result,
		});
		input.current.value = '';
	};

	//user요청 함수
	const showUser = (e) => {
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		setOpt({
			type: 'user',
			user: e.target.getAttribute('user'),
		});
		setEnableClick(false);
	};

	// 데이터 로딩 완료 후 로딩바 제거 frame 호출
	const endLoading = () => {
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
			setTimeout(() => {
				setEnableClick(true);
			}, 600);
		}, 1000);
	};

	useEffect(() => {
		dispatch({
			type: 'FLICKR_START',
			Opt,
		});
	}, [Opt]);

	useEffect(() => {
		endLoading();
	}, [Pics]);

	return (
		<>
			<Layout name={'Gallery'}>
				<button user={user} onClick={showUser}>
					My Gallery
				</button>
				<button onClick={showInterest}>Interest Gallery</button>
				<div className='searchBox'>
					<input
						type='text'
						ref={input}
						onKeyUp={(e) => {
							if (e.key === 'Enter') showSearch();
						}}
					/>
					<button onClick={showSearch}>search</button>
				</div>
				{Loading && (
					<img
						className='loading'
						src={process.env.PUBLIC_URL + '/img/loading.gif'}
						alt=''
					/>
				)}
				<div className='frame' ref={frame}>
					<Masonry elementType={'div'} options={masonryOptions}>
						{Pics.map((pic, idx) => {
							return (
								<article key={idx}>
									<div className='inner'>
										<div
											className='pic'
											onClick={() => {
												setIndex(idx);
												pop.current.open();
											}}>
											<img
												src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
												alt={pic.title}
											/>
										</div>
										<h2>{pic.title}</h2>
										<div className='profile'>
											<img
												src={`http://farm${pic.farm}.staticflickr.com/${pic.server}/buddyicons/${pic.owner}.jpg`}
												alt={pic.owner}
												onError={(e) => {
													e.target.setAttribute(
														'src',
														'https://www.flickr.com/images/buddyicon.gif'
													);
												}}
											/>

											<span user={pic.owner} onClick={showUser}>
												{pic.owner}
											</span>
										</div>
									</div>
								</article>
							);
						})}
					</Masonry>
				</div>
			</Layout>
			<Pop ref={pop}>
				{Pics.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${Pics[Index].server}/${Pics[Index].id}_${Pics[Index].secret}_b.jpg`}
						alt={Pics[Index].title}
					/>
				)}
			</Pop>
		</>
	);
}

export default Gallery;
