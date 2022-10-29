import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import { routes } from "./page-routes";

const MainRoutes = () => {
    const token = useSelector(state => state.user)
    return token ? (
        <Routes>
            {routes.privateRoutes.map((item) => (
                <Route
                    key={item.name}
                    path={item.path}
                    element={item.element}
                />
            ))}
        </Routes>
    ) : (
        <Routes>
            {routes.guestRoutes.map((item2) => (
                <Route
                    key={item2.name}
                    path={item2.path}
                    element={item2.element}
                />
            ))}
        </Routes>
    );
};

export default MainRoutes;
