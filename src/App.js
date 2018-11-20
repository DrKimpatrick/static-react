import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Carousel from './components/carousel/carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
            <div col-lg-12>
              <Navbar />;
              <Carousel />;
              <About />;
            </div>
        </div>
      </div>
    );
  }
}

export default App;
