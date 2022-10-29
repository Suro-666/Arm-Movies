import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { changeTokenState } from "../../redux/token/token-slice";

import styles from './profile.module.scss';

const Profile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.user)

    const logOut = () => {
        navigate('/')
    }

    return (
        <div className={styles.Profile}>
            <h1>{privateUser.name}</h1>

            <button onClick={logOut}>Log out from {privateUser.email}</button>
        </div>
    )
}

export default Profile