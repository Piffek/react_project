import React from 'react';
import Firebase from 'firebase';
import {DB_FIREBASE} from '../config/firebase';

class LoginContainer extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            userEmail: '',
			token: ''
        }
	}
	
	authenticate(){
		Firebase.auth().signInWithPopup(new Firebase.auth.FacebookAuthProvider());
	}
    
	render() {
		return(
            <div>
              <button onClick={this.authenticate.bind(this)}>Zaloguj przez facebooka</button>
             
            </div>
		)
	}
}

export default LoginContainer;