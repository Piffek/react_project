import React from 'react';
import Firebase from 'firebase';

class LoginContainer extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            userEmail: '',
			token: ''
        }
	}
	
	authenticateWithFB(){
		Firebase.auth().signInWithPopup(new Firebase.auth.FacebookAuthProvider());
	}
    
    authenticateWithGoogle(){
		Firebase.auth().signInWithPopup(new Firebase.auth.GoogleAuthProvider());
	}
	render() {
		return(
            <div>
              <button onClick={this.authenticateWithFB.bind(this)}>Zaloguj przez facebooka</button>
              <button onClick={this.authenticateWithGoogle.bind(this)}>Zaloguj przez Google</button>
            </div>
		)
	}
}

export default LoginContainer;