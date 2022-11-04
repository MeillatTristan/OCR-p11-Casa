import React from 'react';
import data from '../../data/logements.json'
import { Link } from 'react-router-dom';

import "./card.css";
import "./logement.css";

function Logements(props) {
  const cardCollection = data.map((logement) => 
    <Link to={"/logements/" + logement.id} className='logements__card card' key={logement.id.toString()}>
      <img className='card__cover' src={logement.cover} alt={"cover " + logement.title} />
      <h3 className='card__title'>{ logement.title }</h3>
    </Link>
  )
  return (
    <div className='logements'>
      {cardCollection}
    </div>
  );
}

export default Logements;