import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {

    return (
      <div className="nav-container">
        <NavLink to="/open" activeClassName="selected" className="nav">
          Issues
        </NavLink>
        <NavLink to="/closed" activeClassName="selected" className="nav">
          Closed Issues
        </NavLink>
        <NavLink to="/new" activeClassName="selected" className="nav">
          Create Issue
        </NavLink>
      </div>
    );
}

export default NavBar