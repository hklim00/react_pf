import Layout from '../common/Layout';

import { useRef, useEffect, useState } from 'react';

function Location() {
	const { kakao } = window; // window 객체 안에서 kakao 키값 가져오기
	const container = useRef(null);
	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 3,
	};
	const markerPosition = option.center;

	const imageSrc = process.env.PUBLIC_URL + '/img/marker1.png';
	const imageSize = new kakao.maps.Size(232, 99);
	const imageOption = { offset: new kakao.maps.Point(116, 99) };

	const markerImage = new kakao.maps.MarkerImage(
		imageSrc,
		imageSize,
		imageOption
	);

	const marker = new kakao.maps.Marker({
		position: markerPosition,
		image: markerImage,
	});

	useEffect(() => {
		const map = new kakao.maps.Map(container.current, option);
		marker.setMap(map);
	}, []);

	return (
		<Layout name={'Location'}>
			<div id='map' ref={container}></div>
		</Layout>
	);
}

export default Location;
