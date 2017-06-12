import React from 'react';
import { JavascriptData } from './../data/skills';
import CTA from './CtaSection';
import Header from './Header';
import TopNavigation from './TopNavigation';
import BottomNavigation from './BottomNavigation';
import './../css/world-time.css';

//App Components

const Javascript = () => {

  return(
  
    <div className="page-wrapper bg-light-mustard text-white">
      
      <div className="container-wide">
          
          <TopNavigation 
          title={JavascriptData.title}
          prev={JavascriptData.prev}
            next={JavascriptData.next}
            prevlink={JavascriptData.prev.toLowerCase()} 
            nextlink={JavascriptData.next.toLowerCase()} />

        </div>

      <Header title={JavascriptData.title}
          description={JavascriptData.description}
        />

        <CTA title={JavascriptData.title}
            technologies={JavascriptData.technologies}
            projects={JavascriptData.projects}
            projectsLink={JavascriptData.projectsLink}
          />

      <BottomNavigation 
        title={JavascriptData.title}
        prev={JavascriptData.prev}
        next={JavascriptData.next}
        prevlink={JavascriptData.prev.toLowerCase()} 
        nextlink={JavascriptData.next.toLowerCase()} />
       
      <div className="text-center bigger-p" id="time"></div>
       <div id="clock">
        <div className="num num1"><div>1</div></div>
        <div className="num num2"><div>2</div></div>
        <div className="num num3"><div>3</div></div>
        <div className="num num4"><div>4</div></div>
        <div className="num num5"><div>5</div></div>
        <div className="num num6"><div>6</div></div>
        <div className="num num7"><div>7</div></div>
        <div className="num num8"><div>8</div></div>
        <div className="num num9"><div>9</div></div>
        <div className="num num10"><div>10</div></div>
        <div className="num num11"><div>11</div></div>
        <div className="num num12"><div>12</div></div>
        <div id="hr-hand"></div>
        <div id="min-hand"></div>
        <div id="sec-hand"></div>
       </div>

    {/* Write routes here... */}
  </div>
 

    

  );
}

export default Javascript;