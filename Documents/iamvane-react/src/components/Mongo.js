import React from 'react';
import { MongoData } from './../data/skills';
import CTA from './CtaSection';
import Header from './Header';
import BottomNavigation from './BottomNavigation';

//App Components

const Mongo = () => (
  <div className="page-wrapper bg-green text-white">
     
     <Header title={MongoData.title}
        description={MongoData.description}
      />

      <CTA title={MongoData.title}
          technologies={MongoData.technologies}
        />

    <BottomNavigation 
      title={MongoData.title}
      prev={MongoData.prev}
        next={MongoData.next}
        prevlink={MongoData.prev.toLowerCase()} 
        nextlink={MongoData.next.toLowerCase()} />

    {/* Write routes here... */}
  </div>
);

export default Mongo;