import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import Hero from './components/Hero';
import Turn from './components/Turn';
import Continue from './components/Continue';
import Footer from './components/Footer';

class MusicianQuiz extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero/>
        <Turn/>
        <Continue/>
        <Footer/>
      </div>
    );
  }
}

export default MusicianQuiz;
