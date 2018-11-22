import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/navbar/navbar.css';

const Navbar = () => {

  return <nav class="navbar navbar-inverse navbar-fixed-top navbar-text">
    <div class="container">
      {/*Brand and toggle get grouped for better mobile display */}
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <Link to="/" class="navbar-brand"><img src={require("../../static/Creatures-Logo_172x24.png")} /></Link>
      </div>

      {/* Collect the nav links, forms, and other content for toggling */}
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav  navbar-right">
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">PROJECTS</a></li>
          <li><a href="#">EXPLAINER VIDEOS</a></li>
          <li><a href="#">PRESS</a></li>
        </ul>
      </div> {/* .navbar-collapse */}
    </div> {/* .container-fluid */}

</nav>
}

export default Navbar;
