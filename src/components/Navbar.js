import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Axios from 'axios'

// import css navbar
import styles from "../styles/Navbar.module.css";


// import image
// import icon_coffee from "../asset/icon_coffee.png"
// import icon_search from "../asset/icon_search.png"
import icon_chat from "../asset/icon_chat.png"
import icon_coffee from "../asset/icon_titlebar.png"



class Navbar extends Component {

    state = {
        url: `${process.env.REACT_APP_BACKEND_HOST}coffee/users/UserID`,
    }
    componentDidMount() {
        const getToken = localStorage.getItem('token')
        // console.log(getToken);
        Axios.get(this.state.url, {
            headers: {
                "x-access-token": getToken,
            },
        }).then((response) => {
            this.setState({
                image: response.data.result[0].image,
            }, () => {
                console.log(this.state);
            });
        });
    }

    render() {
        return (
            <>
                <div className="container">
                    <nav className="nav d-flex justify-content-between align-items-center mx-auto px-4">

                        <div id="navbarNav" className={`${styles["left-nav"]} d-flex py-4`} >
                            <img src={icon_coffee} alt="" className="me-2" widht="27px" height="27px" />
                            <span className="mt-1">Coffee Addict</span>
                        </div>
                        <div id="navbarNav" className={`${styles["center-nav"]} d-sm-none d-none  d-sm-none d-md-none d-lg-flex flex-row  `}>
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/product" className="nav-link">Product</Link>
                            <Link to="/payment" className="nav-link">Your Cart</Link>
                            <Link to="/history" className="nav-link">History</Link>
                        </div>
                        <div id="navbarNav" className={`${styles["right-nav"]} d-flex `}>
                            {/* <Link to="#" className="nav-link d-none d-sm-block d-md-none d-lg-block d-sm-none"><img src={icon_search} alt="" widht="30" height="30" /></Link> */}
                            <div className={styles["box-search"]}>
                                <input type="search" className={styles["input-search"]} />
                                <i className={`fa fa-search ${styles["fa_icon"]}`}></i>
                            </div>
                            <Link to="#" className="nav-link d-none d-sm-block d-md-none d-lg-block d-sm-none"><img src={icon_chat} alt="" widht="30" height="30" /></Link>
                            <Link to="/profile" className="nav-link"><img className={styles.img_userprofile} src={this.state.image} alt="" widht="30" height="30" /></Link>
                            {/* style burger button when size tablet and phone */}
                            <Link to="#" className="nav-link d-lg-none d-sm-block"><span className={styles.burger}><i class="bi bi-list fs-4"></i></span></Link>
                        </div>

                    </nav>
                </div >
            </>
        )
    }
}
export default Navbar



