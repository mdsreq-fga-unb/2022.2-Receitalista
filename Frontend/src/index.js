import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';

import App from './App';
import Home from "./pages/Home/Home"
import NewProduct from "./pages/Product/NewProduct"
import NewAccount from "./pages/Account/NewAccount"
import Login from "./pages/Login/Login"

import reportWebVitals from './reportWebVitals';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/conta" element={<NewAccount />} />
          <Route path="/produto" element={<NewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
