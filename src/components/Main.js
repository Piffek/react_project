import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Home from './Presentation/Home';
import Contact from './Presentation/Contact';
import UserContainer from './UserContainer';
import Nav from './Presentation/Nav';

class App extends Component {
	render() {
		return(
			<Router>
				<div>
				  <Nav/>
				  <Route exact path="/" component={Home} />
				  <Route path="/users/" component={UserContainer}/>
				  <Route path="/contact" component={Contact} />
				</div>
			</Router>
		);
	}
}

export default App;