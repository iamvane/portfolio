import React, { Component } from 'react';
import { HtmlData } from './../data/skills';
import CTA from './CtaSection';
import Header from './Header';
import BottomNavigation from './BottomNavigation';

//App Components

class Html extends Component {  
  constructor(props) {
    super(props);
    this.state = {roleText: '', link:'', error:''};
    // This line is important!
    this.showHex = this.showHex.bind(this);
  }


  showHex() {
      var h1 = document.querySelector("h1");
      h1.style.color = document.querySelector("#color_picker").value;
    }

  render() {
    return (
      <div className="bg-blue page-wrapper text-white">
      	 
         <Header title={HtmlData.title}
            description={HtmlData.description}
          />
          
          <CTA title={HtmlData.title}
          technologies={HtmlData.technologies}
          designTools={HtmlData.design_tools} 
          />

          <div className="container-wide text-center">
            Choose a color to color the below text <input id="color_picker" type="color" onChange={this.showHex}/>
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