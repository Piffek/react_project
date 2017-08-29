import React from 'react';
import axios from 'axios';
import ContactForm from './Presentation/Contact/ContactForm';



class ContactContainer extends React.Component {
	constructor(props) {
      super(props);
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
		fetch('http://localhost:8000/react/contactWithMe.php', {
		  method: 'POST', 
		  headers: {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
		  },
		  body: JSON.stringify({
			  email: this.state.value,
			  body: this.state.body
		  })
	    }).then(function(response) {
			if(response.status >= 400){
				console.log('Nie można wysłać wiadomości');
			}else{
				alert('Dziękujemy za zgłoszenie');
			}
		})
		e.preventDefault();


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