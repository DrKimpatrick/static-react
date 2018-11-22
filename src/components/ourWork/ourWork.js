import React from 'react';
import '../../styles/ourWork/ourWork.css';

const OurWork = () => {
  return <div className="container">
            <div className="row">
                <div className="col-xs-8 col-xs-offset-2 text-center">
                <div className="row">
                    <div className="col-xs-12 text-center"><h1 className="heading"><u>OUR WORK</u></h1></div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="row work-row-margin">
                            <div className="col-xs-12 col-sm-4">
                                <img src={require("../../static/img2.jpg")} alt={"image"} className="img-responsive" />
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <img src={require("../../static/img2.jpg")} alt={"image"} className="img-responsive" />
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <img src={require("../../static/img2.jpg")} alt={"image"} className="img-responsive" />
                            </div>
                        </div>

                        <div className="row work-row-margin">
                            <div className="col-xs-12 col-sm-4">
                                <img src={require("../../static/img2.jpg")} alt={"image"} className="img-responsive" />
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <img src={require("../../static/img2.jpg")} alt={"image"} className="img-responsive" />
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <img src={require("../../static/img2.jpg")} alt={"image"} className="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
         </div>
};

export default OurWork;
