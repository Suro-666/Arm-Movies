import React from "react";
import Input from "../../components/input";
import { useNavigate } from "react-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import styles from "./sign-up.module.scss";
import { useTranslation } from "react-i18next";

const SignUp = () => {
    const navigate = useNavigate();

    const formSubmit = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        let rePassword = e.target.rePassword.value;
        if (
            email !== "" &&
            password !== "" &&
            rePassword !== "" &&
            password.length > 6 &&
            rePassword.length > 6 &&
            password === rePassword
        ) {

            ////////
            // const db = getDatabase()
            // set(ref(db, 'users/', email), {
            //     email : email,
            //     password: password
            // })
            ////////

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then(({ user }) => {
                    navigate("/sign-in");
                })
                .catch((error) => {
                    if (error.code === "auth/email-already-in-use") {
                        alert("The email address is already in use");
                    } else if (error.code === "auth/invalid-email") {
                        alert("The email address is not valid.");
                    } else if (error.code === "auth/operation-not-allowed") {
                        alert("Operation not allowed.");
                    } else if (error.code === "auth/weak-password") {
                        alert("The password is too weak.");
                    }
                });

            email = "";
            password = "";
            rePassword = "";
        } else {
            alert("Empty string or passwords do not match");
        }
    };

    const { t } = useTranslation()

    return (
        <div className={styles.sign_up}>
            <div className={styles.sign_up_main}>
                <form onSubmit={formSubmit}>
                    <h1 className={styles.h1}>{t("sign-up-page")}</h1>
                    <Input
                        name="email"
                        className={styles.sign_up_input}
                        type="email"
                        placeholder={t("sign-up-email-placeholder")}
                    />
                    <Input
                        name="password"
                        className={styles.sign_up_input}
                        type="password"
                        placeholder={t("sign-up-password-placeholder")}
                    />
                    <Input
                        name="rePassword"
                        className={styles.sign_up_input}
                        type="password"
                        placeholder={t("sign-up-rePassword-placeholder")}
                    />
                    <div className={styles.sign_up_button}>
                        <button type="submit" className={styles.button}>
                            {t("sign-up-button")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
