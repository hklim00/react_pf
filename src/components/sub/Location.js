import Layout from '../common/Layout';

import { useRef, useEffect, useState } from 'react';

function Location() {
	const { kakao } = window; // window 객체 안에서 kakao 키값 가져오기

	const info = [
		{
			title: '삼성동 코엑스',
			latLng: new kakao.maps.LatLng(37.51271224560607, 127.06069135102807),
			imgUrl: process.env.PUBLIC_URL + '/img/marker1.png',
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '올림픽 공원',
			latLng: new kakao.maps.LatLng(37.51881764760613, 127.11633054508519),
			imgUrl: process.env.PUBLIC_URL + '/img/marker2.png',
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 90) },
		},
		{
			title: '서울 시청',
			latLng: new kakao.maps.LatLng(37.566918804166775, 126.97863525321908),
			imgUrl: process.env.PUBLIC_URL + '/img/marker3.png',
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 90) },
		},
	];

	const container = useRef(null);
	const [Location, setLocation] = useState(null);
	const [Traffic, setTraffic] = useState(false);
	const [Info] = useState(info);
	const [Index, setIndex] = useState(0);

	const option = {
		center: Info[Index].latLng,
		level: 3,
	};
	const markerPosition = option.center;

	const imgSrc = Info[Index].imgUrl;
	const imgSize = Info[Index].imgSize;
	const imgOption = Info[Index].imgPos;

	const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOption);

	const marker = new kakao.maps.Marker({
		position: markerPosition,
		image: markerImage,
	});

	useEffect(() => {
		const map_instance = new kakao.maps.Map(container.current, option);
		marker.setMap(map_instance);
		setLocation(map_instance);
	}, [Index]);

	useEffect(() => {
		if (!Location) return;
		Traffic
			? Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);

	return (
		<Layout name={'Location'}>
			<div id='map' ref={container}></div>
			<button onClick={() => setTraffic(!Traffic)}>
				{Traffic ? 'Traffic Off' : 'Traffic On'}
			</button>

			<ul className='branch'>
				{Info.map((info, idx) => {
					let on = '';
					Index === idx && (on = 'on');
					return (
						<li key={idx} onClick={() => setIndex(idx)} className={on}>
							{info.title}
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}

export default Location;
