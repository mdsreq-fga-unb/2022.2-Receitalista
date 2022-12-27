import { Fragment } from 'react';
import { Link } from "react-router-dom";
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Receitalista</h1>
      </header>
    </Fragment>
  );
};

export default Header;
