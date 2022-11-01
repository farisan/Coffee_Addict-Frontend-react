import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// styling CSS SIGNUP
import styles from "../styles/Signup.module.css"

// Import Component
import Footerloginsignup from '../components/Footer-login-signup';
import titlebar from "../utility/WebDinamis"
import withNavigate from "../helpers/withNavigate"


// Import Images
import bg_left from "../asset/Homepage_1.png";
import icon_coffee from "../asset/icon_coffee.png";
import icon_google from "../asset/icon_google.png";




class SignUp extends Component {
    render() {
        titlebar("Coffee Addict | Sign-Up")
        return (
            <>
                <main className={styles["container"]}>
                    <aside className={styles["left-heading"]}>
                        <img src={bg_left} width="100%" height="100%" alt="homepage" />
                    </aside>

                    <aside className={styles["right-heading"]}>
                        <Link to="/" className={styles["icon-coffee"]}>
                            <img src={icon_coffee} alt="icon_coffee" />
                            <p>Coffee Addict</p>
                            <span>Sign Up</span>
                        </Link>
                        <form className={styles["register"]}>
                            <div className={styles["input"]}>
                                <label for="">Email :</label>
                                <input type="text" placeholder="Enter your email address" />
                            </div>
                            <div className={styles["input"]}>
                                <label for="">Password :</label>
                                <input type="password" placeholder="Enter your password" />
                            </div>
                            <div className={styles["input"]}>
                                <label for="">Phone Number :</label>
                                <input type="tel" placeholder="Enter your phone number" />
                            </div>
                            <div className={styles["button"]}>
                                <button onClick={() => this.props.navigate("/login")}>Sign Up</button>
                            </div>
                            <div className={styles["button-google"]}>
                                <span>
                                    <button><img src={icon_google} alt="icon_google" />
                                        <p>Sign up with Google</p>
                                    </button>
                                </span>
                            </div>
                            <h2><span>Already have an account?</span></h2>
                            <Link to="/Login" className={styles["button-login"]}>
                                <button>Login</button>
                            </Link>
                        </form>
                        <Footerloginsignup />
                    </aside>
                </main>
            </>
        )
    }
}



const newComponent = withNavigate(SignUp)

export default newComponent