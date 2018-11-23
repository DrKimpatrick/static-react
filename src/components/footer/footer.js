import React from 'react';
import '../../styles/footer/footer.css';

const Footer = () => {
  return <div className="container footer-margin">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4">
                    <div className="parent-icon-row">
                        <div className="icon-row">
                            <div className="icon-column">
                                <i className="fa fa-facebook icon-color" />
                            </div>
                            <div className="icon-column">
                                <i className="fa fa-twitter icon-color" />
                            </div>
                        </div>
                        <div className="icon-row">
                            <div className="icon-column">
                                <i className="fa fa-youtube icon-color" />
                            </div>
                            <div className="icon-column">
                                <i className="fa fa-instagram icon-color" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
              <div className="col-xs-12 col-md-4 col-md-offset-4 copyright">
                  <p>Copyright © Creatures Animation 2018</p>
              </div>
            </div>
         </div>
};

export default Footer;
