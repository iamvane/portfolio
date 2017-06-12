import React from 'react';
import CTA from './CtaSection';
import { WordpressCommerceData } from './../data/skills';
import Header from './Header';
import TopNavigation from './TopNavigation';
import BottomNavigation from './BottomNavigation';

//App Components

const WordpressCommerce = (props) => {

  return(

    <div className="page-wrapper bg-green text-white">
      <div className="container-wide">
          
          <TopNavigation 
          title={WordpressCommerceData.title}
          prev={WordpressCommerceData.prev}
            next={WordpressCommerceData.next}
            prevlink={WordpressCommerceData.prev.toLowerCase()} 
            nextlink={WordpressCommerceData.next.toLowerCase()} />

        </div>

      <Header title={WordpressCommerceData.title}
        description={WordpressCommerceData.description}
      />
       
      <CTA title={WordpressCommerceData.title}
          role={WordpressCommerceData.role}
          technologies={WordpressCommerceData.technologies}
          ctaUrl = {WordpressCommerceData.cta_url}
        />

      <div className="eco-cannabis-wrap text-center">
        <a href="http://lessmoneystress.net/" rel="noopener noreferrer" target="_blank">
        <img src={require('./../img/less-money-stress-web.png')} alt="less-money-stress" className="eco-cannabis-img"/>
        </a>  
      </div>
       
    
      <BottomNavigation prev={WordpressCommerceData.prev}
          next={WordpressCommerceData.next}
          prevlink={WordpressCommerceData.prev.toLowerCase()} 
          nextlink={WordpressCommerceData.next.toLowerCase()} />

      {/* Write routes here... */}
    </div>
  );
}

export default WordpressCommerce;