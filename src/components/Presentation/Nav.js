import React from 'react';
import styles from '../../styles/nav.scss';
import {
	Link
} from 'react-router-dom';

const Nav = () => {
	return (
		<nav styleName={styles.nav}>
			<Link to="/"><button>About</button></Link>
			<Link to="/contact"><button>Kontakt</button></Link>
            <Link to="/users"><button>Pokaż userów</button></Link>
		</nav>
	);
}

export default Nav;