import React from 'react';
import styles from '../../styles/banner.scss';
import AngleDown from 'react-icons/lib/fa/angle-down'

const Banner = () => {
	return (
	  <div className="banner">
		 <h1>Subject HERE</h1>
		 <button>Zapisz się</button>
         <button id='buttonShift'><div id="shift"><AngleDown /></div></button>
         <img></img>
      </div>
	);
}

export default Banner;