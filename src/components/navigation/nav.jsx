import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes/page-routes";

import styles from './nav.module.scss'

const Nav = () => {
    return (
        <div className={styles.Nav}>
            <ul className={styles.ul}>
                {routes.routesForNavigation.map((item) => 
                    item.path.length > 1 &&
                    <NavLink 
                        className={({isActive}) => isActive? styles.navLink_active : styles.navLink_not_active} 
                        key={item.name} to={item.path}
                    >
                        {item.text.toUpperCase()}
                    </NavLink>
                )}
            </ul>
        </div>
    )
}

export default Nav