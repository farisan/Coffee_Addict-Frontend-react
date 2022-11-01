// import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import css
import styles from "../styles/Login.module.css"

// import component
import Footerloginsignup from "../components/Footer-login-signup";
import titlebar from "../utility/WebDinamis"
// import withNavigate from "../helpers/withNavigate"


// import images
import bg_left from "../asset/Homepage_1.png";
import icon_coffee from "../asset/icon_coffee.png";
import icon_google from "../asset/icon_google.png";

// import icon react bawaan
import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'


import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import withNavigate from "../helpers/withNavigate";
import axios from "axios";


// Function program
function Login() {
    const navigate = useNavigate()
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const [email, setEmail] = useState('')
    const [passwords, setPasswords] = useState('')


    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('password')
        }
    }


    /*  get token localstorage */
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswords = (e) => {
        setPasswords(e.target.value)
    }

    // Mendapatkan token dan di simpan di localstorage
    const handleApi = (e) => {
        e.preventDefault();
        // console.log(email, passwords);
        axios.post(`${process.env.REACT_APP_BACKEND_HOST}coffee/auth`, {
            email,
            passwords,
        })
            .then((response) => {
                console.log("login success");
                // console.log(response.data.result.data.token);
                localStorage.setItem('token', JSON.stringify(response.data.result.data.token));
                navigate('/')
            })
            .catch((err) => {
                alert('Email or Password is WRONG !!!');
                console.log(err);
            })
    }


    /* Main Website */
    titlebar("Coffee Addict | Login")
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
                        <span>Login</span>
                    </Link>
                    <form className={styles.register} onSubmit={handleApi}>
                        <div className={styles.input}>
                            <label >Email :</label>
                            <input type="text" placeholder="Enter your email address" onChange={handleEmail} />
                        </div>
                        <div className={styles.input}>
                            <label >Password :</label>
                            <input type={type} placeholder="Enter your Password" onChange={handlePasswords} />

                            <span onClick={handleToggle}>Show Password<Icon icon={icon} className="ms-2 my-2" /></span>


                        </div>
                        <Link to="/forgotpassword" className={styles["forget-password"]}>Forget Password?</Link>
                        <div className={styles.button}>
                            <button >Login</button>
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


export default withNavigate(Login);









// Class component testing


// class Login extends Component {
//     state = {
//         isPwdShown: false,
//     };


//     render() {
//         titlebar("Coffee Addict | Login")
//         return (
//             <>
//                 <main className={styles["container"]}>
//                     <aside className={styles["left-heading"]}>
//                         <img src={bg_left} width="100%" height="100%" alt="homepage" />
//                     </aside>

//                     <aside className={styles["right-heading"]}>
//                         <div className={styles["icon-coffee"]}>
//                             <img src={icon_coffee} alt="icon_coffee" />
//                             <p>Coffee Addict</p>
//                             <span>Login</span>
//                         </div>
//                         <form className={styles.register}>
//                             <div className={styles.input}>
//                                 <label >Email :</label>
//                                 <input type="text" placeholder="Enter your email address" />
//                             </div>
//                             <div className={styles.input}>
//                                 <label >Password :</label>
//                                 <input type="password" placeholder="Enter your password" />


//                                 {/* <input type={this.state.isPwdShown ? "text" : "password"} placeholder="Enter your password" />
//                                 <span>Show Password</span>
//                                 <input type="checkbox"
//                                     defaultChecked={false}
//                                     onChange={() => {
//                                         this.setState((prevState) => ({
//                                             isPwdShown: prevState.isPwdShown ? false : true,
//                                         }));
//                                     }} /> */}
//                             </div>
//                             <Link to="/forgotpassword" className={styles["forget-password"]}>Forget Password?</Link>
//                             <div className={styles.button}>
//                                 <button onClick={() => this.props.navigate("/")}>Login</button>
//                             </div>
//                             <div className={styles["button-google"]}>
//                                 <span>
//                                     <button>
//                                         <img src={icon_google} alt="icon_google" />
//                                         <p>Sign up with Google</p>
//                                     </button>
//                                 </span>
//                             </div>
//                             <h2><span>Don't have an account?</span></h2>
//                             <Link to="/signup" className={styles["button-login"]}>
//                                 <span>Sign Up</span>
//                             </Link>
//                         </form>

//                         <Footerloginsignup />
//                     </aside>

//                 </main>
//             </>
//         )
//     }
// }


// const newComponent = withNavigate(Login)

// export default newComponent;