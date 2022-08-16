import { useRef } from 'react';
import Anime from '../../assets/Anime';

const btnStyle = {
	position: 'absolute',
	top: 120,
	left: 120,
};
const boxStyle = {
	width: 100,
	height: 100,
	background: 'aqua',
	position: 'absolute',
	top: 200,
	left: 200,
};
function Visual() {
	const box = useRef(null);
	return (
		<figure id='visual'>
			<button
				style={btnStyle}
				onClick={() => {
					new Anime(window, {
						prop: 'scroll',
						value: 600,
						duration: 500,
					});
				}}>
				start
			</button>
			<div className='box' style={boxStyle} ref={box}></div>
		</figure>
	);
}

export default Visual;
