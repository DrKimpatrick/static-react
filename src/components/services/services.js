import React from 'react';
import '../../styles/services/services.css';

const Services = () => {
  return < div className="container services-margin">
              <div className="row">
                  <div className="col-xs-8 col-xs-offset-2 text-center">
                  <div className="row services-header">
                      <div className="col-xs-12"><center><h1 className="heading">SERVICES</h1></center></div>
                  </div>
                  <div className="row">
                      <div className="col-xs-4 col-xs-offset-4 col-sm-3 col-sm-offset-0">
                          <img src={require("../../static/img1.jpg")} className="img-responsive"/>
                          <div className="service-text-area">
                            <h5>MotionGraphics</h5>
                            <p>
                            Widely used for titles,
                              logos, TV, idents
                              and ads etc.
                            </p>
                          </div>
                      </div>

                      <div className="col-xs-4 col-xs-offset-4 col-sm-3 col-sm-offset-0">
                          <img src={require("../../static/img1.jpg")} className="img-responsive"/>
                          <div className="service-text-area">
                            <h5>ExplainerVideos</h5>
                            <p>Explain your products &
                            how they can be used
                            using white board or
                            2D animation</p>
                          </div>
                      </div>

                      <div className="col-xs-4 col-xs-offset-4 col-sm-3 col-sm-offset-0">
                          <img src={require("../../static/img1.jpg")} className="img-responsive"/>
                          <div className="service-text-area">
                            <h5>2D Animation</h5>
                            <p>Art comes to life
                              as drawings start to
                              move
                            </p>
                          </div>
                      </div>

                      <div className="col-xs-4 col-xs-offset-4 col-sm-3 col-sm-offset-0">
                          <img src={require("../../static/img1.jpg")} className="img-responsive"/>
                          <div className="service-text-area">
                            <h5>3D Animation</h5>
                            <p>
                              Add more life to your
                              products with
                              3D animation
                            </p>
                          </div>
                      </div>
                  </div>
                  </div>
              </div>
         </div>
}

export default Services;
