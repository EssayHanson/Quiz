import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Hero from './components/Hero';
import Turn from './components/Turn';
import Continue from './components/Continue';
import Footer from './components/Footer';

function MusicianQuiz({turnData}) {

  return (
    <div className="container-fluid">
      <Hero/>
      <Turn {...turnData}/>
      <Continue/>
      <Footer/>
    </div>
  );
}

export default MusicianQuiz;