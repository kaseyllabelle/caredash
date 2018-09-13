import React from 'react';

export default function Nav(props)
{
	return(
		<nav className="col">
			<ul className="nav-list">
				<li className="nav-list-item dropdown">
					<a href="/">
						Lorem
					</a>
					<div className="dropdown-content">
						<a href="/" className="dropdown-link">Lorem</a>
						<a href="/" className="dropdown-link">Ipsum</a>
						<a href="/" className="dropdown-link">Dolor</a>
					</div>
				</li>
				<li className="nav-list-item">
					<a href="/">
						Ipsum
					</a>
				</li>
				<li className="nav-list-item">
					<a href="/">
						Dolor
					</a>
				</li>
			</ul>
		</nav>
	)
}