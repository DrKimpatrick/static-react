import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Carousel from './components/carousel/carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />;
        <Carousel />;
        
      </div>
    );
  }
}

export default App;
