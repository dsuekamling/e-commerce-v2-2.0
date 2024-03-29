import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';

function Nav (props) {
  return(
  <nav className="Nav">
    <Hamburger handleNav={props.handleNav}/>
    <ul className="Nav__list">
      <li>
        <Link to="/" className="Nav__link" onClick={props.handleNav}>Home</Link>
      </li>
      <li>
        <Link to="/products" className="Nav__link" onClick={props.handleNav}> Shop</Link>
      </li>
      <li>
        <Link to="/contact" className="Nav__link" onClick={props.handleNav}>Contact Us</Link>
      </li>
    </ul>
    
  </nav>
)};

export default Nav;