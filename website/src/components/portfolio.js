import React from 'react';

const Portfolio = () => (
  <div className="component">
    <h5>Projects</h5>
    <div className="portfolioList">
      <a href="https://lets-talk231.herokuapp.com/" className="portfolioProjectLink">
          <img className="portfolioProjectImg" src="extras/LetsTalkLogo.png" alt="LetsTalk"></img>
          <div className="overlay">
            <div className="overlayMsg">Visit Project Website</div>
          </div>
      </a>
      <br></br>
      <a href="https://lets-talk231.herokuapp.com/" className="portfolioProjectLink">
          <img className="portfolioProjectImg" src="extras/LetsTalkLogo.png" alt="LetsTalk"></img>
          <div className="overlay">
            <div className="overlayMsg">Visit Project Website</div>
          </div>
      </a>
      <br></br>
      <a href="https://lets-talk231.herokuapp.com/" className="portfolioProjectLink">
          <img className="portfolioProjectImg" src="extras/LetsTalkLogo.png" alt="LetsTalk"></img>
          <div className="overlay">
            <div className="overlayMsg">Visit Project Website</div>
          </div>
      </a>
      <br></br>
    </div>
  </div>
);

export default Portfolio;
