import React from 'react';
import AngleDown from 'react-icons/lib/fa/angle-down'
import LoginContainer from '../../LoginContainer';
import './banner.scss';

const Banner = () => {
	return (
	  <div className="banner">
		 <h1>TO DO LISTA</h1>
		 <LoginContainer />
         <a href="#bottom"><button id='buttonShift'><div id="shift"><AngleDown /></div></button></a>
         <img></img>
      </div>
	);
}

export default Banner;