import React from 'react';
import Header from './Header';
import CTA from './CtaSection';
import { ReactData } from './../data/skills';
import Scoreboard from './Scoreboard';
import TopNavigation from './TopNavigation';
import BottomNavigation from './BottomNavigation';
import './../css/scoreboard.css';

//App Components

const ReactLink = () => (
  <div className="page-wrapper bg-light-mustard text-white">
  	
  	<div className="container-wide">
          
          <TopNavigation 
          title={ReactData.title}
          prev={ReactData.prev}
            next={ReactData.next}
            prevlink={ReactData.prev.toLowerCase()} 
            nextlink={ReactData.next.toLowerCase()} />

        </div>

  	<Header title={ReactData.title}
		description={ReactData.description}
	/>
			
	<CTA title={ReactData.title}
		role={ReactData.role}
		technologies={ReactData.technologies}
		ctaUrl = {ReactData.cta_url}
	/>
	
	<div className="container-wide">

	  	<Scoreboard/>
     
    </div>
 	
 	<BottomNavigation prev={ReactData.prev}
          next={ReactData.next}
          prevlink={ReactData.prev.toLowerCase()} 
          nextlink={ReactData.next.toLowerCase()} />

    {/* Write routes here... */}
  </div>
);

export default ReactLink;