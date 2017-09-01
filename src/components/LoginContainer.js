import React from 'react';
import Firebase from 'firebase';
import {DB_FIREBASE} from '../config/firebase';

class LoginContainer extends React.Component {
	constructor(props){
		super(props);
		this.app = Firebase.initializeApp(DB_FIREBASE);
        this.state = {
            userEmail: ''
        }
	}
	
	authenticate(){
		Firebase.auth().signInWithPopup(new Firebase.auth.FacebookAuthProvider());
        
        const user = Firebase.auth().currentUser;
        console.log(user);
        if(user != null){
            this.setState({ userEmail : user.email })
            document.cookie = 'userEmail=' + user.email;
        }
	}
    
	render() {
		return(
            <div>
              <button onClick={this.authenticate.bind(this)}>Zaloguj przez facebooka</button>
              <h1>{document.cookie.replace(/(?:(?:^|.*;\s*)userEmail\s*\=\s*([^;]*).*$)|^.*$/, "$1") }</h1>
            </div>
		)
	}
}

export default LoginContainer;