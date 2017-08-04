import React from 'react';
import CTA from './CtaSection';
import { WordpressCommerceData } from './../data/skills';
import Header from './Header';
import TopNavigation from './TopNavigation';
import BottomNavigation from './BottomNavigation';

//App Components

const WordpressCommerce = (props) => {

  return(

    <div className="page-wrapper bg-green text-white">
      <div className="container-wide">
          
          <TopNavigation 
          title={WordpressCommerceData.title}
          prev={WordpressCommerceData.prev}
            next={WordpressCommerceData.next}
            prevlink={WordpressCommerceData.prev.toLowerCase()} 
            nextlink={WordpressCommerceData.next.toLowerCase()} />

        </div>

      <Header title={WordpressCommerceData.title}
        description={WordpressCommerceData.description}
      />
       
      <CTA title={WordpressCommerceData.title}
          role={WordpressCommerceData.role}
          technologies={WordpressCommerceData.technologies}
          ctaUrl = {WordpressCommerceData.cta_url}
        />

      <div className="text-center wordpress-wrap">
        <div className="col-xs-4 project-wrapper">
          <a href="http://lessmoneystress.net/" rel="noopener noreferrer" target="_blank">
            <img className="wordpress-img" src={require('./../img/less-money-stress.png')}/>
            <p>Financial coaching services to people who are experiencing money issues and financial stress.</p>
            <span className="categories">-Blog, E-commerce, UI Design</span>
          </a>
         
        </div>
        
        <div className="col-xs-4 project-wrapper">
          <a href="http://bikinyoga.com/" rel="noopener noreferrer" target="_blank">
            <img className="wordpress-img" src={require('./../img/bikin-yoga-logo.png')}/>
            <p>Bikin means celebration in the langugage of various religious cults of South America and the Caribbean.</p>
            <span className="categories">-Business Website, UI Design</span>
          </a>
        </div>
       
        <div className="col-xs-4 project-wrapper">
          <a href="http://www.ossetttownjuniors.co.uk/" rel="noopener noreferrer" target="_blank">
            <img className="wordpress-img" src={require('./../img/ossett-town-logo.png')}/>
            <p>A football club that provides opportunities for boys and girls in West Yorkshire, United Kingdom.</p>
            <span className="categories">-Modernization, Deisgn, Development</span>
          </a>

        </div>
         
      </div>
       
    
      <BottomNavigation prev={WordpressCommerceData.prev}
          next={WordpressCommerceData.next}
          prevlink={WordpressCommerceData.prev.toLowerCase()} 
          nextlink={WordpressCommerceData.next.toLowerCase()} />

      {/* Write routes here... */}
    </div>
  );
}

export default WordpressCommerce;