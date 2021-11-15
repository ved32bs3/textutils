
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const homeClick = () => {
	document.title = 'TextUtils - A text utility | Home';
  }
  const aboutClick = () => {
	document.title = 'TextUtils - A text utility | About';
  }
  const settingsClick = () => {
	document.title = 'TextUtils - A text utility | Settings';
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    	<div className="container-fluid">
    	  <Link className="navbar-brand" to="/" onClick={homeClick}>{props.title}</Link>
    	  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    	    <span className="navbar-toggler-icon"></span>
    	  </button>
    	  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    	    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    	      <li className="nav-item">
				<Link className="nav-link" to="/" onClick={homeClick}>Home</Link>
    	      </li>
    	      <li className="nav-item">
				<Link className="nav-link" to="/about" onClick={aboutClick}>About</Link>
    	      </li>
    	      <li className="nav-item">
				<Link className="nav-link" to="/contact-us" onClick={settingsClick}>Settings</Link>
    	      </li>
    	    </ul>
			<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
				<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
			  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.switch}</label>
			</div>
    	  </div>
    	</div>
    </nav> 
  )
}

Navbar.propTypes = {
	title: PropTypes.string,
	aboutText: PropTypes.string,
	contactText: PropTypes.string
}

Navbar.defaultProps = {
	title: "Set title here",
	aboutText: "About text here",
	contactText: "Contact text here"
}