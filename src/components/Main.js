import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import About from './Presentation/About';
import Contact from './Presentation/Contact';
import User from './Presentation/User';

class App extends Component {
	render() {
		return(
			<Router>
				<div className="container">
				  <ul>
					<li>
					  <Link to="/">About</Link>
					</li>
					<li>
					  <Link to="/contact">Kontakt</Link>
					</li>
				  </ul>
				  <Route exact path="/" component={About} />
				  <Route path="/user/:id" component={User}/>
				  <Route path="/contact" component={Contact} />
				</div>
			</Router>
		);
	}
}

export default App;