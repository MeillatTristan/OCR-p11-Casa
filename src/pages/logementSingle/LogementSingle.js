import React from 'react';
import {useParams} from 'react-router-dom';
import data from '../../data/logements.json'
import Carousel from '../../components/Carousel/Carousel';
import Tags from '../../components/Tags/Tags';
import Stars from '../../components/Stars/Stars';
import Tabs from '../../components/Tabs/Tabs';
import Page404 from '../Page404/Page404';

import './logementSingle.css';

function LogementSingle(props) {
  
  const params = useParams();
  let logement = data.find((logementSingle) => logementSingle.id === params.id);

  if (!logement) {
    return <Page404 />
  }

  let equipments = <ul> 
                      {logement.equipments.map((equipment) => 
                        <li key={logement.equipments.indexOf(equipment)}>{equipment}</li>
                      )}
                    </ul>

  return (
    <div className='logementSingle'>
      <Carousel items={ logement.pictures }/>
      <div className='logementSingle__info'>
        <div className='logementSingle__info__left'>
          <h2 className='logementSingle__info__left__title'>{ logement.title }</h2>
          <span className='logementSingle__info__left__city'>{ logement.location }</span>
          <Tags class="logementSingle__info__left__containerTags" tags={ logement.tags } />
        </div>
        <div className='logementSingle__info__right'>
          <div className='logementSingle__info__right__profil'>
            <p className='logementSingle__info__right__profil__name'> {logement.host.name.split(" ").join("\n")} </p>
            <img className='logementSingle__info__right__profil__img' src={logement.host.picture} alt={logement.host.name + "photo de profil"}></img>
          </div>
          <Stars class="logementSingle__info__right__containerStars" rating={ logement.rating } />
        </div>
      </div>
      <div className='logementSingle__tabs'>
        <Tabs text={<p>{logement.description}</p>} title="Description" />
        <Tabs text={equipments} title="Équipements" />
      </div>
    </div>
  );
}

export default LogementSingle;