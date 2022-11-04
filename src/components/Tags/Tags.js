import React from 'react';

import "./tags.css"

function Tags(props) {
  const tags = props.tags.map((tag) => 
    <span key={props.tags.indexOf(tag)} className={props.class +'__tag containerTags__tag'}>{ tag }</span>
  )
  return (
    <div className={props.class + ' containerTags'}>
      {tags}
    </div>
  );
}

export default Tags;