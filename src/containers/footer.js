import React from 'react';

import {footerLinksData} from '../data/footerLinksData';

import Link from '../components/link';

export default class Footer extends React.Component
{
	render(){
		const footerLinks = footerLinksData.map((link) => {
			return <Link {...link} key={link.id} />
		})

		const iconList = [
			"fab fa-2x fa-facebook", 
			"fab fa-2x fa-twitter", 
			"fab fa-2x fa-instagram", 
			"fab fa-2x fa-pinterest"
		];
		const icons = iconList.map((icon) =>
			<a href="/" className="social-icon" key={icon.toString()}>
				<i className={icon}></i>
			</a>
		);

		return(
			<footer className="footer">
				<div className="grid-container">
					<div className="row">
						<div className="col col-xs-6">
							<h4 className="sub-heading">CareDash</h4>
							<ul>
								{footerLinks[0]}
								{footerLinks[1]}
								{footerLinks[2]}
								{footerLinks[3]}
							</ul>
						</div>
						<div className="col col-xs-6">
							<h4 className="sub-heading">Specialists</h4>
							<ul>
								{footerLinks[4]}
								{footerLinks[5]}
								{footerLinks[6]}
								{footerLinks[7]}
							</ul>
						</div>
						<div className="col social-icons-container">
							<h4 className="sub-heading">Follow Us</h4>
							{icons}
						</div>
					</div>
					<div className="row">
						<div className="col">
							<p className="copyright">
								<i className="far fa-copyright fa-sm" title="copyright"></i> 2018 CareDash
							</p>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}