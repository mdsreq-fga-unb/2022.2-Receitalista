import { Fragment } from 'react';
import { Link } from "react-router-dom";
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Receitalista</h1>
        <nav class="crumbs">
          <ol>
            <li class="crumb"><a href="#">Bikes</a></li>
            <li class="crumb"><a href="#">BMX</a></li>
          </ol>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
