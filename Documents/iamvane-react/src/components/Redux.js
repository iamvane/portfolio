import React from 'react';
import { ReduxgramData } from './../data/skills';
import CTA from './CtaSection';
import Header from './Header';
import TopNavigation from './TopNavigation';
import BottomNavigation from './BottomNavigation';

//App Components

const Redux = () => (
  <div className="page-wrapper bg-salmon text-white">
  		<div className="container-wide">
          
          <TopNavigation 
          title={ReduxgramData.title}
          prev={ReduxgramData.prev}
            next={ReduxgramData.next}
            prevlink={ReduxgramData.prev.toLowerCase()} 
            nextlink={ReduxgramData.next.toLowerCase()} />

        </div>

     <Header title={ReduxgramData.title}
        description={ReduxgramData.description}
      />
       
      <CTA title={ReduxgramData.title}
          role={ReduxgramData.role}
          technologies={ReduxgramData.technologies}
          ctaUrl = {ReduxgramData.cta_url}
        />

      <div className="eco-cannabis-wrap text-center">
        <a href="https://github.com/iamvane/ReduxGram" rel="noopener noreferrer" target="_blank">
        <img src={require('./../img/Reduxgram.png')} alt="Reduxgram" className="eco-cannabis-img"/>
        </a>  
      </div>
    
      <BottomNavigation prev={ReduxgramData.prev}
          next={ReduxgramData.next}
          prevlink={ReduxgramData.prev.toLowerCase()} 
          nextlink={ReduxgramData.next.toLowerCase()} />
  	</div>
);

export default Redux;