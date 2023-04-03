import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/img/surf-logo.svg';

function Logo () {
  return(
  <Link to="/" className="Logo">
    <img src={logo} alt="Logo" className="Logo__image"/>
    <p className="Logo__title">Surfs Up</p>
  </Link>
)}

export default Logo;