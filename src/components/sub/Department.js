import { useSelector, useDispatch } from 'react-redux';
import { setMembers } from '../../redux/action';
import Layout from '../common/Layout';

function Department() {
	const dispatch = useDispatch();
	const path = process.env.PUBLIC_URL;
	const Members = useSelector((store) => store.memberReducer.members);

	return (
		<Layout name={'Department'}>
			<button
				onClick={() => {
					const newMembers = [...Members];
					newMembers[0].name = 'helen';
					dispatch(setMembers(newMembers));
				}}>
				Member Change
			</button>
			<br />
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
