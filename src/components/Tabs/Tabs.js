import React, { useState } from 'react';

import "./tabs.css"

function Tabs(props) {
  const [open, setOpen] =  useState('active')
  const click = () => {
    if(open === 'active') {
      setOpen('inactive');
    } else {
      setOpen('active')
    }
  }

  return (
    <div className={'tab ' + open} onClick={click}>
      <div className='tab__header'>
        <h3 className='tab__header__title'>{ props.title }</h3>
        <i className="fa-solid fa-angle-up"></i>
      </div>
      <div className='tab__content'>
        { props.text }
      </div>
    </div>
  );
}

export default Tabs;