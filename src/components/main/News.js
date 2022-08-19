import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function News() {
	const getLocalData = () => {
		const dummyPosts = [
			{ title: 'Hello5', content: 'Here comes description in detail.' },
			{ title: 'Hello4', content: 'Here comes description in detail.' },
			{ title: 'Hello3', content: 'Here comes description in detail.' },
			{ title: 'Hello2', content: 'Here comes description in detail.' },
			{ title: 'Hello1', content: 'Here comes description in detail.' },
		];
		const data = localStorage.getItem('post');
		if (data) {
			return JSON.parse(data);
		} else {
			return dummyPosts;
		}
	};
	const [Posts, setPosts] = useState(getLocalData());

	const Members = useSelector((store) => store.memberReducer.members);

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, []);

	return (
		<section id='news' className='myScroll'>
			<h1>News</h1>
			{Posts.map((post, idx) => {
				if (idx >= 4) return;

				return (
					<article key={idx}>
						<h2>{post.title}</h2>
						<p>{post.content}</p>
					</article>
				);
			})}
			<div>
				{Members.map((member, idx) => {
					return (
						<span key={idx}>
							<h2>{member.name}</h2>
							<p>{member.position}</p>
						</span>
					);
				})}
			</div>
		</section>
	);
}

export default News;
