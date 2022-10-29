import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import css
import styles from "../styles/Login.module.css"

// import footer
import Footerloginsignup from "../components/Footer-login-signup";


// import images
import bg_left from "../asset/Homepage_1.png";
import icon_coffee from "../asset/icon_coffee.png";
import icon_google from "../asset/icon_google.png";


class Login extends Component {
    render() {
        return (
            <>
                <main className={styles["container"]}>
                    <aside className={styles["left-heading"]}>
                        <img src={bg_left} width="100%" height="100%" alt="homepage" />
                    </aside>

                    <aside className={styles["right-heading"]}>
                        <div className={styles["icon-coffee"]}>
                            <img src={icon_coffee} alt="icon_coffee" />
                            <p>Coffee Addict</p>
                            <span>Login</span>
                        </div>
                        <form className={styles.register}>
                            <div className={styles.input}>
                                <label for="">Email :</label>
                                <input type="text" placeholder="Enter your email address" />
                            </div>
                            <div className={styles.input}>
                                <label for="">Password :</label>
                                <input type="password" placeholder="Enter your password" />
                            </div>
                            <Link to="/forgotpassword" className={styles["forget-password"]}>Forget Password?</Link>
                            <div className={styles.button}>
                                <button>Login</button>
                            </div>
                            <div className={styles["button-google"]}>
                                <span>
                                    <button>
                                        <img src={icon_google} alt="icon_google" />
                                        <p>Sign up with Google</p>
                                    </button>
                                </span>
                            </div>
                            <h2><span>Don't have an account?</span></h2>
                            <Link to="/signup" className={styles["button-login"]}>
                                <span>Sign Up</span>
                            </Link>
                        </form>

                        <Footerloginsignup />
                    </aside>

                </main>
            </>
        )
    }
}


export default Login;