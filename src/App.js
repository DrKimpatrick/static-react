import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Carousel from './components/carousel/carousel';
import Projects from './components/projects/projects';
import Services from './components/services/services';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Navbar />
        <Carousel />
        <div className="black-color">
          <About />
          <Projects />
          <Services />
        </div>

      </div>
    );
  }
}

export default App;
