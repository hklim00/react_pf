import Layout from '../common/Layout';

import { useRef, useEffect, useState } from 'react';

function Location() {
	const { kakao } = window; // window 객체 안에서 kakao 키값 가져오기
	const container = useRef(null);
	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 3,
	};

	useEffect(() => {
		const map = new kakao.maps.Map(container.current, option);
	}, []);

	return (
		<Layout name={'Location'}>
			<div id='map' ref={container}></div>
		</Layout>
	);
}

export default Location;
