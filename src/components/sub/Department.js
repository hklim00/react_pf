import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Department() {
	const [Members, setMembers] = useState([]);

	useEffect(() => {
		// fetch(process.env.PUBLIC_URL + '/DB/members.json')
		// 	.then((data) => data.json())
		// 	.then((json) => console.log(json));
		axios
			.get(process.env.PUBLIC_URL + '/DB/members.json')
			.then((json) => setMembers(json.data.members));
	}, []);

	return (
		<Layout name={'Department'}>
			{Members.map((member, idx) => {
				return (
					<article key={idx}>
						<div className='inner'>
							<div className='pic'>
								<img
									src={`${process.env.PUBLIC_URL}/img/${member.pic}`}
									alt=''
								/>
							</div>
							<h2>{member.name}</h2>
							<p>{member.position}</p>
						</div>
					</article>
				);
			})}
		</Layout>
	);
}

export default Department;
