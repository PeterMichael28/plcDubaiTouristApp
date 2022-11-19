import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layouts';
import Accomodation from './Pages/Accomodation';
import Homepage from './Pages/Homepage';
import Offers from './Pages/Offers';
import Service from './Pages/Service';
import './App.css'

function App() {


  return (
    <>
    <Routes>
     <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="/service" element={<Service />} />
      <Route path="/accommodation" element={<Accomodation />} />
      <Route path="/offers" element={<Offers />} />
     </Route>
    </Routes>
   </>
  )
}

export default App
