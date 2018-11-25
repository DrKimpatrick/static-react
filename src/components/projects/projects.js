import React from 'react';
import '../../styles/projects/projects.css';

const Projects = () => {
  return <div className="container" id="projects">
  <div className="row">
      <div className="col-xs-12">
          <h1 className="heading"><u>PROJECTS</u></h1>
      </div>
  </div>
  <div className="row">
      <div className="col-xs-12 col-md-6">
        <div align="center" className="embed-responsive embed-responsive-16by9">
          <video autoplay loop className="embed-responsive-item">
              <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="col-xs-12 col-md-6">
        <h3 className="akalabanda-heading"><span id="pipe" />A KALABANDA ATE MY HOMEWORK</h3>
        <p>
            This is the first official project from Creatures Animation.
            The story brings a twist to the infamous excuse "a dog ate my homework".
        </p>
        <p>
            A Kalabanda is a mythical creature that is said to haunt schools in Uganda.Tendo,
            a pupil shows up to class one day without homework -claiming that a "Kalabanda" ate it.
            Whod believe such a lame excuse? No-one! How will Tendo prove his story?
        </p>
        <p>
            Does this mythical creature really exist? <br/>
            <b>Starring – Martha “Kay” Kagimba, Patrick “Salvado” Idringi, Omara Daniel & Faith Kisa</b>
        </p>
      </div>
  </div>
</div>
};

export default Projects;
