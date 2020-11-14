import React from 'react';
import aboutMeData from '../data/aboutme.json';

const AboutMe = () => (
  <div>
    <p>{aboutMeData.data}</p>
  </div>
);

export default AboutMe;
