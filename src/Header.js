import React from 'react';

/* STATELESS functional component: 
 	Never updates or chnages, only passed props (remove this.ref for props
 	Does not need to be Class extending React.  */
 	
const Header = (props) => {
	return (
		<header className="App-header">
			<h1>Weirdly</h1>
			<h3 className="tagline"><span>{props.tagline}</span></h3>
		</header>
	)
}

export default Header;