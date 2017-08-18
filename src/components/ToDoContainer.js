import React from 'react';
import fetch from 'isomorphic-fetch';

import ToDoList from 'Presentation/ToDoListComponent';
import SortButton from 'Presentation/SortButtonComponent';

class ToDoContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toDoList: []
		};
	}
	
	componentDidMount(){
		fetch('//todo/get')
		
		.then(response => {
			if(response.status >= 400) {
				throw.new Error('Bad response');
			}
			return response.json();
			
		})
		.then(todos => {
			this.setState({toDoList: todos});
		 })
	}
	
	onButtonClick() {

	}

  render(){
	  return(
		  <div>
			<ToDoList items={this.state.toDoList} />
			<SortButton onButtonClick={this.onButtonClick.bind(this)} />
		  </div>
	  );
  }
}

export default ToDoContainer;
