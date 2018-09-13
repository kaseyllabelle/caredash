import React, {Fragment} from 'react';

import {cardsData} from '../data/cardsData';

import Hero from '../components/hero';
import Card from '../components/card';

export default class Home extends React.Component
{	
	render() {
		const cards = cardsData.map((card, index) => {
			return <Card {...card} key={index}/>
		})

		return(
			<Fragment>
				<Hero/>
				<section className="main">
					<div className="grid-container">
						<div className="row">
							<div className="col">
								<h2 className="heading">Reasons to Sign Up as a Provider on CareDash</h2>
							</div>
						</div>
						<div className="row cards">
							{cards}
						</div>
					</div>
				</section>
			</Fragment>
		)
	}
}