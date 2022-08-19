import { useSelector } from 'react-redux';
import Layout from '../common/Layout';

function Department() {
	const path = process.env.PUBLIC_URL;
	const Members = useSelector((store) => store.memberReducer.members);

	return (
		<Layout name={'Department'}>
			{Members.map((member, idx) => (
				<article key={idx}>
					<div className='inner'>
						<div className='picFrame'>
							<div className='refelct'>
								<img src={`${path}/img/${member.pic}`} alt='' />
							</div>
							<div className='pic'>
								<img src={`${path}/img/${member.pic}`} alt='' />
							</div>
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
