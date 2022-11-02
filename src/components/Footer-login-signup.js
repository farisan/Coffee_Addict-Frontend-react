import React from "react";
import { Link } from 'react-router-dom'


import styles from "../styles/Footer-login-signup.module.css";

import icon_instagram from "../asset/icon_instagram.png";
import icon_facebook from "../asset/icon_facebook.png";
import icon_twitter from "../asset/icon_twitter.png";
import icon_coffee from "../asset/icon_titlebar.png";

function Footer_login_signup() {
    return (
        <>
            <footer className={["footer"]}>

                <section className={styles["footer-left"]}>
                    <div className={styles["icon-footer"]}>
                        <img src={icon_coffee} alt="icon_coffee" />
                        <p>Coffee Addict</p>
                    </div>
                    <p className={styles["description"]}>Coffee Shop is a store that sells some good meals, and especially coffee. We
                        provide high quality
                        beans</p>
                    <div className={styles["footer-icon"]}>
                        <img src={icon_facebook} alt="facebook" />
                        <img src={icon_twitter} alt="twitter" />
                        <img src={icon_instagram} alt="insagram" />
                    </div>
                    <span className={styles["copyright"]}>©2022CoffeeAddict </span>
                </section>

                <section className={styles["footer-right"]}>
                    <p>Product</p>
                    <div className={styles["product-link"]}>
                        <div className={styles["product"]}>
                            <Link to="">Download</Link>
                            <Link to="">Location</Link>
                            <Link to="">Blog</Link>
                        </div>
                        <div className={styles["link-left-one"]}>
                            <Link to="">Pricing</Link>
                            <Link to="">Countries</Link>
                        </div>
                    </div>
                    <p>Engage</p>
                    <div className={styles["product-link"]}>
                        <div className={styles["product"]}>
                            <Link to="">Coffee Shop?</Link>
                            <Link to="">FAQ</Link>
                            <Link to="">Terms of Service</Link>
                        </div>
                        <div className={styles["link-left-two"]}>
                            <Link to="">About Us</Link>
                            <Link to="">Privacy Policy</Link>
                        </div>
                    </div>
                </section>

            </footer>
        </>
    );
}

export default Footer_login_signup;