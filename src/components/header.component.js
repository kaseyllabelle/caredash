import React from 'react';
import {Link} from 'react-router-dom';

import Nav from '../components/nav';

export default function Header(props)
{
	return(
		<header className="header">
			<div className="grid-container">
				<div className="row justify-between align-center">
					<div className="col">
						<Link to="/" className="header-logo-cta">
							<img src="/images/caredash-logo.svg" alt="CareDash logo" className="header-logo" />
						</Link>
					</div>
					<Nav/>
				</div>
			</div>
		</header>
	)
}