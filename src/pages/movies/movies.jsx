import React from "react";
import Input from "../../components/input";
import MovieBlock from "./component/movies-block/movie-block";

import styles from './movie.module.scss';

const Movies = () => {
    return (
        <div className={styles.Movies}>

            <div className={styles.left_column}>
                <p>Movie filter</p>

                <Input
                    className={styles.rating_input_1}
                    type='range'
                    min='0'
                    max='10'
                />
            </div>

            <div className={styles.right_column}>
                <MovieBlock/>
            </div>

        </div>
    )
}

export default Movies