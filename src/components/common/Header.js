import { Link, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faYoutube,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function Header() {
	const active = { color: 'aqua' };
	return (
		<header>
			<h1>
				<Link to='/'>LOGO</Link>
			</h1>
			<nav>
				<ul className='gnb'>
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
		</header>
	);
}

export default Header;
