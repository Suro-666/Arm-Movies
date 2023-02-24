import React from "react";
import Footer from "../footer/footer";
import Header from "../header";

import styles from "./layout.module.scss";

const Layout = ({ children }) => {
    return (
        <div className={styles.Layout}>
            <Header />

            <div className={styles.Children}>{children}</div>

            <Footer/>
        </div>
    );
};

export default Layout;
