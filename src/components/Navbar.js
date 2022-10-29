import React from "react";
import { Link } from 'react-router-dom'

// import css navbar
import styles from "../styles/Navbar.module.css";


// import image
import icon_coffee from "../asset/icon_coffee.png"
import icon_search from "../asset/icon_search.png"
import icon_chat from "../asset/icon_chat.png"
import icon_profile from "../asset/icon_profil.png"



function Navbar() {
    return (
        <>
            <div className="container">
                <nav className="nav d-flex justify-content-between align-items-center mx-auto px-4">
                    <div className={`${styles["left-nav"]} d-flex py-4`}>
                        <img src={icon_coffee} alt="" className="me-2" widht="27px" height="27px" />
                        <span className="mt-1">Coffee Addict</span>
                    </div>
                    <div className={`${styles["center-nav"]} d-sm-none d-none  d-sm-none d-md-none d-lg-flex flex-row  `}>
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/product" className="nav-link">Product</Link>
                        <Link to="/payment" className="nav-link">Your Cart</Link>
                        <Link to="/history" className="nav-link">History</Link>
                    </div>
                    <div className={`${styles["right-nav"]} d-flex `}>
                        <Link to="#" className="nav-link d-none d-sm-block d-md-none d-lg-block d-sm-none"><img src={icon_search} alt="" widht="30" height="30" /></Link>
                        <Link to="#" className="nav-link d-none d-sm-block d-md-none d-lg-block d-sm-none"><img src={icon_chat} alt="" widht="30" height="30" /></Link>
                        <Link to="/profile" className="nav-link"><img className={styles.img_userprofile} src={icon_profile} alt="" widht="30" height="30" /></Link>
                        {/* style burger button when size tablet and phone */}
                        <Link to="#" className="nav-link d-lg-none d-sm-block"><span className={styles.burger}><i class="bi bi-list fs-4"></i></span></Link>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;