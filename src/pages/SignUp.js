import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// styling CSS SIGNUP
import styles from "../styles/Signup.module.css"

// Import Component
import Footerloginsignup from '../components/Footer-login-signup';
import titlebar from "../utility/WebDinamis"
import withNavigate from "../helpers/withNavigate"


// Import Images
import bg_left from "../asset/Homepage_1.png";
import icon_coffee from "../asset/icon_titlebar.png";
import icon_google from "../asset/icon_google.png";

// import icon react bawaan
import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'


class SignUp extends Component {

    state = {
        email: "",
        passwords: "",
        phone_number: "",
        type: "password",
        icon: eye,
    }

    /* ====================== */


    // componentDidMount => kondisi ketika halaman di refresh maka akan di jalan isi dalemannya
    componentDidMount() {
        window.scrollTo(0, 0)
    }


    // handlingRegister => logic register
    handlingRegister = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_HOST}coffee/users`, {
            email: this.state.email,
            passwords: this.state.passwords,
            phone_number: this.state.phone_number,
        })
            .then((response) => {
                console.log(response.data.result);
                this.SuccessMessage() //menampilkan notifikasi berhasil
                setTimeout(() => this.props.navigate("/login"), 3000); // memberikan settimeout dan mentalin ke login
            })
            .catch((err) => {
                // console.log(err.response.data.msg);
                toast.error(err.response.data.msg, {    // menampilkan notifikasi error
                    position: toast.POSITION.TOP_RIGHT
                });

            });
        this.setState({ email: "", passwords: "", phone_number: "" });  // state dikembalikan ke kondisi string kosong
    }



    // handleToggle => fungsi untuk membuat handle show password buka tutup mata
    handleToggle = () => {
        if (this.state.type === 'password') {
            this.setState({ icon: eye });
            this.setState({ type: 'text' });
        } else {
            this.setState({ icon: eyeOff });
            this.setState({ type: 'password' });
        }
    }



    // handleEmail, handlePasswords, handlePhone_number => untuk mendapatkan value dari inputan
    handleEmail = (e) => {
        this.setState({
            email: e.target.value,
            // debug: console.log(e.target.value),
        });
    }
    handlePasswords = (e) => {
        this.setState({
            passwords: e.target.value,
            // debug: console.log(e.target.value),
        });
    }
    handlePhone_number = (e) => {
        this.setState({
            phone_number: e.target.value,
            // debug: console.log(e.target.value),
        });
    }


    // SuccessMessage => toast, menampilkan popUP notifikasi jika berhasil
    SuccessMessage = () => {
        toast.success('Register Success !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };




    render() {
        titlebar("Coffee Addict | Sign-Up")
        return (
            <>
                <ToastContainer />
                <main className={styles["container"]}>
                    <aside className={styles["left-heading"]}>
                        <img src={bg_left} width="100%" height="100%" alt="homepage" />
                    </aside>

                    <aside className={styles["right-heading"]}>
                        <Link to="/" className={styles["icon-coffee"]}>
                            <img src={icon_coffee} alt="icon_coffee" width="40px" height="40px" />
                            <p>Coffee Addict</p>
                            <span>Sign Up</span>
                        </Link>
                        <form className={styles["register"]} onSubmit={this.handlingRegister}>
                            <div className={styles["input"]}>
                                <label for="">Email :</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email address"
                                    onChange={this.handleEmail}
                                    value={this.state.email}
                                    required />
                            </div>
                            <div className={styles["input"]}>
                                <label for="">Password :</label>
                                <input type={this.state.type}
                                    name="passwords"
                                    id="passwords"
                                    placeholder="Enter your password"
                                    onChange={this.handlePasswords}
                                    value={this.state.passwords}
                                    required />
                            </div>
                            <div onClick={this.handleToggle} className="w-100 ms-5 me-5">Show Password<Icon icon={this.state.icon} className="ms-2 my-2" /></div>
                            <div className={styles["input"]}>
                                <label for="">Phone Number :</label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    id="phone_number"
                                    placeholder="Enter your phone number"
                                    onChange={this.handlePhone_number}
                                    value={this.state.phone_number}
                                    required />
                            </div>
                            <div className={styles["button"]}>
                                <button >Sign Up</button>
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
                                <button type='submit'>Login</button>
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