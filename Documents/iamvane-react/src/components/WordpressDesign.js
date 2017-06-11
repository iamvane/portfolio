import React from 'react';
import { WordpressDesignData } from './../data/skills';
import CTA from './CtaSection';
import Header from './Header';
import BottomNavigation from './BottomNavigation';

//App Components

const WordpressDesign = () => (
  <div className="page-wrapper bg-salmon text-white">

     <Header title={WordpressDesignData.title}
        description={WordpressDesignData.description}
      />
       
      <CTA title={WordpressDesignData.title}
          role={WordpressDesignData.role}
          technologies={WordpressDesignData.technologies}
          ctaUrl = {WordpressDesignData.cta_url}
        />

      <div className="eco-cannabis-wrap text-center">
        <a href="http://bikinyoga.com/" rel="noopener noreferrer" target="_blank">
        <img src={require('./../img/bikin-yoga.png')} alt="bikin-yoga" className="eco-cannabis-img"/>
        </a>  
      </div>
    
      <BottomNavigation prev={WordpressDesignData.prev}
          next={WordpressDesignData.next}
          prevlink={WordpressDesignData.prev.toLowerCase()} 
          nextlink={WordpressDesignData.next.toLowerCase()} />
  	</div>
);

export default WordpressDesign;