import React, { Component } from 'react';

import Header from './Header';
import {Link} from 'react-router-dom';

class Home extends Component {    
  
  render() {
    return (
      <div className="home page-wrapper">
         
        <div className="container">
          <Header/>
          <h1>Vanessa Charles Thompson</h1>
          <p className="bigger-p">Full Stack [Javascript] Developer</p>
          <p className="text-center bigger-p cta">Select skill to interact with project</p>
        </div>
        <div className="portfolio text-white">
          
          <Link to="/portfolio/html">
            <div className="portfolio-link bg-blue col-xs-6 col-md-3">
              HTML
              <div className="portfolio-description">
                <p><strong>Test</strong> your HTML in 5 questions</p>
              </div>
            </div>
          </Link>
         
          <Link to="/portfolio/css">
            <div className="portfolio-link bg-salmon col-xs-6 col-md-3">
              CSS
                <div className="portfolio-description">
                  <p><strong>HoverMe</strong> a selection of CSS3 powered hover effects</p>
                </div>
            </div>
          </Link>

          <Link to="/portfolio/php">
            <div className="portfolio-link bg-green col-xs-6 col-md-3 col-md-push-3">
              PHP
              <div className="portfolio-description">
                <p><strong>Eco Packaging Solutions</strong> for cannabis products</p>
              </div>
            </div>
          </Link>

          <Link to="/portfolio/javascript">
            <div className="portfolio-link bg-light-mustard col-xs-6 col-md-3 col-md-pull-3">
              JavaScript
                <div className="portfolio-description">
                    <p><strong>HoursJs</strong> Analog clock; Use as a timer, calendar, business hours</p>
                </div>
            </div>
          </Link>

          <Link to="/portfolio/react">
            <div className="portfolio-link bg-light-mustard col-xs-6 col-md-3">
              React
              <div className="portfolio-description">
                <p><strong>Scoreboard App</strong> Keep track of your scores in any game</p>
              </div>
            </div>
          </Link>

          <Link to="/portfolio/mongo">
            <div className="portfolio-link bg-green col-xs-6 col-md-3">
              Mongo
              <div className="portfolio-description">
                <p>Create your first MongoDB <strong>collection</strong></p>
              </div>
            </div>
          </Link>

          <Link to="/portfolio/ui">
            <div className="portfolio-link bg-grey col-xs-6 col-md-3">
                <p className="coral-text">UI</p>
              <div className="portfolio-description">
                <p className="coral-text"><strong>MindRank</strong> a hackathon winning project.</p>
              </div>
            </div>
          </Link>

          <Link to="/portfolio/wordpress">
            <div className="portfolio-link bg-salmon col-xs-6 col-md-3">
              Wordpress
               <div className="portfolio-description">
                <p><strong>A collection</strong> of recent Wordpress projects</p>
              </div>
            </div>
          </Link>

        </div>
        
      </div>
    );
  }
}

export default Home;