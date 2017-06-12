import React from 'react';
import { UiData } from './../data/skills';
import CTA from './CtaSection';
import Header from './Header';
import TopNavigation from './TopNavigation';
import BottomNavigation from './BottomNavigation';

//App Components

const Ui = () => (
  <div className="page-wrapper bg-grey">
    
    <div className="container-wide">
          
          <TopNavigation 
          title={UiData.title}
          prev={UiData.prev}
            next={UiData.next}
            prevlink={UiData.prev.toLowerCase()} 
            nextlink={UiData.next.toLowerCase()} />

        </div>
    
    <Header title={UiData.title}
        description={UiData.description}
        role={UiData.role}
        technologies={UiData.technologies} 
      />

      <CTA title={UiData.title}
          technologies={UiData.technologies}
          ctaUrl = {UiData.cta_url}
        />

	<div className="container-wide">
       
	  <a className="mindrank-a" href="https://xd.adobe.com/view/3f320ddf-4b92-40f4-8f67-f44b557909fb/" rel="noopener noreferrer" target="_blank">
        <div className="mindrank-wrap container-narrow">
        	<div className="col-xs-3 mindrank">
        		<img alt="mindrank-1" src={require('./../img/mindrank-1.png')}/>
        	</div>
        	 <div className="col-xs-3 mindrank">
        		<img alt="mindrank-2" src={require('./../img/mindrank-2.png')}/>
        	</div>
        	 <div className="col-xs-3 mindrank">
        		<img  alt="mindrank-3" src={require('./../img/mindrank-3.png')}/>
        	</div>
        	 <div className="col-xs-3 mindrank">
        		<img alt="mindrank-4" src={require('./../img/mindrank-4.png')}/>
        	</div>
        </div>
      </a>
     
    </div>

    <BottomNavigation 
    	title={UiData.title}
    	prev={UiData.prev}
        next={UiData.next}
        prevlink={UiData.prev.toLowerCase()} 
        nextlink={UiData.next.toLowerCase()} />

  </div>
);

export default Ui;