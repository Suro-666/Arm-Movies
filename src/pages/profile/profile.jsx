import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
    removeToken,
    removeUser,
} from "../../redux/token/token-slice";
import { getDatabase, onValue, ref } from "firebase/database";

import styles from "./profile.module.scss";

const Profile = () => {
    const db = getDatabase();
    const moviesDb = ref(db, "movies/");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.user);

    const logOut = () => {
        dispatch(removeUser());
        dispatch(removeToken());
        localStorage.removeItem("uToken");
        navigate("/");
    };

    const addMovie = () => {
        // set(ref(db, "movies/"), moviesState); // back um kinoner avelacnelu hamar
        onValue(moviesDb, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
        });
    };

    return (
        <div className={styles.Profile}>
            <h1>{user.email}</h1>

            <button onClick={logOut}>
                Log out from {user.email}
            </button>
            <button onClick={addMovie}>GET DATABASE</button>
        </div>
    );
};

export default Profile;
