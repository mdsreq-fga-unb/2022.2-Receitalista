import React from "react";

import { Route, Routes } from "react-router";

import App from "../App";
import NewAccount from "../pages/Account/NewAccount";

import Login from "../pages/Login/Login";

const NonAuthenticatedRoutes = () => {
    return(
        <Routes>
            <Route element={<App />}>
                <Route path="/criarconta" element={<NewAccount />} />
                <Route path="/" element={<Login />} />
            </Route>
        </Routes>
    )
}

export default NonAuthenticatedRoutes;