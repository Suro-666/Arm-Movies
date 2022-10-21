import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import { guestRoutes, privateRoutes } from "./page-routes";

const MainRoutes = () => {
    const token = useSelector(state => state.token.token)
    return token ? (
        <Routes>
            {privateRoutes.map((item) => (
                <Route
                    key={item.name}
                    path={item.path}
                    element={item.element}
                />
            ))}
        </Routes>
    ) : (
        <Routes>
            {guestRoutes.map((item2) => (
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
