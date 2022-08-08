import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faFacebook,
	faGithub,
	faDribbble,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer>
			<div className='upper'>
				<h1>
					<img
						src={process.env.PUBLIC_URL + '/img/logo_b.png'}
						alt='CONVERSE'
					/>
				</h1>
				<nav>
					<dl>
						<dt>CMMUNITY</dt>
						<dd>About</dd>
						<dd>Submit on Issue</dd>
						<dd>Github Repo</dd>
						<dd>Slack</dd>
					</dl>
					<dl>
						<dt>GETTING STARTED</dt>
						<dd>Introduction</dd>
						<dd>Documentation</dd>
						<dd>Usage</dd>
						<dd>Globals</dd>
						<dd>Elements</dd>
						<dd>Collections</dd>
						<dd>Themes</dd>
					</dl>
					<dl>
						<dt>RESOURCES</dt>
						<dd>API</dd>
						<dd>Form ValidationProduct</dd>
						<dd>Visibility</dd>
						<dd>Accessibility</dd>
						<dd>Comnnunity</dd>
						<dd>Design Defined</dd>
						<dd>Markeplace</dd>
					</dl>
				</nav>
			</div>
			<div className='lower'>
				<p>&copy; 2022 CONVERSE. All rights reserved.</p>
				<ul className='terms'>
					<li>Terms of Service</li>
					<li>Privacy Policy</li>
					<li>Security</li>
					<li>Sitemap</li>
				</ul>
				<ul className='sns'>
					<li>
						<FontAwesomeIcon icon={faTwitter} />
					</li>
					<li>
						<FontAwesomeIcon icon={faGithub} />
					</li>
					<li>
						<FontAwesomeIcon icon={faFacebook} />
					</li>
					<li>
						<FontAwesomeIcon icon={faDribbble} />
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
