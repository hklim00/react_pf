import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Department() {
	const path = process.env.PUBLIC_URL;
	const [Members, setMembers] = useState([]);

	useEffect(() => {
		// fetch(process.env.PUBLIC_URL + '/DB/members.json')
		// 	.then((data) => data.json())
		// 	.then((json) => console.log(json));
		axios
			.get(path + '/DB/members.json')
			.then((json) => setMembers(json.data.members));
	}, []);

	return (
		<Layout name={'Department'}>
			{Members.map((member, idx) => (
				<article key={idx}>
					<div className='inner'>
						<div className='pic'>
							<img src={`${path}/img/${member.pic}`} alt='' />
						</div>
						<h2>{member.name}</h2>
						<p>{member.position}</p>
					</div>
				</article>
			))}
		</Layout>
	);
}

export default Department;
