import React, { Component } from 'react';

const NavBar = (props) => {
    console.log('NavBar - Rendered');
    return(
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar<span className="badge m-2 badge-secondary">{props.totalCounters}</span></a>
        </nav>
      </div>
    );
}

export default NavBar;
