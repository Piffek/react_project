import React from 'react';
import ContactForm from './Presentation/Contact/ContactForm';

class ContactContainer extends React.Component {
	constructor(props) {
      super(props);
		this.state = { email: ''};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(e){
		this.setState({email: e.target.value})
	}
	
	handleSubmit(e){
		alert(this.state.email);
		e.preventDefault();
	}
	
	render() {
		return(
		  <ContactForm 
			sendSubmit={this.handleSubmit}
			sendChange={this.handleChange}
		    sendEmail={this.state.email}	
		  />
		);
	}
}

export default ContactContainer;