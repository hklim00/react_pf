import Header from '../common/Header';
import Visual from '../main/Visual';
import Content from '../main/Content';
import News from './News';

function Main() {
	return (
		<div>
			<Header />
			<Visual />
			<Content>
				<News />
			</Content>
		</div>
	);
}

export default Main;
