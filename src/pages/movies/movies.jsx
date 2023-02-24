import React from "react";
import MovieBlock from "./component/movies-block/movie-block";

import styles from './movie.module.scss';

const Movies = () => {
    return (
        <div className={styles.Movies}>

            <div className={styles.right_column}>
                <MovieBlock/>
            </div>

        </div>
    )
}

export default Movies