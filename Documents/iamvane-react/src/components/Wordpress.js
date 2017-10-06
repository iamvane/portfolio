import React from 'react';
import CTA from './CtaSection';
import { WordpressData } from './../data/skills';
import Header from './Header';
import TopNavigation from './TopNavigation';
import BottomNavigation from './BottomNavigation';

//App Components

const Wordpress = (props) => {

  return(

    <div className="page-wrapper bg-green text-white">
      <div className="container-wide">
          
          <TopNavigation 
          title={WordpressData.title}
          prev={WordpressData.prev}
            next={WordpressData.next}
            prevlink={WordpressData.prev.toLowerCase()} 
            nextlink={WordpressData.next.toLowerCase()} />

        </div>

      <Header title={WordpressData.title}
        description={WordpressData.description}
      />
       
      <CTA title={WordpressData.title}
          role={WordpressData.role}
          technologies={WordpressData.technologies}
          ctaUrl = {WordpressData.cta_url}
        />

      <div className="text-center wordpress-wrap">
        <div className="col-xs-4 project-wrapper">
          <a href="http://lessmoneystress.net/" rel="noopener noreferrer" target="_blank">
            <img className="wordpress-img" alt="Less Monet Stress" src={require('./../img/less-money-stress.png')}/>
            <p>Financial coaching services to people who are experiencing money issues and financial stress.</p>
            <span className="categories">Blog, E-commerce, UI Design</span>
          </a>
         
        </div>
        
        <div className="col-xs-4 project-wrapper">
          <a href="http://bikinyoga.com/" rel="noopener noreferrer" target="_blank">
            <img className="wordpress-img" alt="Bikin Yoga" src={require('./../img/bikin-yoga-logo.png')}/>
            <p>Bikin means celebration in the langugage of various religious cults of South America and the Caribbean.</p>
            <span className="categories">Business Website, UI Design</span>
          </a>
        </div>
       
        <div className="col-xs-4 project-wrapper">
          <a href="http://www.ossetttownjuniors.co.uk/" rel="noopener noreferrer" target="_blank">
            <img className="wordpress-img" alt="Ossett Town" src={require('./../img/ossett-town-logo.png')}/>
            <p>A football club that provides opportunities for boys and girls in West Yorkshire, United Kingdom.</p>
            <span className="categories">Modernization, Deisgn, Development</span>
          </a>

        </div>
         
      </div>
       
    
      <BottomNavigation prev={WordpressData.prev}
          next={WordpressData.next}
          prevlink={WordpressData.prev.toLowerCase()} 
          nextlink={WordpressData.next.toLowerCase()} />

      {/* Write routes here... */}
    </div>
  );
}

export default Wordpress;