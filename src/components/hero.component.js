import React from 'react';

import Form from '../components/form';

export default function Hero(props)
{
	return(
		<section className="hero">
			<div className="hero-overlay" />
			<div className="grid-container">
				<Form />
			</div>
		</section>
	)
}