import React from 'react';

const Footer = () => {
  return <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-4 col-md-offset-4">
                    <div className="row">
                        <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4  col-md-3 col-md-offset-0">
                            <img src={require("../../static/img1.jpg")} className="img-responsive img-circle" />
                        </div>
                        <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4  col-md-3 col-md-offset-0">
                            <img src={require("../../static/img1.jpg")} className="img-responsive img-circle" />
                        </div>
                        <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4  col-md-3 col-md-offset-0">
                            <img src={require("../../static/img1.jpg")} className="img-responsive img-circle" />
                        </div>
                        <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4  col-md-3 col-md-offset-0">
                            <img src={require("../../static/img1.jpg")} className="img-responsive img-circle" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
              <div className="col-xs-12 col-md-4 col-md-offset-4">
                  <p>Copyright © Creatures Animation 2018</p>
              </div>
            </div>
         </div>
}

export default Footer;
