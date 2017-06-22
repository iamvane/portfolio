import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

class About extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	points:[],
	    	courses:[],
	    	badges:[],
	    	profile:[]
	    };
	    // This line is important!
  	}
  	componentDidMount(){
  		axios.get('https://teamtreehouse.com/vanecharles.json')
		  .then(response => {
		    this.setState({
		    	points: response.data.points.total,
		    	courses: response.data.badges.length,
		    	badges: response.data.badges,
		    	profile: response.data
		    });
		  })
		  .catch(error => {
		    console.log('Error fetching and parsing data', error);
		  });
  	}

	render(props){
		
		var points = this.state.profile;
		
		console.log(points);

		var badgesArray = this.state.badges;
		var badgesShort = badgesArray.slice(0, 7);

		const badgest = badgesShort.map((badge) => 
			<li key={badge.id}>
			<a className="icon-link" href={badge.url} target="_blank"><img alt={badge.name}className="icon-big" src={badge.icon_url}/></a>
			</li>
		);

		return(
			<div className="home page-wrapper">
				<Header/>

			   	<div className="container">
			      
			      <h1>Vanessa Charles Thompson</h1>
			      <div className="bio">
				      <p><span className="bigger-p bg-salmon"></span>Vanessa is a web developer and designer based in Boston. She started coding 3 years ago when building a web application for her startup. Her favorite programming language is JavaScript and she has a strong background in UX design and marketing. Vanessa is a former classical piano instructor and sound designer.
					      </p>
				  </div>
			      <div className="col-xs-12 col-md-6">
				      
				      <p><span className="bg-green"> Web Skills </span> JavaScript, jQuery, CSS, SASS PHP, HTML, XML, JSON, NodeJS, Bootstrap, Apache, ReactJS, AWS, Google Analytics, Google App Engine, Git, Redux, Flux, Wordpress, ExpressJS, MongoDB, MySQL, REST APIs, ES6, Babel, Webpack.
				      </p>
				      <p><span className="bg-blue">Design Skills</span> Photoshop, Illustrator, Experience Design, Dreamweaver, Adobe Acrobat, Animate CC.
				      </p>
				      <a className="icon-link" href="https://github.com/iamvane" target="_blank"><img className="icon" alt="github-profile" src={require('./../img/github-logo.png')}/></a>
				      <a className="icon-link" href="https://bitbucket.org/vanegeek/" target="_blank"><img className="icon" alt="bitbucket-profile" src={require('./../img/bitbucket.png')}/></a>
				      <a className="icon-link" href="https://www.linkedin.com/in/vanessacharlesnabi/" target="_blank"><img className="icon" alt="linkedin-profile" src={require('./../img/linkedin-logo.png')}/></a>
				      <br/>
			      </div>
			      <div className="col-xs-12 col-md-6">
			      	<p><span className="bg-grey">Reviews/Testimonials</span> View what clients have to say about Vanessa
				      </p>
			      		
			      		<div className="reviews-wrap">
					      	<div className="reviews col-xs-6">
					      		<a className="icon-link" href="https://www.upwork.com/o/profiles/users/_~0168fd7b152da78809/" target="_blank"><img className="icon-big" alt="upwork-profile" src={require('./../img/upwork-logo.png')}/></a>			      		
					      	</div>
					      	<div className="reviews col-xs-6">
					      		<a className="icon-link" href="https://www.fiverr.com/vanegeek24" target="_blank"><img className="icon" alt="fiverr-profile" src={require('./../img/fiverr-logo.png')}/></a>				      		
					      	</div>
				      	</div>
				      	<div className="treehouse">
					      	<p><span className="bg-salmon">Coursework</span> Vanessa has passed <strong>{this.state.courses}</strong> lessons and scored <strong>{this.state.points}</strong> points at Treehouse! Check out her last passed course content at the badges below:</p>
					      	<ul className="badges">{badgest}</ul>
					      	<a className="all-badges" href="https://teamtreehouse.com/vanecharles" target="_blank">View all Badges & Full Treehouse Profile</a>
					    </div>
			      </div>
			    </div> 
		    </div>
	    )
	}

}

export default About;