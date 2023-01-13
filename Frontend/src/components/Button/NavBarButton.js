import { useState } from 'react';

import classes from './NavBarButton.module.css';

import * as BsIcons from "react-icons/bs";

const NavBarButton = () => {
	const [btnIsHighlighted] = useState(false);

	const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

	return (
		<button className={btnClasses}>
			<span><BsIcons.BsFillFilePersonFill/></span>
			<span>Perfil</span>
		</button>
	);
};

export default NavBarButton;
