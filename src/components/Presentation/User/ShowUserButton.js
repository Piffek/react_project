import React from 'react';

const ShowUserButton = (props) => {
	return (
	  <div className="container">
	    <button onClick={props.showUser}>Pokaz Userów</button>
	  </div>
	);
}

export default ShowUserButton;