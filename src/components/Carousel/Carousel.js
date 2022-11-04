import React, { useState } from 'react';

import "./carousel.css"
import arrowLeft from "../../assets/images/arrowLeft.svg";
import arrowRight from "../../assets/images/arrowLeft.svg";

function Carousel(props) {
  const [current, setCurrent] = useState(0);
  let nav = [];

  const imgPrevious = () => {
    if (current === 0) {
      setCurrent(props.items.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }
  const imgNext = () => {
    if (current === props.items.length - 1 ) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }
  if (props.items.length > 1) {
    nav = <div className='carousel__nav'>
                  <button className='carousel__nav__left' onClick={ imgPrevious }><img src={arrowLeft} alt="arrow left carousel" /></button>
                  <button className='carousel__nav__right' onClick={ imgNext }><img src={arrowRight} alt="arrow right carousel" /></button>
                </div>
  }


  return (
    <div className='carousel'>
      {nav}
      <img className='carousel__image' src={props.items[current]} alt='imgCarousel' />
      <div className='carousel__numbers'>
        <p><span className='carousel__numbers__current'>{ current + 1 }</span> / <span>{props.items.length}</span></p>
      </div>
    </div>
  );
}

export default Carousel;