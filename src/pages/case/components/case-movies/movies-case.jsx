import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
    removeCase,
    removeTargetMovie,
} from "../../../../redux/case/case-slice";

import styles from "./movies-case.module.scss";

const MoviesCase = ({ state }) => {
    
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const removeItems = () => {
        dispatch(removeCase());
        navigate("/");
    };

    const onRemoveTargetMovie = (movie) => {
        dispatch(removeTargetMovie(movie));
    };

    const { t } = useTranslation()

    return (
        <div className={styles.main}>
            {state.map((movie, idx) => {
                return (
                    <div className={styles.movie} key={idx}>
                        <div className={styles.movie_img}>
                            <img
                                alt={movie.name}
                                src={movie.movieURL}
                            />
                        </div>

                        <div className={styles.info}>
                            <h3>{t("case-product-name")}:</h3>
                            <h3>{movie.name.toUpperCase()}</h3>
                        </div>

                        <div className={styles.info}>
                            <h3>{t("case-product-price")}:</h3>
                            <h3>{movie.price}$</h3>
                        </div>
                        <div>
                            <button
                                className={
                                    styles.remove_target_movie_btn
                                }
                                onClick={() =>
                                    onRemoveTargetMovie(movie)
                                }
                            >
                                X
                            </button>
                        </div>
                    </div>
                );
            })}
            <button
                className={styles.remove_case_btn}
                onClick={removeItems}
            >
                {t("case-remove-items")}
            </button>
        </div>
    );
};

export default MoviesCase;
