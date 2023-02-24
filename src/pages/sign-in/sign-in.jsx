import React from "react";
import { useNavigate } from "react-router";
import Input from "../../components/input/input";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../redux/token/token-slice";

import styles from "./sign-in.module.scss";
import { useTranslation } from "react-i18next";

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goToSignUp = () => {
        navigate("/sign-up");
    };

    const formSubmit = (e) => {
        e.preventDefault()

        const auth = getAuth();
        signInWithEmailAndPassword(
            auth,
            e.target.email.value,
            e.target.password.value
        )
            .then(({ user }) => {
                const newUser = {
                    id: user.uid,
                    email: user.email,
                }
                dispatch(
                    setUser(newUser)
                );
                
                navigate(`/profile/:${user.uid}`);
                dispatch(setToken(user.accessToken))
                localStorage.setItem('uToken', user.accessToken)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    const { t } = useTranslation()

    return (
        <div className={styles.sign_in}>
            <div className={styles.sign_in_main}>
                <form onSubmit={formSubmit}>
                    <h1>{t("sign-in-page")}</h1>
                    <Input
                        className={styles.sign_in_input}
                        type="email"
                        placeholder={t("sign-in-email-placeholder")}
                        name="email"
                    />
                    <Input
                        className={styles.sign_in_input}
                        type="password"
                        placeholder={t("sign-in-password-placeholder")}
                        name="password"
                    />
                    <div className={styles.sign_in_buttons}>
                        <button type="submit" className={styles.button_1}>
                            {t("sing-in-page-button")}
                        </button>
                        <button
                            onClick={goToSignUp}
                            className={styles.button_2}
                        >
                            {t("sign-in-page-create-account")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
