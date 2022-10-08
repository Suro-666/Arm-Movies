import React from "react";
import Line from "../line";
import Nav from "../navigation/nav";
import Search from "../search";

import styles from './header.module.scss';

const Header = () => {
    
    return (
        <div className={styles.Header}>

            <div className={styles.logo}><span>ARM</span> MOVIES</div>

            <Line className={styles.line}/>

            <div className={styles.center}>

                <Nav/>

                <Search/>

            </div>

            <Line className={styles.line}/>


            <div className={styles.case_block}>
                <div className={styles.case_icon}><ion-icon name="cart-outline"></ion-icon></div>
                <p className={styles.phone_number}>+374-(77)-014-686</p>
            </div>
        </div>
    )
}


export default Header