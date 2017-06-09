import React from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

//App Components

const Html = () => (
  <div className="bg-blue page-wrapper text-white">
  	 <div className="container">
          <Header/>
          <div className="text-center single-heading">
	          <h2>HTML</h2>
	          <p className="bigger-p">Test your HTML</p>
          </div>
          <div className="col-xs-12 col-md-6 bigger-p">
          	<br/>
          	<br/>
          	<br/>
          	<p>HTML is the language we use to structure web pages.</p>
          	<p>Almost every website uses HTML like Pinterest and Twitter.</p>
          	<p>HTML is simple a set of tags we use to tell the browser how our page is arranged.</p>
          	<p>We do this by surronding the content of our web pages iwth this HTML tags.</p>
          </div>
          <div className="col-xs-12 col-md-6 border-left">
          	<p className="text-center bigger-p">Take the HTML quizz</p>
          	<form className="coral-text bg-white">
          		<h4 className="text-center">1.What does HTML stand for?</h4>
          		<p><input type="radio" name="html-meaning" value="1"/>Heme Tool Markup Language</p>
          		<p><input type="radio" name="html-meaning" value="2"/>Hyper Text Markup language</p>
          		<input type="radio" name="html-meaning" value="3"/>Hyperlinks and Text Markup Language<br/>
          		<button>Next</button>
          	</form>
          </div>

    </div>
     <div className="bottom-nav text-white">
      
        <div className="col-md-6 text-right bottom-nav-item">
          <Link to="wordpress">
            <img className="icon float-right" alt="arrow-left" src={require('./../img/left-arrow.png')}/>
            Previous project
            <br/>
            <span className="bigger-p">Wordpress</span>
          </Link>
        </div>
        
        <div className="col-md-6 border-left bottom-nav-item">
          <Link to="css">
            <img className="icon" alt="arrow-left" src={require('./../img/right-arrow.png')}/>
            Next Project
            <br/>
            <span className="bigger-p">CSS</span>
          </Link>
        </div>
    
     </div>
    {/* Write routes here... */}
  </div>
);

export default Html;