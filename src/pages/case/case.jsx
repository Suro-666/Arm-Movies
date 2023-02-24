import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";


import styles from "./case.module.scss";
import MoviesCase from "./components/case-movies/movies-case";

const Case = () => {
    
    const caseState = useSelector((state) => state.case.caseState);

    const { t } = useTranslation()
    
    return caseState.length !== 0 ? (
        <div className={styles.case}>
           <MoviesCase state={caseState}/>
        </div>
    ) : (
        <div className={styles.case_empty}>
            <h1>{t("empty-basket")}</h1>
        </div>
    );
};

export default Case;
