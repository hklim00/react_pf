import { Link, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faYoutube,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header({ type }) {
	const active = { color: '#000' };
	let logoURL = '';
	type === 'main'
		? (logoURL = '/img/logo_w.png')
		: (logoURL = '/img/logo_b.png');

	return (
		<header className={type}>
			<h1>
				<Link to='/'>
					<img src={process.env.PUBLIC_URL + logoURL} alt='logo' />
				</Link>
				<span>Lorem ipsum dolor sit amet.</span>
			</h1>
			<nav>
				<ul id='gnb'>
					<li>
						<NavLink to='/department' activeStyle={active}>
							DEPARTMENT
						</NavLink>
					</li>
					<li>
						<NavLink to='/community' activeStyle={active}>
							COMMUNITY
						</NavLink>
					</li>
					<li>
						<NavLink to='/gallery' activeStyle={active}>
							GLALERY
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeStyle={active}>
							YOUTUBE
						</NavLink>
					</li>
					<li>
						<NavLink to='/location' activeStyle={active}>
							LOCATION
						</NavLink>
					</li>
					<li>
						<NavLink to='/members' activeStyle={active}>
							MEMBERS
						</NavLink>
					</li>
				</ul>
				<ul className='util'>
					<li>
						<FontAwesomeIcon icon={faTwitter} />
					</li>
					<li>
						<FontAwesomeIcon icon={faYoutube} />
					</li>
					<li>
						<FontAwesomeIcon icon={faInstagram} />
					</li>
				</ul>
			</nav>
			<FontAwesomeIcon icon={faBars} />
		</header>
	);
}

export default Header;
