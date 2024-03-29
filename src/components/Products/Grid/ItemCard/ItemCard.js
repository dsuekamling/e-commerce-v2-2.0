import React from 'react';

function ItemCard (props) {
  return(
  <div className="Item">
    <img className="Item__image" src={props.src} alt={props.alt}/>
    <div className="Item__card">
      <div className="Item__tag">
        <h3 className="Item__title">{props.name}</h3>
        <p className="Item__price">${props.price.toFixed(2)}</p>
        {/* <p className="Item__price">${props.price}</p> */}
      </div>
      <p className="Item__desc">{props.desc}</p>
    </div>
  </div>
)};

export default ItemCard;