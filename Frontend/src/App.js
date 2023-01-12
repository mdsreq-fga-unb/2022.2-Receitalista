import { Outlet } from "react-router-dom"
//import { useState } from 'react';
//import Header from './components/Header/Header';
import Navbar from "./components/Sidebar/NavBar";
import React from 'react';

function App() {
  //  const [setCartIsShown] = useState(false);

  //  function showCartHandler() {
  //    setCartIsShown(true);
  // }
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
