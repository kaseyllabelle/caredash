import React from 'react';

export default function IconLink(props)
{
    return (
		<a href="/" className="social-icon">
			<i className="{props.iconLink}"></i>
		</a>
    );
}