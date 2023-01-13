import { Outlet } from "react-router-dom"
//import { useState } from 'react';
//import Header from './components/Header/Header';
import Navbar from "./components/Sidebar/NavBar";
import React from 'react';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
