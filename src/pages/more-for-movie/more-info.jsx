import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import styles from "./more-info.module.scss";

const MoreInfo = () => {
    const movie = useSelector((state) => state.movies.filteredMovie);
    const navigate = useNavigate()

    const { t } = useTranslation()

    return movie ? (
        <div className={styles.more_info}>
            <div className={styles.main}>
                <div className={styles.movie_block}>
                    <div className={styles.column_left}>
                        <div className={styles.movie_img}>
                            <img
                                alt={movie.name}
                                src={movie.movieURL}
                            />
                        </div>
                    </div>
                    <div className={styles.column_right}>
                        <div className={styles.right_main}>
                            <div className={styles.info_block}>
                                <div className={styles.movie_title}>
                                    {movie.name.toUpperCase()}
                                </div>
                                <div className={styles.movie_info}>
                                    <p>{t("more-about")}</p>
                                    <div className={styles.txt}>
                                        <div
                                            className={styles.mi_left}
                                        >
                                            {t("more-name")}
                                        </div>
                                        <div
                                            className={
                                                styles.mi_right
                                            }
                                        >
                                            {movie.name.toUpperCase()}
                                        </div>
                                    </div>
                                    <div className={styles.txt}>
                                        <div
                                            className={styles.mi_left}
                                        >
                                            {t("more-producer")}
                                        </div>
                                        <div
                                            className={
                                                styles.mi_right
                                            }
                                        >
                                            {movie.producer}
                                        </div>
                                    </div>
                                    <div className={styles.txt}>
                                        <div
                                            className={styles.mi_left}
                                        >
                                            {t("more-country")}
                                        </div>
                                        <div
                                            className={
                                                styles.mi_right
                                            }
                                        >
                                            {movie.country}
                                        </div>
                                    </div>
                                    <div className={styles.txt}>
                                        <div
                                            className={styles.mi_left}
                                        >
                                            {t("more-duration")}
                                        </div>
                                        <div
                                            className={
                                                styles.mi_right
                                            }
                                        >
                                            {movie.duration}
                                        </div>
                                    </div>
                                    <div className={styles.txt}>
                                        <div
                                            className={styles.mi_left}
                                        >
                                            {t("more-genre")}
                                        </div>
                                        {movie.genre.map(
                                            (elem, idx) => (
                                                <div
                                                    key={idx}
                                                    className={
                                                        styles.mi_right
                                                    }
                                                >
                                                    {elem},
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <div className={styles.txt}>
                                        <div
                                            className={styles.mi_left}
                                        >
                                            {t("more-premiere")}
                                        </div>
                                        <div
                                            className={
                                                styles.mi_right
                                            }
                                        >
                                            {movie.premiere}
                                        </div>
                                    </div>
                                    <div className={styles.txt}>
                                        <div
                                            className={styles.mi_left}
                                        >
                                            {t("more-budget")}
                                        </div>
                                        <div
                                            className={
                                                styles.mi_right
                                            }
                                        >
                                            {movie.budget}
                                        </div>
                                    </div>
                                    <div className={styles.txt}>
                                        <div
                                            className={styles.mi_left}
                                        >
                                            {t("more-stars")}
                                        </div>
                                        <div
                                            className={styles.mi_star}
                                        >
                                            {movie.starring.map(
                                                (elem,i) => (
                                                    <div
                                                        key={i}
                                                        className={
                                                            styles.right
                                                        }
                                                    >
                                                        {elem},
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        navigate('/')
    );
};

export default MoreInfo;
