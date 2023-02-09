import React from "react";

import { Route, Routes } from "react-router";

import App from "../App";
import NewPassword from "../pages/Account/NewPassword";
import Profile from "../pages/Account/Profile";
import Home from "../pages/Home/Home";
import Material from "../pages/Material/Material";
import Materials from "../pages/Material/Materials";
import NewMaterial from "../pages/Material/NewMaterial";
import NewProduct from "../pages/Product/NewProduct";
import Product from "../pages/Product/Product";
import Products from "../pages/Product/Products";

import NewOrder from "../pages/Order/NewOrder";
import Order from "../pages/Order/Order";
import Orders from "../pages/Order/Orders";

import NewClient from "../pages/Client/NewClient";
import Clients from "../pages/Client/Clients";
import Client from "../pages/Client/Client";



const AuthenticatedRoutes = () => {
    return (
        <Routes>
            <Route element={<App />}>
                <Route path="/home" element={<Home />} />
                <Route path="/criarmaterial" element={<NewMaterial />} />
                <Route path="/criarproduto" element={<NewProduct />} />
                <Route path="/materiais" element={<Materials />} />
                <Route path="/produtos" element={<Products />} />
                <Route path="/clientes" element={<Clients />} />
                <Route path="/material/:id" element={<Material />} />
                <Route path="/produto/:id" element={<Product />} />
                <Route path="/perfil" element={<Profile />} />
                <Route path="/novasenha" element={<NewPassword />} />

                <Route path="/criarpedido" element={<NewOrder/>}/>
                {/* <Route path="/pedido/:id" element={<Order/>}/> */}
                <Route path="/pedidos" element={<Orders/>}/>

                <Route path="/novocliente" element={<NewClient />} />
                <Route path="/cliente/:id" element={<Client />}/>

            </Route>
        </Routes>
    )
}

export default AuthenticatedRoutes;