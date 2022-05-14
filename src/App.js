import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';

const App = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeight]);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;
