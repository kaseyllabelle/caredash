import React from 'react';

export default function Card(props)
{
	return(
		<div className="col card">
			<i className="card-icon material-icons md-72">{props.icon}</i>
			<h3 className="sub-heading card-headline">{props.headline}</h3>
			<p className="card-body">{props.body}</p>
			<div className="card-cta">
				<a href="{props.ctaLink}">{props.ctaText}</a>
			</div>
		</div>
	)
}