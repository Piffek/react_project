import React from 'react';
import AngleDown from 'react-icons/lib/fa/angle-down'
import './banner.scss';

const Banner = () => {
	return (
	  <div className="banner">
		 <h1>Subject HERE</h1>
		 <button>Zapisz się</button>
         <a href="#bottom"><button id='buttonShift'><div id="shift"><AngleDown /></div></button></a>
         <img></img>
      </div>
	);
}

export default Banner;