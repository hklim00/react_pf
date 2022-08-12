import Layout from '../common/Layout';
import { useRef, useState } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);

	const [Posts, setPosts] = useState([]);

	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			return;
		}
		setPosts([
			...Posts,
			{
				title: input.current.value,
				content: textarea.current.value,
			},
		]);

		resetForm();
	};

	const deletePost = (index) => {
		const newPosts = Posts.filter((_, idx) => idx !== index);
		setPosts(newPosts);
	};

	return (
		<Layout name={'Community'}>
			<div className='inputBox'>
				<input type='text' placeholder='제목을 입력하세요' ref={input} />
				<br />
				<textarea
					name=''
					id=''
					cols='30'
					rows='3'
					placeholder='제목을 입력하세요'
					ref={textarea}></textarea>
				<br />
				<button onClick={resetForm}>CANCEL</button>
				<button onClick={createPost}>WRITE</button>
			</div>
			<div className='showBox' style={{ height: 200 }}>
				{Posts.map((val, idx) => {
					return (
						<article key={idx}>
							<h2>{val.title}</h2>
							<p>{val.content}</p>
							<div className='btnSet'>
								<button>EDIT</button>
								<button onClick={() => deletePost(idx)}>DELETE</button>
							</div>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Community;
