import React from 'react';

const ContactForm = (props) => {
	return (
		<form onSubmit={props.sendSubmit}>
		  <label>
			Email:
			<input type="text" value={props.sendEmail}  onChange={props.sendChangeEmail}/>
			Wiadomość
			<input type="text" value={props.sendBody} onChange={props.sendChangeBody} />
		  </label>
		  <input type="submit" value="Submit" />
		</form>
	)
}

export default ContactForm;