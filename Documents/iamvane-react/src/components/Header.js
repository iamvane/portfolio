import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => (


  <header>

  	<div className="container">

		    <ul className="main-nav nav navbar-nav navbar-right navigation bigger-p">
		      <li><NavLink exact to="/">Home</NavLink></li>
		    </ul> 
       
        <div className="text-center single-heading">
        
          <h2>{props.title}</h2>
          <p className="bigger-p">{props.description}</p>
       
        </div>

    </div>

  </header>
);

export default Header;