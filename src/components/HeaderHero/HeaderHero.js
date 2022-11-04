import React from 'react';

import "./headerHero.css";

function HeaderHero(props) {
  return (
    <div className={ props.className + " headerHero"}>
      {props.text && (
        <h1 className="headerHero__title">{props.text}</h1>
      )}
      <img className="headerHero__bg" src={ props.img } alt={ props.alt } />
    </div>
  )
}

export default HeaderHero;