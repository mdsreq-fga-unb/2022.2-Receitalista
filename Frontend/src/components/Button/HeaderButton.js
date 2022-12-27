import { useState } from 'react';

import classes from './HeaderButton.module.css';

const HeaderButton = (props) => {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

	const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>a</span>
			<span>Login</span>
			<span className={classes.badge}>Oi</span>
		</button>
	);
};

export default HeaderButton;
