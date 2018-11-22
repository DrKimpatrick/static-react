import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/navbar/navbar.scss';

const Navbar = () => {

  return <nav className="navbar navbar-inverse navbar-fixed-top navbar-text">
    <div className="container">

      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/" class="navbar-brand"><img src={require("../../static/Creatures-Logo_172x24.png")} alt=""/></Link>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav  navbar-right">
          <li><Link to="/" className="about">ABOUT US</Link></li>
          <li><Link to="/">PROJECTS</Link></li>
          <li><Link to="/">EXPLAINER VIDEOS</Link></li>
          <li><Link to="/">PRESS</Link></li>
        </ul>
      </div>
    </div>

</nav>
};

export default Navbar;
