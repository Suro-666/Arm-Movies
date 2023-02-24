import React from "react";
import { useTranslation } from "react-i18next";
import Line from "../line/line";

import styles from "./footer.module.scss";

const Footer = () => {

    const { t } = useTranslation()

    return (
        <div className={styles.footer}>
            <div className={styles.footer_mine}>
                <div className={styles.top_block}>
                    <div className={styles.contacts}>
                        <p>{t("footer-contacts")}</p>
                        <div className={styles.social_sites_block}>
                            <a
                                href="https://www.instagram.com/_ss55.055/"
                                target="blank"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100007525565478"
                                target="blank"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://www.linkedin.com/in/suro-stepanyan-59a6b224b/"
                                target="blank"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/Suro-666"
                                target="blank"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <Line className={styles.line} />
                <div className={styles.bottom_block}>
                    <div>
                        © 2022–2023
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
