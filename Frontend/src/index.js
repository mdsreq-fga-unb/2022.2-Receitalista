import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';

import App from './App';

import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import NewAccount from "./pages/Account/NewAccount"
import NewMaterial from "./pages/Material/NewMaterial"
import NewProduct from "./pages/Product/NewProduct"
import Materials from "./pages/Material/Materials"
import Products from "./pages/Product/Products"
import Product from "./pages/Product/Product"
import Profile from "./pages/Account/Profile"

import reportWebVitals from './reportWebVitals';

import './index.css';
import NewPassword from './pages/Account/NewPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/criarconta" element={<NewAccount />} />
          <Route path="/criarmaterial" element={<NewMaterial />} />
          <Route path="/criarproduto" element={<NewProduct />} />
          <Route path="/materiais" element={<Materials />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/produto/:id" element={<Product />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/novasenha" element={<NewPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
