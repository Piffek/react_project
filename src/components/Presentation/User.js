import React from 'react';

const User = (props) => {
	let dat = props.data.map((users) => {
		return (<li key={users.id}>{users.id}</li>);
	});

	return (
	  <div className="container">
	    <span>User id: {props.id}</span>
		<ul> {dat}</ul>

	  </div>
	);

}
	
export default User;