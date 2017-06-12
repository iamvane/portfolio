import React from 'react';
import CTA from './CtaSection';
import { PhpData } from './../data/skills';
import Header from './Header';
import TopNavigation from './TopNavigation';
import BottomNavigation from './BottomNavigation';

//App Components

const Php = (props) => {

  return(

    <div className="page-wrapper bg-green text-white">
       
       <div className="container-wide">
          
          <TopNavigation 
          title={PhpData.title}
          prev={PhpData.prev}
            next={PhpData.next}
            prevlink={PhpData.prev.toLowerCase()} 
            nextlink={PhpData.next.toLowerCase()} />

        </div>

      <Header title={PhpData.title}
        description={PhpData.description}
      />
  	   
      <CTA title={PhpData.title}
          role={PhpData.role}
          technologies={PhpData.technologies}
          ctaUrl = {PhpData.cta_url}
        />

  	  <div className="eco-cannabis-wrap">
  	  	<a href="https://www.ecopackagingsolutions.com/" rel="noopener noreferrer" target="_blank">
   			<img src={require('./../img/eco-cannabis.png')} alt="eco-cannabis" className="eco-cannabis-img"/>
    		</a>	
  		</div>
       
    
     	<BottomNavigation prev={PhpData.prev}
          next={PhpData.next}
          prevlink={PhpData.prev.toLowerCase()} 
          nextlink={PhpData.next.toLowerCase()} />

      {/* Write routes here... */}
    </div>
  );
}

export default Php;