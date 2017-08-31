import React from 'react';
import Firebase from 'firebase';
import {DB_FIREBASE} from '../config/firebase';

class LoginContainer extends React.Component {
	constructor(props){
		super(props);
		this.app = Firebase.initializeApp(DB_FIREBASE);
		this.provider = new Firebase.auth.FacebookAuthProvider();
	}
	
	authenticate(provider){
		console.log(new Firebase.auth.FacebookAuthProvider());
		Firebase.auth().signInWithPopup(new Firebase.auth.FacebookAuthProvider());
	}
	
	render() {
		return(
			<button onClick={this.authenticate.bind(this.provider)}>Zaloguj przez facebooka</button>
		)
	}
}

export default LoginContainer;