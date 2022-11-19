import React from 'react'
import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import Popular from '../components/Popular';

const Homepage = () => {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <OurServices />
      <Popular />
    </main>
  )
}

export default Homepage