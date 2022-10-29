import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { changeTokenState } from "../../redux/token/token-slice";
import Input from "../input/input";

import styles from "./sign-in.module.scss";

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const privateUser = useSelector(
        (state) => state.token.privateUser
    );

    const goToSignUp = () => {
        navigate("/sign-up");
    };

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(privateUser);
        if (
            privateUser.email === e.target.email.value &&
            privateUser.password === e.target.password.value &&
            privateUser.email.length !== 0 &&
            privateUser.password.length !== 0
        ) {
            dispatch(changeTokenState(true));
            navigate(`/profile/${privateUser.id}`);
        } else {
            alert("Wrong password or email");
        }
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
