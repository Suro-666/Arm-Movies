import React from "react";
import Input from "../input";
import { useNavigate } from "react-router";
import { changeToken } from "../../redux/token/token-slice";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import styles from "./sign-up.module.scss";

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then(({ user }) => {
                    console.log(user);
                    dispatch(
                        changeToken({
                            id: user.uid,
                            email: user.email,
                            token: user.accessToken,
                        })
                    );
                })
                .catch(console.error);

            email = "";
            password = "";
            rePassword = "";

            navigate("/sign-in");
        } else {
            alert("Empty string or passwords do not match");
        }
    };
    return (
        <div className={styles.sign_up}>
            <div className={styles.sign_up_main}>
                <form onSubmit={formSubmit}>
                    <h1 className={styles.h1}>CREATE ACCOUNT</h1>
                    <Input
                        name="email"
                        className={styles.sign_up_input}
                        type="email"
                        placeholder="Email"
                    />
                    <Input
                        name="password"
                        className={styles.sign_up_input}
                        type="password"
                        placeholder="Password"
                    />
                    <Input
                        name="rePassword"
                        className={styles.sign_up_input}
                        type="password"
                        placeholder="Repeat Password"
                    />
                    <div className={styles.sign_up_button}>
                        <button type="submit" className={styles.button}>
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
