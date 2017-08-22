import React from 'react';
import ListItem from './ListItem';

const User = (props) => {
	let dat = props.data.map((users) => {
		return <ListItem key={Math.random().toString()} value={users.name} />
	});

	return (
	  <div className="container">
		<ul> {dat}</ul>

	  </div>
	);

}
	
export default User;