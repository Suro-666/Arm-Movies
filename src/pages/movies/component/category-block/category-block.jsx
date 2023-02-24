import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addMovieForCase } from "../../../../redux/case/case-slice";
import { changeFilteredMovies } from "../../../../redux/movies/movies-slice";
import Line from "../../../../components/line";

import styles from "./category-block.module.scss";
import { useTranslation } from "react-i18next";

const CategoryBlock = ({ genre }) => {
    const moviesState = useSelector((state) => state.movies);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const filteredMovieForGenre = moviesState.movies.filter(mov => mov.genre.includes(genre))

    const goToMoreInfo = (e) => {
        const filteredMovieForInfo = moviesState.movies.find(movie => movie === e)
        dispatch(changeFilteredMovies(filteredMovieForInfo))
        navigate(`/more-info/:${filteredMovieForInfo.name}`)
    }

    const addToCase = (e) => {
        const filteredMovieForCase = moviesState.movies.find(movie => movie === e)
        dispatch(addMovieForCase(filteredMovieForCase))
    }

    const { t } = useTranslation()

    return (
        <div className={styles.category_block}>
            <div className={styles.row1}>
                <Line className={styles.genre_line} />
                <div className={styles.genre_text_div}>
                    <h3 className={styles.genre_text}>
                        {genre.toUpperCase()}
                    </h3>
                </div>
            </div>
            <div className={styles.row2}>
                {filteredMovieForGenre.map((movie) => (
                    <div
                        className={styles.movie_container}
                        key={movie.name}
                    >
                        <div className={styles.movie}>
                            <div
                                className={styles.background_buttons}
                            >
                                <button 
                                    onClick={addToCase.bind(this,movie)}
                                    className={styles.buy_button}
                                >
                                    {t("films-buy")}
                                </button>
                                <button
                                    onClick={goToMoreInfo.bind(this,movie)}
                                    className={styles.more_button}
                                >
                                    {t("films-more")}
                                </button>
                            </div>
                            <img
                                alt={movie.name}
                                src={movie.movieURL}
                            />
                        </div>
                        <div className={styles.movie_info_block}>
                            <p>{movie.name.toUpperCase()}</p>
                            <p>{movie.price}<span>$</span></p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default CategoryBlock;
