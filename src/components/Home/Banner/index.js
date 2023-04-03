import React from 'react';
import summerPic from '../../../assets/img/homeSummer.jpg'

function Banner  ()  {
  return(
  <div className="Banner">
    <img className="Banner__image" src={summerPic} alt="Two people lounging at the beach"/>
    <p className="Banner__text">SUMMER IS HERE.</p>
  </div>
)};

export default Banner;