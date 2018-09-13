import React from 'react';

export default function Link(props)
{
	return (
		<li className="footer-list-item">
			<a href={props.href}>
				{props.text}
			</a>
		</li>
	);
}