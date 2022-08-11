import Layout from '../common/Layout';

import { useRef, useEffect, useState } from 'react';

function Location() {
	const [Location, setLocation] = useState(null);
	const { kakao } = window; // window 객체 안에서 kakao 키값 가져오기
	const container = useRef(null);
	const option = {
		center: new kakao.maps.LatLng(37.51271224560607, 127.06069135102807),
		level: 3,
	};
	const markerPosition = option.center;

	const imgSrc = process.env.PUBLIC_URL + '/img/marker1.png';
	const imgSize = new kakao.maps.Size(232, 99);
	const imgOption = { offset: new kakao.maps.Point(116, 99) };

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

	return (
		<Layout name={'Location'}>
			<div id='map' ref={container}></div>
			<button
				onClick={() =>
					Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
				}>
				Traffic On
			</button>
			<button
				onClick={() =>
					Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
				}>
				Traffic Off
			</button>
		</Layout>
	);
}

export default Location;
