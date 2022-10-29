import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import styles from './profile.module.scss';

const Profile = () => {

    const navigate = useNavigate();

    const user = useSelector(state => state.user)

    const logOut = () => {

        navigate('/')
    }

    return (
        <div className={styles.Profile}>
            
        </div>
    )
}

export default Profile