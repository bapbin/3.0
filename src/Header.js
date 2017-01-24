import React from 'react';

 	
const Header = (props) => {
	return (
		<div>
			<nav className="navbar navbar-light navbar-fixed-top">
		        <a className="navbar-brand weirdly-logo-svg">
            		<img src="https://app.weirdlyhub.com/img/logo.png" alt="Weirdly Logo" className="logo" width="97"/>
	            </a>
	            <h4>{props.tagline}</h4>
		        <img className="pull-xs-right img-circle"
		             src="https://app.weirdlyhub.com/img/logo.png"
		             alt="Generic placeholder" width="40" height="40"/>

		        <form className="pull-xs-right nav-search">
		            <input type="text" className="form-control" placeholder="Search"/>
		        </form>
	          <script src="https://unpkg.com/reactstrap/dist/reactstrap.min.js">
			        {console.log("cdn")}
		      </script>
			</nav>

			<div className='container-fluid page-title'> 
			    <div className="row">
			        <div className="col-sm-8">
			            <h1>quiz.title</h1>
			            <h2>Location, City name</h2>
			            <h2>Closes in <strong>5 days</strong> and <strong>4 hours</strong></h2>
			        </div>

			        <div className="col-sm-3 pull-xs-right page-title-nav">
			            <a>Edit</a>
			            <a>View</a>
			            <a>Analytics</a>
			        </div>
		        </div>
	        </div>

		</div>
	)
}

/* STATELESS functional component: 
 	Never updates or changes, only passed props (remove this.ref for props
 	Does not need to be Class extending React.  */

export default Header;