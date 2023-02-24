import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import config from "./firebase.js";
import App from "./App";
import './18n';

import "./index.css";

const app = initializeApp(config);
getDatabase(app);

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        </BrowserRouter>
    </Provider>
);
