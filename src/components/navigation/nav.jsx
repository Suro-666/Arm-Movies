import React from "react";
import { NavLink } from "react-router-dom";
import { userRoutes, } from "../../routes/page-routes";

import styles from './nav.module.scss'

const Nav = () => {
    return (
        <div className={styles.Nav}>
            <ul className={styles.ul}>
                {userRoutes?.map((item) => 
                    item.path.length > 1 &&
                    <NavLink 
                       className={({isActive}) => isActive? styles.navLink_active : styles.navLink_not_active} 
                       key={item.name} to={item.path}
                    >
                        {item.name.toUpperCase()}
                    </NavLink>
                )}
            </ul>
        </div>
    )
}

export default Nav