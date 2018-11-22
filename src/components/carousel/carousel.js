import React from 'react';
import '../../styles/carousel/carousel.css'

const Carousel = () => {
  return <div className="row">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">

                  {/*Wrapper for slides*/}
                  <div className="carousel-inner">
                      <div className="item active">
                          <img src={require("../../static/Kalabanda.jpg")} alt={""} className="img-responsive img-size" />
                      </div>

                      <div className="item">
                          <img src={require("../../static/Kalabanda.jpg")} alt={""} className="img-responsive img-size" />
                      </div>

                      <div className="item">
                          <img src={require("../../static/Kalabanda.jpg")} alt={""} className="img-responsive img-size" />
                      </div>
                  </div>

                  {/*Left and right controls*/}
                  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                      <span className="glyphicon glyphicon-chevron-left" />
                      <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href="#myCarousel" data-slide="next">
                      <span className="glyphicon glyphicon-chevron-right" />
                      <span className="sr-only">Next</span>
                  </a>
              </div>

         </div>
};

export default Carousel;
