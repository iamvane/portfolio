import React from 'react';
import { WordpressData } from './../data/skills';
import CTA from './CtaSection';
import Header from './Header';
import BottomNavigation from './BottomNavigation';

//App Components

const Wordpress = () => (
  <div className="page-wrapper bg-salmon text-white">
  	
  	<Header title={WordpressData.title}
        description={WordpressData.description}
      />

	<CTA title={WordpressData.title}
	  technologies={WordpressData.technologies}
	  designTools={WordpressData.design_tools} 
	/>

      <div className="container-wide">
	    
	    <div className="wordpress-wrap container-narrow bigger-p text-center">
	    	<div className="col-md-4">
	    		<a className="wordpress-anchor" href="http://bikinyoga.com/" rel="noopener noreferrer" target="_blank">
		    		<p><strong>UI Design</strong></p>
		    		<img alt="Bikin Yoga" src={require('./../img/bikin-yoga-logo.png')}/>
	    		</a>
	    	</div>
	    	<div className="col-md-4">
	    		<a className="wordpress-anchor" href="http://lessmoneystress.net/" rel="noopener noreferrer" target="_blank">
		    		<p><strong>Blog + E-commerce</strong></p>
		    		<img alt="Less Money Stress" src={require('./../img/less-money-stress.png')}/>
	    		</a>
	    	</div>
	    	<div className="col-md-4">
	    		<a className="wordpress-anchor" href="http://www.ossetttownjuniors.co.uk/" rel="noopener noreferrer" target="_blank">
	    			<p><strong>Modernization</strong></p>
	    			<img alt="Osset Town" src={require('./../img/osset-town.png')}/>
	    		</a>
	    	</div>

		</div>
	</div>

	<BottomNavigation 
    	title={WordpressData.title}
    	prev={WordpressData.prev}
        next={WordpressData.next}
        prevlink={WordpressData.prev.toLowerCase()} 
        nextlink={WordpressData.next.toLowerCase()} />
	
    {/* Write routes here... */}
  </div>
);

export default Wordpress;