import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import App from "./App";
import * as firebase from "firebase/app";

import "./index.css";

firebase.initializeApp({
    apiKey: "AIzaSyCgR64j6sUSwUxCCFhJwKAeQhS62o4pZU8",
    authDomain: "arm-movies.firebaseapp.com",
    projectId: "arm-movies",
    storageBucket: "arm-movies.appspot.com",
    messagingSenderId: "1008025946043",
    appId: "1:1008025946043:web:e9e226b7ea6677ef66e69e",
    measurementId: "G-J5GKCHB7KL",
});

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
