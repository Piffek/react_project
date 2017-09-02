import React from 'react';
import ContactForm from './Presentation/Contact/ContactForm';
import {DB_FIREBASE} from '../config/firebase';
import firebase from 'firebase/app';
import 'firebase/database';



class ContactContainer extends React.Component {
	constructor(props) {
      super(props);
		this.app = firebase.initializeApp(DB_FIREBASE);
		this.db = this.app.database().ref().child('value');
		
		this.state = { 
			value: '',
			body: ''
		};
		
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeBody = this.handleChangeBody.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
		
	}
	
	handleChangeEmail(e){
		e.preventDefault();
		console.log(e.target.value);
		this.setState({value: e.target.value});
	}
	
	handleChangeBody(e){
		e.preventDefault();
		console.log(e.target.value);
		this.setState({body: e.target.value});
	}
	
	handleSubmit(e){
		e.preventDefault();
		this.db.push().set({ 
			email: this.state.value,
			content: this.state.body
		});
	}
	
	
	render() {
		return(
		  <ContactForm 
			sendSubmit={this.handleSubmit}
			sendChangeEmail={this.handleChangeEmail}
			sendChangeBody={this.handleChangeBody}
			sendBody={this.state.body}
		    sendEmail={this.state.value}
		  />
		);
	}
}

export default ContactContainer;