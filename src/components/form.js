import React, {Fragment} from 'react';

export default function Contact(props)
{
	return(
		<Fragment>
			<div className="row">
				<div className="col col-5 col-xs-12 form-container">
					<form id="logIn">
						<fieldset className="form-fieldset">
    						<legend><h1 className="heading">Sign Up with CareDash to Edit Your Provider Profile</h1></legend>
							<div className="form-input-container">
								<label className="form-label" htmlFor="name">Full Name</label>
								<input className="form-input" type="text" name="name" required/>
							</div>
							<div className="form-input-container">
								<label className="form-label" htmlFor="email">Email Address</label>
								<input className="form-input" type="email" name="email" id="email" minLength="3" maxLength="64" required/>
							</div>
							<div className="form-input-container">
								<label className="form-label" htmlFor="password">Password</label>
								<input className="form-input" type="password" name="password" id="password" required/>
							</div>
							<div className="form-input-container">
								<label className="form-label" htmlFor="password">Confirm Password</label>
								<input className="form-input" type="password" name="confirm-password" id="confirm-password" required/>
							</div>
						</fieldset>
						<button type="submit" className="button submit">Sign Up</button>
						<div className="log-in">
							Have an account? <a className="log-in-cta">Log in.</a>
						</div>
					</form>
				</div>
			</div>
		</Fragment>
	)
}