import React from 'react';
import '../../styles/services/services.css';

const Services = () => {
  return < div className="container services-margin">
              <div className="row">
                  <div className="col-xs-12 text-center services-header"><h1 className="heading"><u>SERVICES</u></h1></div>
              </div>
              <div className="row">
                  <div className="col-xs-12 col-sm-10 col-sm-offset-1 text-center">
                  <div className="row">
                      <div className="col-xs-6 col-xs-offset-3 col-sm-3 col-sm-offset-0">
                          <img src={require("../../static/img1.jpg")} alt={"MotionGraphics"} className="img-responsive"/>
                          <div className="service-text-area">
                            <h5>MotionGraphics</h5>
                            <p>
                            Widely used for titles,
                              logos, TV, idents
                              and ads etc.
                            </p>
                          </div>
                      </div>

                      <div className="col-xs-6 col-xs-offset-3 col-sm-3 col-sm-offset-0">
                          <img src={require("../../static/img1.jpg")} alt={"explainer video"} className="img-responsive"/>
                          <div className="service-text-area">
                            <h5>ExplainerVideos</h5>
                            <p>Explain your products &
                            how they can be used
                            using white board or
                            2D animation</p>
                          </div>
                      </div>

                      <div className="col-xs-6 col-xs-offset-3 col-sm-3 col-sm-offset-0">
                          <img src={require("../../static/img1.jpg")} alt={"2D animation"} className="img-responsive"/>
                          <div className="service-text-area">
                            <h5>2D Animation</h5>
                            <p>Art comes to life
                              as drawings start to
                              move
                            </p>
                          </div>
                      </div>

                      <div className="col-xs-6 col-xs-offset-3 col-sm-3 col-sm-offset-0">
                          <img src={require("../../static/img1.jpg")} alt={"3D animation"} className="img-responsive"/>
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
};

export default Services;
