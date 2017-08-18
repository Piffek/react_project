import React from 'react';

class User extends React.Component{
	constructor(props){
		super(props);
	}
	render() {
		return (
			<p>User id: {this.props.match.params.id}</p>
		);
	}
}
export default User;