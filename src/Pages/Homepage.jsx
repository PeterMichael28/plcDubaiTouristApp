import React from 'react'
import Attractions from '../components/Attractions';
import Hero from '../components/Hero';
import HomeBanner from '../components/HomeBanner';
import OurServices from '../components/OurServices';
import Popular from '../components/Popular';

const Homepage = () => {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <OurServices />
      <Popular />
      <Attractions />
      <HomeBanner text='WE HAVE THE BEST OFFER DESIGNED FOR YOU' btn='true' />
    </main>
  )
}

export default Homepage