import React from 'react';
import {Link} from 'react-router-dom';

const BottomNavigation = (props) => (

	<div className={"bottom-nav " + (props.title === "User Interface" ? 'coral-text' : 'text-white')}>
			
		<div className="col-xs-6 text-right bottom-nav-item">
			<Link to={props.prevlink}>
				<img className="icon float-right" alt="arrow-left" src={require('./../img/left-arrow.png')}/>
				Previous project
				<br/>
				<span className="bigger-p">{props.prev}</span>
			</Link>
		</div>
		
		<div className="col-xs-6 border-left bottom-nav-item">
			<Link to={props.nextlink}>
				<img className="icon" alt="arrow-left" src={require('./../img/right-arrow.png')}/>
				Next Project
				<br/>
				<span className="bigger-p">{props.next}</span>
			</Link>
		</div>
		
	</div>
);

export default BottomNavigation;