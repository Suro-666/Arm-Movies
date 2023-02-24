import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { changeFilteredMovies } from "../../redux/movies/movies-slice";
import Input from "../input";

import styles from "./search.module.scss";

const Search = () => {
    const movies = useSelector((state) => state.movies);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlerSearch = () => {
        const searchedMovie = movies.movies.find((movie) =>
            movie.name.toLowerCase().includes(search)
        );
        if(searchedMovie){
            dispatch(changeFilteredMovies(searchedMovie))
            navigate(`/more-info/:${searchedMovie.name}`)
        } else {
            alert(`Movie title \n <<${search}>> \n not found`)
        }
    };

    const { t } = useTranslation()

    return (
        <div className={styles.search_block}>
            <Input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className={styles.search_input}
                type="text"
                placeholder={t("search-placeholder")}
            />
            <div
                onClick={handlerSearch}
                className={styles.search_icon}
            >
                <ion-icon name="search-outline"></ion-icon>
            </div>
        </div>
    );
};

export default Search;
