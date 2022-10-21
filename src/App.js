import React from "react";
import Layout from "./components/layout/layout";
import MainRoutes from "./routes/main-routes";

import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Layout>
                <MainRoutes />
            </Layout>
        </div>
    );
};

export default App;
