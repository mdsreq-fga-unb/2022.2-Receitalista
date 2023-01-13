import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import "./NavBar.css";
import NavBarButton from '../Button/NavBarButton';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [auth] = useState(localStorage.getItem('acess_token'))

  const showSidebar = () => setSidebar(!sidebar);

  const navigate = useNavigate()

  function handleLogoutClick() {
    localStorage.removeItem('acess_token');
    localStorage.clear()
    navigate("/")
    window.location.reload();
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <h1 className='textHeader'>
            {auth ? <Link to="/home">Receitalista</Link> : <Link to="/">Receitalista</Link>}
          </h1>
          <div className='button'>
            <Link to="/perfil">
              {auth ? <NavBarButton /> : ""}
            </Link>
          </div>
          <Link to='#' className='menu-bars'>
            {auth ? <FaIcons.FaBars onClick={showSidebar} /> : ""}
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <div className='nav-text'>
              <Link onClick={handleLogoutClick}>
                <GiIcons.GiExitDoor /><span>Sair</span>
              </Link>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;