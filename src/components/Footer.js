import React from "react";
import { Link } from 'react-router-dom'



import styles from "../styles/Footer.module.css";

import icon_instagram from "../asset/icon_instagram.png";
import icon_facebook from "../asset/icon_facebook.png";
import icon_twitter from "../asset/icon_twitter.png";
import icon_coffee from "../asset/icon_titlebar.png";

function Footer() {
    return (
        <>
            <footer className="container-fluid">
                <div className={`container d-flex ${styles["footer-center-box"]} py-5`}>
                    <aside className={styles["footer-left"]}>
                        <img src={icon_coffee} alt="icon_coffee" />
                        <span className={styles["footer-title-left"]}>Coffee Addict</span>
                        <p>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality
                            beans
                        </p>
                        <div className={styles["icon-footer"]}>
                            <Link to=""><img src={icon_facebook} alt="facebook" /></Link>
                            <Link to=""><img src={icon_twitter} alt="twitter" /></Link>
                            <Link to=""><img src={icon_instagram} alt="instagram" /></Link>
                        </div>
                        <span className={styles["copyright"]}>©2020CoffeeStore</span>
                    </aside>

                    <aside className={`container d-flex flex-row justify-content-end ${styles["ft-right"]}`}>
                        <div className="d-flex flex-column me-5">
                            <div className={`${styles["footer-right"]} d-flex flex-row mt-2 mb-3`}>
                                <span>Product</span>
                            </div>
                            <div className={`${styles["footer-right-link"]} d-flex flex-column`}>
                                <span>Download</span>
                                <span>Pricing</span>
                                <span>Locations</span>
                                <span>Countries</span>
                                <span>Blog</span>
                            </div>
                        </div>
                        <div className="d-flex flex-column me-5">
                            <div className={`${styles["footer-right"]} d-flex flex-row mt-2 mb-3`}>
                                <span>Engage</span>
                            </div>
                            <div className={`${styles["footer-right-link"]} d-flex flex-column`}>
                                <span>Coffee Shop?</span>
                                <span>FAQ</span>
                                <span>About Us</span>
                                <span>Privacy Policy</span>
                                <span>Terms of Service</span>
                            </div>
                        </div>
                    </aside>

                </div>
            </footer>
        </>
    );
}

export default Footer;