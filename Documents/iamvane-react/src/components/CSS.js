import React from 'react';
import { CssData } from './../data/skills';
import TopNavigation from './TopNavigation';
import BottomNavigation from './BottomNavigation';
import CTA from './CtaSection';
import Header from './Header';
import './../css/hover-me.css';

//App Components

const CSS = (props) => {
	function handleClick(e) {
	    e.preventDefault();
	  }
  
  return (

    <div className={"page-wrapper " + (CssData.title === 'CSS' ? 'bg-salmon' : '')}>
		
		<div className="container-wide">
          
          <TopNavigation 
          title={CssData.title}
          prev={CssData.prev}
            next={CssData.next}
            prevlink={CssData.prev.toLowerCase()} 
            nextlink={CssData.next.toLowerCase()} />

        </div>

		<div className="text-white">
  			
  			<Header title={CssData.title}
  				description={CssData.description}
  				cta_img = {CssData.cta_mg} 
  			/>
  			
  			<CTA title={CssData.title}
  				technologies={CssData.technologies}
  				cta_img = {CssData.cta_img}
  			/>
  		
  		</div>

  		<div className="container-narrower">
		   
		    <div className="hover-me big-p text-center">
		    	
			    <p className="text-white bigger-p">2D Transition</p>

				<a href="" onClick={handleClick} className="shake-me">Shake Me Horiz</a>
				<a href="" onClick={handleClick} className="shake-me-top">Shake Me Vert</a>
				<a href="" onClick={handleClick} className="grow-me">Grow Me</a>
				<a href="" onClick={handleClick} className="shrink-me">Shrink Me</a>
				<a href="" onClick={handleClick} className="pulse-me">Pulse Me</a>
				<a href="" onClick={handleClick} className="rotate-me">Rotate Me</a>
				<a href="" onClick={handleClick} className="skew-me">Skew Me</a>
				<a href="" onClick={handleClick} className="disappear-me">Disappear Me</a>

				<p className="text-white bigger-p hide-mobile">Background Transition</p>

				<a href="" onClick={handleClick} className="sweep-me-right">Sweep Me Right</a>
				<a href="" onClick={handleClick} className="sweep-me-half">Sweep Me Some</a>
				<a href="" onClick={handleClick} className="sweep-me-top">Sweep Me Top</a>
				<a href="" onClick={handleClick} className="sweep-me-radial">Sweep Radial</a>
				<a href="" onClick={handleClick} className="fade-me">Fade Me</a>
				<a href="" onClick={handleClick} className="color-me">Color Me</a>
				<a href="" onClick={handleClick} className="flash-me">Flash Me</a>
				<a href="" onClick={handleClick} className="backgroundless-me">No Me</a>
			
			</div>
		
		</div>

  		<BottomNavigation prev={CssData.prev}
  			next={CssData.next}
  			prevlink={CssData.prev.toLowerCase()} 
  			nextlink={CssData.next.toLowerCase()} />

    </div>
  );
}

export default CSS;