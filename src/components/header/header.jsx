import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Line from "../line";
import Nav from "../navigation/nav";
import Search from "../search";
import { useTranslation } from "react-i18next";

import styles from "./header.module.scss";
import { changeSiteLngState } from "../../redux/site-language/site-language-slice";

const Header = () => {
    const user = useSelector((state) => state.user);
    const caseState = useSelector((state) => state.case.caseState);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goToHome = () => {
        navigate("/");
    };

    const toSignIn = () => {
        navigate("/sign-in");
    };

    const openProfile = () => {
        navigate(`/profile/:${user.user.id}`);
    };

    const goToCasePage = () => {
        user.token ? navigate("/case") : navigate("/sign-in");
    };

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        dispatch(changeSiteLngState(language));
    };

    return (
        <div className={styles.Header}>
            <div className={styles.header_mine}>
                <div onClick={goToHome} className={styles.logo}>
                    <span>{t("page-name1")}</span> {t("page-name2")}
                </div>

                <Line className={styles.line} />

                <div className={styles.center}>
                    <Nav />

                    <Search />
                </div>

                <Line className={styles.line} />

                <div className={styles.case_block}>
                    <div>
                        <select
                            onChange={(e) =>
                                changeLanguage(e.target.value)
                            }
                            className={styles.languages_select}
                        >
                            <option
                                value="EN"
                                className={styles.languages_options}
                            >
                                EN
                            </option>
                            <option
                                value="am"
                                className={styles.languages_options}
                            >
                                AM
                            </option>
                            <option
                                value="RU"
                                className={styles.languages_options}
                            >
                                RU
                            </option>
                        </select>
                    </div>
                    <div
                        onClick={goToCasePage}
                        className={styles.case_icon}
                    >
                        <ion-icon name="cart-outline"></ion-icon>
                        <span className={styles.case_items_count}>
                            {user.token
                                ? caseState.length
                                : caseState.length}
                        </span>
                    </div>
                    <div className={styles.buttons_block}>
                        <button
                            onClick={
                                user.token ? openProfile : toSignIn
                            }
                            className={
                                user.token
                                    ? styles.button_true
                                    : styles.button_false
                            }
                        >
                            {user.token ? "" : `${t("sign-in")}`}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
