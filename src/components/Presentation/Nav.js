import React from 'react';
import {
	Link
} from 'react-router-dom';
import './nav.scss';

const Nav = () => {
	return (
		<nav>
			<Link to="/"><button>About</button></Link>
			<Link to="/contact"><button>Kontakt</button></Link>
            <Link to="/users"><button>Pokaż userów</button></Link>
		</nav>
	);
}

export default Nav;