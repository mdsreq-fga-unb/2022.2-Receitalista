import React from "react";

import { Route, Routes } from "react-router";

import App from "../App";
import NewPassword from "../pages/Account/NewPassword";
import Profile from "../pages/Account/Profile";
import Home from "../pages/Home/Home";
import Materials from "../pages/Material/Materials";
import NewMaterial from "../pages/Material/NewMaterial";
import NewProduct from "../pages/Product/NewProduct";
import Product from "../pages/Product/Product";
import Products from "../pages/Product/Products";


const AuthenticatedRoutes = () => {
    return (
        <Routes>
            <Route element={<App />}>
                <Route path="/home" element={<Home />} />
                <Route path="/criarmaterial" element={<NewMaterial />} />
                <Route path="/criarproduto" element={<NewProduct />} />
                <Route path="/materiais" element={<Materials />} />
                <Route path="/produtos" element={<Products />} />
                <Route path="/produto/:id" element={<Product />} />
                <Route path="/perfil" element={<Profile />} />
                <Route path="/novasenha" element={<NewPassword />} />
            </Route>
        </Routes>
    )
}

export default AuthenticatedRoutes;