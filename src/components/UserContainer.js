import React from 'react';
import fetch from 'isomorphic-fetch';
import ShowUserButton from './Presentation/ShowUserButton';
import User from './Presentation/User';


class UserContainer extends React.Component {
	constructor(props) {
  		super(props);
		this.state = {
			userData: []
		};
	}
	showUser() {
		fetch('http://localhost:8000/getUserData.php', {
			method: 'GET',
			headers: {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json',
			},
		})
		.then((response) => response.json())
		.then((res) => {
		    this.setState({userData: res})
		})
    }
	
	
	
	render() {
		return(
		    <div>
			  <User id={this.props.match.params.id} data={this.state.userData}/>
			  <ShowUserButton showUser={this.showUser.bind(this)} />
	        </div>
		)
	}
	
}

export default UserContainer;