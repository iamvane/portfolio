import React from 'react';
import {Link} from 'react-router-dom';

const TopNavigation = (props) => (

	<div className={"top-navigation " + (props.title === "User Interface" ? 'coral-text' : 'text-white')}>
			
		<div className="col-md-6 text-right top-navigation-item">
			<Link to={props.prevlink}>
				<img className="icon float-right" alt="arrow-left" src={require('./../img/left-arrow.png')}/>
				Previous project
				<br/>
				<span className="bigger-p">{props.prev}</span>
			</Link>
		</div>
		
		<div className="col-md-6 border-left top-navigation-item">
			<Link to={props.nextlink}>
				<img className="icon" alt="arrow-left" src={require('./../img/right-arrow.png')}/>
				Next Project
				<br/>
				<span className="bigger-p">{props.next}</span>
			</Link>
		</div>
		
	</div>
);

export default TopNavigation;