import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import About from './Presentation/About';
import Contact from './Presentation/Contact';
import UserContainer from './UserContainer';
import styles from '../styles/nav.scss';

class App extends Component {
	render() {
		return(
			<Router>
				<div className='container'>
				 <nav styleName={styles.nav}>
					  <Link to="/"><button>About</button></Link>
					  <Link to="/contact"><button>Kontakt</button></Link>
                      <Link to="/users"><button>Pokaż userów</button></Link>
			      </nav>
				  <Route exact path="/" component={About} />
				  <Route path="/users/" component={UserContainer}/>
				  <Route path="/contact" component={Contact} />
				</div>
			</Router>
		);
	}
}

export default App;