import React from 'react';
import Header from '../components/Header';
import About from './About';
import Services from './Services';
import Achievements from './Achievements';


const Home = () => {
  return (
    <>
      <Header/>
      <About/>
      <Services/>
      <Achievements/>
    </>
  )
}

export default Home