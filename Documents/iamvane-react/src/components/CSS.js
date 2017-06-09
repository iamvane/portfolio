import React from 'react';
import { CssData } from './../data/skills';
import BottomNavigation from './BottomNavigation';
import CTA from './CtaSection';
import Header from './Header';
import './../css/hover-me.css';

//App Components

const CSS = (props) => {
  return (

    <div className={"page-wrapper " + (CssData.title === 'CSS' ? 'bg-salmon' : '')}>
		
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

				<a href="" className="shake-me">Shake Me Horiz</a>
				<a href="" className="shake-me-top">Shake Me Vert</a>
				<a href="" className="grow-me">Grow Me</a>
				<a href="" className="shrink-me">Shrink Me</a>
				<a href="" className="pulse-me">Pulse Me</a>
				<a href="" className="rotate-me">Rotate Me</a>
				<a href="" className="skew-me">Skew Me</a>
				<a href="" className="disappear-me">Disappear Me</a>

				<p className="text-white bigger-p">Background Transition</p>

				<a href="" className="sweep-me-right">Sweep Me Right</a>
				<a href="" className="sweep-me-half">Sweep Me Half</a>
				<a href="" className="sweep-me-top">Sweep Me Top</a>
				<a href="" className="sweep-me-radial">Sweep Me Radial</a>
				<a href="" className="fade-me">Fade Me</a>
				<a href="" className="color-me">Color Me</a>
				<a href="" className="flash-me">Flash Me</a>
				<a href="" className="backgroundless-me">No Me</a>
			
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