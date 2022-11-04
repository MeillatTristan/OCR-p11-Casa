import React from 'react';
import { Link } from 'react-router-dom';

import "./page404.css"

function page404(props) {
  return (
    <div className='page404'>
        <h1>404</h1>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
        <Link to={"/"}>Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default page404;