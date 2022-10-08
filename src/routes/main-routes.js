import React from "react";
import { Routes, Route } from "react-router";
import { userRoutes, adminRoutes } from "./page-routes";

const MainRoutes = () => {
   const token = true
    return (
        <Routes>
            {token ? userRoutes?.map((item) => 
                <Route key={item.name} path={item.path} element={item.element}/>
            ):adminRoutes.map((item) =>
                <Route key={item.name} path={item.path} element={item.element}/>
            )}
        </Routes>
    )
}

export default MainRoutes