import React from "react";
import { useSelector } from "react-redux";
import CategoryBlock from "../category-block";

import styles from "./movie-block.module.scss";

const MovieBlock = () => {
    const moviesState = useSelector((state) => state.movies);
    
    return (
        <div className={styles.Movie_block}>
            {moviesState.moviesGenre.map((genre, i) => (
                <div key={i}>
                    <CategoryBlock genre={genre} />
                </div>
            ))}
        </div>
    );
};

export default MovieBlock;
