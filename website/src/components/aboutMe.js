import React from 'react';
import aboutMeData from '../data/aboutme.json';

const AboutMe = () => (
  <div>
    <h5>About Me</h5>
    <p className="aboutMe">>{aboutMeData.data}</p>
  </div>
);

export default AboutMe;
