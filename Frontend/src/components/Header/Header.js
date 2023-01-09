import { Fragment } from 'react';
import { Link } from "react-router-dom";
import HeaderButton from '../Button/HeaderButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Receitalista</h1>
        <HeaderButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
