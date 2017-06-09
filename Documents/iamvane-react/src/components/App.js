import React from 'react';
import {
	BrowserRouter,
	Route
} from 'react-router-dom';

//App Components
import Home from './Home';
import About from './About';
import Html from './Html';
import CSS from './CSS';
import Javascript from './Javascript';
import Php from './Php';
import ReactLink from './React';
import Mongo from './Mongo';
import Ui from './Ui';
import Wordpress from './Wordpress';


const App = () => (
	//You beging declaring routes in react router by rendering a router that wraps all your app components
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/portfolio/css" component={CSS} />
			<Route path="/about" component={About} />
			<Route path="/portfolio/html" component={Html} />
			<Route path="/portfolio/javascript" component={Javascript} />
			<Route path="/portfolio/php" component={Php} />
			<Route path="/portfolio/react" component={ReactLink} />
			<Route path="/portfolio/mongo" component={Mongo} />
			<Route path="/portfolio/ui" component={Ui} />
			<Route path="/portfolio/wordpress" component={Wordpress} />
		</div>
 	</BrowserRouter>
);


export default App;