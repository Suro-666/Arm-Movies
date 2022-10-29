import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeUser } from '../../redux/token/token-slice'

import styles from "./profile.module.scss";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    const logOut = () => {
        dispatch(removeUser(
            
        ))
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
