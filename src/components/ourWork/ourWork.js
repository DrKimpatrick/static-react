import React from 'react';
import '../../styles/ourWork/ourWork.css';

const OurWork = () => {
  return <div className="container">
            <div className="row">
                <div className="col-xs-8 col-xs-offset-2 text-center">
                <div className="row">
                    <div className="col-xs-12"><center><h1 className="heading">OUR WORK</h1></center></div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="row work-row-margin">
                            <div className="col-xs-12 col-sm-4">
                                <img src={require("../../static/img2.jpg")} className="img-responsive" />
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <img src={require("../../static/img2.jpg")} className="img-responsive" />
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <img src={require("../../static/img2.jpg")} className="img-responsive" />
                            </div>
                        </div>

                        <div className="row work-row-margin">
                            <div className="col-xs-12 col-sm-4">
                                <img src={require("../../static/img2.jpg")} className="img-responsive" />
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <img src={require("../../static/img2.jpg")} className="img-responsive" />
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <img src={require("../../static/img2.jpg")} className="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
         </div>
}

export default OurWork;