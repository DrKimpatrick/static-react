import React from 'react';
import '../../styles/about/about.css';

const About = () => {
  return <div className="container about-margin">
    <div className="row">
        <div className="col-xs-10 offset-xs-1 col-md-6">
            <h1 className="heading">ABOUT US</h1>

            <p>
                Creatures Animation is a 3D animation studio based in Uganda,
                East Africa that produces content for the family.

            </p>
            <p>
                We create memorable characters and entertaining yet inspiring stories
                with meaningful values.
            </p>

            <p>
            Our stories are fused with a local touch,as we want to share our unique Ugandan heritage.
            Check out our animated short:A Kalabanda Ate My Homework.
            </p>

        </div>
        <div className="col-xs-10 offset-xs-1 col-md-6 warning">
            <img src={require("../../static/aboutus.jpg")} className="img-responsive img-size" />
        </div>
     </div>
   </div>
}

export default About;
