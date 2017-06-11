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
import WordpressCommerce from './WordpressCommerce';
import Ui from './Ui';
import WordpressDesign from './WordpressDesign';


const App = () => (
	//You beging declaring routes in react router by rendering a router that wraps all your app components
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/html" component={Html} />
			<Route path="/css" component={CSS} />
			<Route path="/about" component={About} />
			<Route path="/javascript" component={Javascript} />
			<Route path="/php" component={Php} />
			<Route path="/react" component={ReactLink} />
			<Route path="/wordpress-commerce" component={WordpressCommerce} />
			<Route path="/ui" component={Ui} />
			<Route path="/wordpress-design" component={WordpressDesign} />
		</div>
 	</BrowserRouter>
);


export default App;