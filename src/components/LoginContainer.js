import React from 'react';
import Firebase from 'firebase';
import {DB_FIREBASE} from '../config/firebase';

class LoginContainer extends React.Component {
	constructor(props){
		super(props);
		this.app = Firebase.initializeApp(DB_FIREBASE);
        this.state = {
            userEmail: '',
			token: ''
        }
	}
	
	authenticate(){
		Firebase.auth().signInWithPopup(new Firebase.auth.FacebookAuthProvider());
        
        const user = Firebase.auth().currentUser;
        console.log(user);
			if(user != null){
				user.getToken(true).then(function(idToken){
					localStorage.setItem('token', idToken);
				});
        	}
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