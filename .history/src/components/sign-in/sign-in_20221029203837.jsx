import React from "react";
import { useNavigate } from "react-router";
import Input from "../input/input";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import styles from "./sign-in.module.scss";

const SignIn = () => {
    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate("/sign-up");
    };

    const formSubmit = (e) => {
        e.preventDefault();
        let email = e.target.email.password;
        let password = e.target.password.value;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user)
        })
        .catch((error) => {
            console.log(error)
        });
        
    };

    return (
        <div className={styles.sign_in}>
            <div className={styles.sign_in_main}>
                <form onSubmit={formSubmit}>
                    <h1>SIGN IN</h1>
                    <Input
                        className={styles.sign_in_input}
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                    />
                    <Input
                        className={styles.sign_in_input}
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                    />
                    <div className={styles.sign_in_buttons}>
                        <button
                            type="submit"
                            className={styles.button_1}
                        >
                            Sign in
                        </button>
                        <button
                            onClick={goToSignUp}
                            className={styles.button_2}
                        >
                            Create account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
