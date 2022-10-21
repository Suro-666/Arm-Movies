import React from "react";
import CategoryBlock from "../../../../components/category-block";

import styles from "./movie-block.module.scss";

const MovieBlock = () => {
    return (
     <div className={styles.Movie_block}>

            <CategoryBlock text="Popular" />

            <CategoryBlock text="Fantasy" />

            <CategoryBlock text="Drama" />
        </div>
    );
};

export default MovieBlock;
