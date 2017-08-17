import React from 'react';
import PropTypes from 'prop-types';

class TextComponent extends React.Component {
	static propsTypes = {
		clickText: PropTypes.string.isRequired,
		exampleValue: PropTypes.string.isRequired
	};

	render() {
		return (
		  <div>
		  <p className="text"> {this.props.exampleValue} </p>
		  <p className="text">
		    {`Text from parent: ${this.props.clickText}`}
		  </p>
		  </div>
		);
	}
}

export default TextComponent;