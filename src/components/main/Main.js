import Header from '../common/Header';
import Visual from '../main/Visual';
import Btns from './Btns';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import { useState, useEffect } from 'react';

function Main() {
	const [Scrolled, setScrolled] = useState(0);
	const [Pos, setPos] = useState([]);
	return (
		<>
			<Header type={'main'} />
			<Visual />
			<News />
			<Pics Scrolled={Scrolled} currentPos={Pos[2]} />
			<Vids />
			<Btns setScrolled={setScrolled} setPos={setPos} />
		</>
	);
}

export default Main;
