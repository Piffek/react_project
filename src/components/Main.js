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
import Firebase from 'firebase';
import {DB_FIREBASE} from '../config/firebase';

class App extends Component {
    constructor(props){
        super(props);
        this.app = Firebase.initializeApp(DB_FIREBASE);
    }

    componentWillMount(){
      Firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            user.getToken(true).then(function(idToken){
                localStorage.setItem('token', idToken);
            });
          }
        });
    }
 
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