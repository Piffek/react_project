import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import About from './Presentation/About';
import Contact from './Presentation/Contact';
import UserContainer from './UserContainer';

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
                    <li>
                      <Link to="/users">Pokaż userów</Link>
                    </li>
				  </ul>
				  <Route exact path="/" component={About} />
				  <Route path="/users/" component={UserContainer}/>
				  <Route path="/contact" component={Contact} />
				</div>
			</Router>
		);
	}
}

export default App;