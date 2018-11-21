import React from 'react';
import '../../styles/contactUs/contactUs.css';

const ContactUs = () => {
  return <div className="container">
            <div className="row">
                <div className="col-xs-12">
                <div className="row">
                    <div className="col-xs-12"><center><h1 className="heading"><u>CONTACT US</u></h1></center></div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                        <div className="row work-row-margin">
                            <div className="col-xs-12 col-sm-4 col-sm-offset-4">
                                <div className="contact-div"><h5><span  className="contact-list" id="email"></span>team@creatures.africa</h5></div>
                                <div className="contact-div"><h5><span className="contact-list" id="phone"></span> +256 784 231 302</h5></div>
                                <div className="contact-div">
                                <p>
                                  <span className="contact-list" id="address"></span>
                                  Design Hub, Fifth street, Industrial Area,
                                  Kampala, Uganda
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-sm-8 col-sm-offset-2 text-center">
                                <p>
                                Please note that Creatures Animation does not accept unsolicited
                                submissions of creative materials   <br/>
                                <br/>including but not limited to story
                                ideas, scripts or original artwork. Please do not send us your
                                creative materials. We will not be able to consider them.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
         </div>
 }

 export default ContactUs;
