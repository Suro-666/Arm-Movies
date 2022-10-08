import React from "react";
import Input from "../input";

import styles from './search.module.scss';

const Search = () => {
    return (
        <div className={styles.search_block}>
            <Input
                className={styles.search_input}
                type='text'
                placeholder='...Search For Movies'
            />
            <div className={styles.search_icon}><ion-icon name="search-outline"></ion-icon></div>
        </div>
    )
}

export default Search