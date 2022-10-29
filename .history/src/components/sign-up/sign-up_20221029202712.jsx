import React from "react";
import Input from "../input";
import { useDispatch } from "react-redux";
import { changeToken } from "../../redux/token/token-slice";
import { useNavigate } from "react-router";
import {
    getAuth,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import styles from "./sign-up.module.scss";

const SignUp = () => {
    const dispatch = useDispatch();
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
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then(({ user }) => {
                    const newUser = {
                        id: user.uid,
                        name: e.target.name.value,
                        surname: e.target.surname.value,
                        email: user.email,
                        password: e.target.password.value,
                        token: user.accessToken,
                        userToken: false,
                    };
                    dispatch(changeToken(newUser));
                })
                .catch(console.error);

            email = "";
            password = "";
            rePassword = "";

            navigate("/sign-in");
        } else {
            alert("Empty line");
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
                        <button
                            type="submit"
                            className={styles.button}
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;