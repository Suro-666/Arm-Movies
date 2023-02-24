import React, { useEffect } from "react";
import { setToken, setUser } from "./redux/token/token-slice";
import Layout from "./components/layout/layout";
import MainRoutes from "./routes/main-routes";
import { useDispatch } from "react-redux";
import { getDatabase, onValue, ref } from "firebase/database";
import { changeMoviesState } from "./redux/movies/movies-slice";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import './App.css'

const App = () => {
    const dispatch = useDispatch();
    
    const auth = getAuth();
    const db = getDatabase();
    const moviesDb = ref(db, "movies/");
    
    useEffect(() => {
        onValue(moviesDb, (snapshot) => {
            if (snapshot.val().length !== 0) {
                const data = snapshot.val();
                dispatch(changeMoviesState(data));
            }
        });
        onAuthStateChanged(auth, (user) => {
            dispatch(setUser({
                id: user.uid,
                email: user.email
            }))
        })
    }, [moviesDb, auth, dispatch]);

    useEffect(() => {
        const userToken = localStorage.getItem("uToken");
        dispatch(setToken(userToken));
    }, [dispatch]);

    return (
        <>
            <Layout>
                <MainRoutes />
            </Layout>
        </>
    );
};

export default App;
