import React, { Component } from 'react';
import { HtmlData } from './../data/skills';
import CTA from './CtaSection';
import Header from './Header';
import TopNavigation from './TopNavigation';
import BottomNavigation from './BottomNavigation';

//App Components

class Html extends Component {  
  constructor(props) {
    super(props);
    this.state = {roleText: '', link:'', error:''};
    // This line is important!
    this.colorMe = this.colorMe.bind(this);
  }


  colorMe() {
      var h1 = document.querySelector("h1");
      h1.style.color = document.querySelector("#color-me").value;
    }

  render() {
    return (
      <div className="bg-blue page-wrapper text-white">
      	
         <div className="container-wide">
          <TopNavigation 
          title={HtmlData.title}
          prev={HtmlData.prev}
            next={HtmlData.next}
            prevlink={HtmlData.prev.toLowerCase()} 
            nextlink={HtmlData.next.toLowerCase()} />

         <Header title={HtmlData.title}
            description={HtmlData.description}
          />
          </div>

          <CTA title={HtmlData.title}
          technologies={HtmlData.technologies}
          designTools={HtmlData.design_tools} 
          ctaUrl = {HtmlData.cta_url}
          />
          <br/>
          <br/>
          <div className="container-wide text-center">
            <span className="hide-mobile">Choose a color to color the below text</span> 
            <span className="hide-desktop">Type in a color to color the below text</span>
           <input id="color-me" type="color" onChange={this.colorMe}/>
            <h1 className="color-me-heading">COLOR ME !</h1>
          </div>
          

        <BottomNavigation 
          title={HtmlData.title}
          prev={HtmlData.prev}
            next={HtmlData.next}
            prevlink={HtmlData.prev.toLowerCase()} 
            nextlink={HtmlData.next.toLowerCase()} />

        {/* Write routes here... */}
      </div>
    );
  }
}



export default Html;