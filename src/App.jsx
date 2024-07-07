import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';
import PopularFeatures from './components/Disntinctive';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Service />
      <Features />
      <features_highlight />
      <PopularFeatures />
      <services />
      <Footer />
    </div>
  );
}

export default App;