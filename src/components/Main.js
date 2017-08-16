import React from 'react';
import Text from './Text';

class AppComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			text: 'Non clicked'
		};
	}
	
	onButtonClick() {
		this.setState({
			text: 'Clicked'
		});
	}
	
	render() {
		return (
		  <div className="main">
			<Text />
			<p>{ this.state.text }</p>
			<button onClick={this.onButtonClick.bind(this)}>Kliknij!</button>
			<p>HelloWorld</p>
			<p>HelloWorld</p>
		  </div>
		);
	}
}

export default AppComponent;