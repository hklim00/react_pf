import Layout from '../common/Layout';

import { useRef, useEffect, useState } from 'react';

function Location() {
	const { kakao } = window; // window 객체 안에서 kakao 키값 가져오기
	const container = useRef(null);

	const info = [
		{
			title: '삼성동 코엑스',
			latLng: new kakao.maps.LatLng(37.51271224560607, 127.06069135102807),
			imgUrl: process.env.PUBLIC_URL + '/img/marker1.png',
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
	];

	const [Location, setLocation] = useState(null);
	const [Traffic, setTraffic] = useState(false);
	const [Info, setInfo] = useState(info);

	const option = {
		center: Info[0].latLng,
		level: 3,
	};
	const markerPosition = option.center;

	const imgSrc = Info[0].imgUrl;
	const imgSize = Info[0].imgSize;
	const imgOption = Info[0].imgPos;

	const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOption);

	const marker = new kakao.maps.Marker({
		position: markerPosition,
		image: markerImage,
	});

	useEffect(() => {
		const map_instance = new kakao.maps.Map(container.current, option);
		marker.setMap(map_instance);
		setLocation(map_instance);
	}, []);

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
		</Layout>
	);
}

export default Location;
