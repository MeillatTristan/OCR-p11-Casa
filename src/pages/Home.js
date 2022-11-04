import React from 'react';
import HeaderHero from '../components/HeaderHero/HeaderHero';
import Logements from '../components/Logement/Logements';

import bgHero from "../assets/images/bgHome.png";

function Home() {
  
  return (
    <div className='home'>
      <HeaderHero className="home__headerHero" text="Chez vous, partout et ailleurs" img={bgHero} alt="home headerHero bg"  />
      <Logements />
    </div>
  );
}

export default Home;