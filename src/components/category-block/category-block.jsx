import React from "react";
import Line from "../line";

import styles from './category-block.module.scss'

const CategoryBlock = ({ text,  }) => {
    return (
        <div className={styles.category_block}>

            <div className={styles.category_text_block}>
                <Line className={styles.category_line}/>
                <p>{text}</p>
            </div>

            <div className={styles.movies}>
                <div className={styles.movie}>
                    <div className={styles.movie_image}></div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h2>Deep Water</h2>
                        <p>10$</p>
                    </div>
                    <p>★★★★★★★☆☆☆</p>
                </div>

                <div className={styles.movie}>
                    <div className={styles.movie_image}></div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h2>Deep Water</h2>
                        <p>10$</p>
                    </div>
                    <p>★★★★★★★☆☆☆</p>
                </div>

                <div className={styles.movie}>
                    <div className={styles.movie_image}></div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h2>Deep Water</h2>
                        <p>10$</p>
                    </div>
                    <p>★★★★★★★☆☆☆</p>
                </div>

                <div className={styles.movie}>
                    <div className={styles.movie_image}></div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h2>Deep Water</h2>
                        <p>10$</p>
                    </div>
                    <p>★★★★★★★☆☆☆</p>
                </div>

                <div className={styles.movie}>
                    <div className={styles.movie_image}></div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h2>Deep Water</h2>
                        <p>10$</p>
                    </div>
                    <p>★★★★★★★☆☆☆</p>
                </div>
            </div>

        </div>
    )
}

export default CategoryBlock