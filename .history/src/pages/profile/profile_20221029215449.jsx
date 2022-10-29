import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import styles from "./profile.module.scss";

const Profile = () => {
    const navigate = useNavigate();

    const user = useSelector((state) => state.user);

    const logOut = () => {
        
        navigate("/");
    };

    return user.token ? (
        <div className={styles.Profile}>
            <h1>{user.email}</h1>

            <button onClick={logOut}>Log out from {user.email}</button>
        </div>
    ) : (
        <h1>ERROR 404 NOT FOUND</h1>
    );
};

export default Profile;
