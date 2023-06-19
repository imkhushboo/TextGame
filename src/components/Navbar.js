import PropTypes from 'prop-types';
// import { useState } from 'react';
import {Link} from 'react-router-dom';


function Navbar(props){
  return (
      <>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode.backgroundColor==='black'?'dark':'light'} bg-${props.mode.backgroundColor==='black'?'dark':'light'}`}>
      <div className="container-fluid">
      <a className="navbar-brand" href="/"  >{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about' >{props.about}</Link>
        </li>
      </ul>
      </div>
      </div>
     <div class={`form-check form-switch text-${props.mode.backgroundColor==='black'?'light':'dark'}`}>
     <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
     <label class="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode.backgroundColor==='black'?'Turn off dark':'Turn on dark'} mode</label>
     </div>
      </nav>
      </>
    );

}

Navbar.propTypes={
    title: PropTypes.string,
    images: PropTypes.string,
};

Navbar.defaultProps={
    title: "set title",
    images: "set images"
}

export default Navbar;