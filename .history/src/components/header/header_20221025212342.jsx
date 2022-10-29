import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Line from "../line";
import Nav from "../navigation/nav";
import Search from "../search";

import { getDatabase } from 'firebase/fatabase'

import styles from "./header.module.scss";

const Header = () => {
    const token = useSelector((state) => state.token.privateUser.userToken);
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    const toSignIn = () => {
        navigate("/sign-in");
    };

    const openProfile = () => {
        navigate("/profile");
    };

    return (
        <div className={styles.Header}>
            <div onClick={goToHome} className={styles.logo}>
                <span>ARM</span> MOVIES
            </div>

            <Line className={styles.line} />

            <div className={styles.center}>
                <Nav />

                <Search />
            </div>

            <Line className={styles.line} />

            <div className={styles.case_block}>
                <div className={styles.case_icon}>
                    <ion-icon name="cart-outline"></ion-icon>
                </div>
                <div className={styles.buttons_block}>
                    <button
                        onClick={token ? openProfile : toSignIn}
                        className={
                            token
                                ? styles.button_true
                                : styles.button_false
                        }
                    >
                        {token ? "" : "SIGN IN"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
