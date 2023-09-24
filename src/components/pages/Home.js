import React from 'react';
import { Banner } from './../../components/Banner';
import { Services } from './../../components/Services';
import { Portfolio } from './../../components/Portfolio';
import { Pricing } from './../../components/Pricing';
import { Contact } from './../../components/Contact';

export const Home = () => {
  return (
    <div className='home-page'>
      <Banner />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  )
}
