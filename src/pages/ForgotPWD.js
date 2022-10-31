import React, { Component } from 'react'

// import css
import styles from "../styles/ForgotPWD.module.css"

// import footer
import Footerloginsignup from "../components/Footer-login-signup";
import titlebar from "../utility/WebDinamis"


// import images
import bg_left_forgotpwd from "../asset/forgotpwd_bgleft.png";
import icon_coffee from "../asset/icon_coffee.png";


class ForgotPWD extends Component {
    render() {
        titlebar("Coffee Addict | History")
        return (
            <>
                <main className={styles["container"]}>
                    <aside className={styles["left-heading"]}>
                        <img src={bg_left_forgotpwd} width="100%" height="100%" alt="homepage" />
                    </aside>

                    <aside className={styles["right-heading"]}>
                        <div className={styles["icon-coffee"]}>
                            <img src={icon_coffee} alt="icon_coffee" />
                            <p>Coffee Addict</p>
                        </div>
                        <form className={styles.register}>
                            <div className={`${styles["forgot-text"]} text-center`}>
                                <h3 className={styles.text_one}>Forgot your password?</h3>
                                <p className={styles.text_two}> Don't worry, we got your back!</p>
                            </div>
                            <div className={styles.input}>
                                <input type="password" placeholder="Enter your email address to get link" />
                            </div>

                            <div className={styles.button}>
                                <button>Send</button>
                            </div>

                            <div className={`${styles["send-text"]} text-center`}>
                                <p className={styles.send_one}>Click here if you didnt receive any link in 2 minutes</p>
                                <p className={styles.send_two}>01:52</p>
                            </div>


                            <a href="/Sign-up.html" className={styles["button-login"]}>
                                <span>Resign Link</span>
                            </a>
                        </form>

                        <Footerloginsignup />
                    </aside>

                </main>
            </>
        )
    }
}


export default ForgotPWD;