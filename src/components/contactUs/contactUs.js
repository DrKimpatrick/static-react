import React from 'react';
import '../../styles/contactUs/contactUs.css';

const ContactUs = () => {
  return <div className="container contact-margin">
            <div className="row">
                <div className="col-xs-12">
                <div className="row">
                    <div className="col-xs-12 text-center"><h1 className="heading"><u>CONTACT US</u></h1></div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                        <div className="row">
                            <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                                <div className="contact-div"><h5><span  className="contact-list" id="email"/>team@creatures.africa</h5></div>
                                <div className="contact-div"><h5><span className="contact-list" id="phone" /> +256 784 231 302</h5></div>
                                <div className="contact-div">
                                <p>
                                  <span className="contact-list" id="address" />
                                  Design Hub, Fifth street, Industrial Area,
                                  Kampala, Uganda
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 text-center">
                                <p>
                                Please note that Creatures Animation does not accept unsolicited
                                submissions of creative materials
                                including but not limited to story
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
 };

 export default ContactUs;
