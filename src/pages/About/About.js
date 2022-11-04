import React from 'react';
import HeaderHero from '../../components/HeaderHero/HeaderHero';
import Tabs from '../../components/Tabs/Tabs';

import "./about.css";
import bgHero from "../../assets/images/bgAbout.png"

function About(props) {
  return (
    <div className='about'>
      <HeaderHero className="about__headerHero" img={bgHero} alt="home headerHero bg" />
      <div className='about__containerTabs'>
        <Tabs title="Fiabilité" text={ <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p> } />
        <Tabs title="Respect" text={ <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p> } />
        <Tabs title="Service" text={ <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p> } />
        <Tabs title ="Sécurité" text={ <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p> } />
      </div>
    </div>
  );
}

export default About;