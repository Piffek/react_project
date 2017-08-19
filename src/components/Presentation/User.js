import React from 'react';
import ListItem from './ListItem';

const User = (props) => {
	let dat = props.data.map((users) => {
		return <ListItem key={Math.random().toString()} value={users.id} />
	});

	return (
	  <div className="container">
	    <span>User id: {props.id}</span>
		<ul> {dat}</ul>

	  </div>
	);

}
	
export default User;