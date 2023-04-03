import React from 'react';
// import map from '../../../assets/img/contactpage-map.png';

function MapCard () {
  return(
  <div className="MapCard">
    <div className="MapCard__card">
      <p className="MapCard__title">Surfs Up Shop</p>
      <p className="MapCard__address">425 El Dorado Dr,</p>
      <p className="MapCard__address">Daly City, CA</p>
      <p className="MapCard__address">Phone: (787)899-1934</p>
      <p className="MapCard__address">Fax: (212)734-9860</p>
    </div>
    {/* <img className="MapCard__image" src={map} alt="Map to our shop" /> */}
  </div>
)}

export default MapCard;