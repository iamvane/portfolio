import React from 'react';

import Header from './Header';
import {Link} from 'react-router-dom';

const Home =()=> (
  
  <div className="home page-wrapper">
    
      <Header/>

      <div className="container">
      <h1>Vanessa Charles Thompson</h1>
      <p className="bigger-p">[Javascript] Software Engineer</p>
      <p className="bigger-p cta">Select skill to interact with project</p>
    </div>
    <div className="portfolio text-white">
      
      <Link to="/html">
        <div className="portfolio-link bg-blue col-xs-6 col-md-3">
          HTML
          <div className="portfolio-description">
            <p><strong>Color Me</strong>, a lightweight HTML feature</p>
          </div>
        </div>
      </Link>
     
      <Link to="/css">
        <div className="portfolio-link bg-salmon col-xs-6 col-md-3">
          CSS
            <div className="portfolio-description">
              <p><strong>HoverMe</strong>, a selection of CSS3 powered hover effects</p>
            </div>
        </div>
      </Link>

      <Link to="/php">
        <div className="portfolio-link bg-green col-xs-6 col-md-3 col-md-push-3">
          PHP
          <div className="portfolio-description">
            <p><strong>Eco Packaging Solutions</strong> for cannabis products</p>
          </div>
        </div>
      </Link>

      <Link to="/javascript">
        <div className="portfolio-link bg-light-mustard col-xs-6 col-md-3 col-md-pull-3">
          JavaScript
            <div className="portfolio-description">
                <p><strong>AnalogJs</strong>, a simple analog clock plugin in Javascript</p>
            </div>
        </div>
      </Link>

      <Link to="/ui">
        <div className="portfolio-link bg-grey col-xs-6 col-md-3 col-md-push-6">
            <p className="coral-text">UI</p>
          <div className="portfolio-description">
            <p className="coral-text"><strong>MindRank</strong>, a hackathon winning project</p>
          </div>
        </div>
      </Link>

      <Link to="/redux">
        <div className="portfolio-link bg-salmon col-xs-6 col-md-3 col-md-push-6">
          Redux
           <div className="portfolio-description">
            <p><strong>ReduxGram</strong>, an Instragram-like application built with Redux</p>
          </div>
        </div>
      </Link>

      <Link to="/react">
        <div className="portfolio-link bg-light-mustard col-xs-6 col-md-3 col-md-pull-6">
          React
          <div className="portfolio-description">
            <p><strong>Scoreboard App</strong>, keep track of your scores in any game</p>
          </div>
        </div>
      </Link>

       <Link to="/wordpress">
        <div className="portfolio-link bg-green col-xs-6 col-md-3 col-md-pull-6">
          Wordpress
          <div className="portfolio-description">
            <p>A selection of previous <strong>Wordpress</strong> projects</p>
          </div>
        </div>
      </Link>
   
    </div>
    
  </div>
);

export default Home;