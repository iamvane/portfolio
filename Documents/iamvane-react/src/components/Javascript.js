import React from 'react';
import { JavascriptData } from './../data/skills';
import CTA from './CtaSection';
import Header from './Header';
import BottomNavigation from './BottomNavigation';

//App Components

const Javascript = () => (
  <div className="page-wrapper bg-light-mustard text-white">
    
    <Header title={JavascriptData.title}
        description={JavascriptData.description}
      />

      <CTA title={JavascriptData.title}
          technologies={JavascriptData.technologies}
        />

    <BottomNavigation 
      title={JavascriptData.title}
      prev={JavascriptData.prev}
        next={JavascriptData.next}
        prevlink={JavascriptData.prev.toLowerCase()} 
        nextlink={JavascriptData.next.toLowerCase()} />
     
    {/* Write routes here... */}
  </div>
);

export default Javascript;