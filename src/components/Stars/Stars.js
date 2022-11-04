import React from 'react';

import "./stars.css"

function Stars(props) {
  const rating = props.rating;
  let elements = [];

  for (let index = 0; index < 5; index++) {
    if (index < rating) {
      elements.push(<span key={index} className={props.class + "__star containerStars__star --active"}><i className="fa-solid fa-star"></i></span>)
    } else {
      elements.push(<span key={index} className={props.class + "__star containerStars__star --inactive"}><i className="fa-solid fa-star"></i></span>)
    }
  }
  return (
    <div className={props.class + " containerStars"}>
      {elements}
    </div>
  );
}

export default Stars;