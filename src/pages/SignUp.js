import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// styling CSS SIGNUP
import styles from "../styles/Signup.module.css";

// Import Component
import Footerloginsignup from "../components/Footer-login-signup";
import titlebar from "../utility/WebDinamis";

// Import Images
import bg_left from "../asset/Homepage_1.png";
import icon_coffee from "../asset/icon_titlebar.png";
import icon_google from "../asset/icon_google.png";

// import icon react bawaan
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

const SignUp = () => {
   const [email, setEmail] = useState("");
   const [passwords, setPasswords] = useState("");
   const [phone_number, setPhone_number] = useState("");
   const [type, setType] = useState("password");
   const [icon, setIcon] = useState(eye);
   const [loading, setLoading] = useState(false)
   const navigate = useNavigate();
   const url = `${process.env.REACT_APP_BACKEND_HOST}/users`;
   

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   // handlingRegister => logic register
   const handlingRegister = (e) => {
      e.preventDefault();
      setLoading(true)
      if(!email || !passwords || !phone_number) return  (toast.error("Data register can't be empty", {
         // menampilkan notifikasi error
         position: toast.POSITION.TOP_RIGHT,
      }), setLoading(false))
      axios
         .post(url, {
            email: email,
            passwords: passwords,
            phone_number: phone_number,
         })
         .then((response) => {
            console.log(response.data.result);
            SuccessMessage(); //menampilkan notifikasi berhasil
            navigate("/login")
            setLoading(false)
         })
         .catch((err) => {
            // console.log(err.response.data.msg);
            toast.error(err.response.data.msg, {
               // menampilkan notifikasi error
               position: toast.POSITION.TOP_RIGHT,
            });
            setLoading(false)
         });
   };

   // handleToggle => fungsi untuk membuat handle show password buka tutup mata
   const handleToggle = () => {
      if (type === "password") {
         setIcon(eye);
         setType("text");
      } else {
         setIcon(eyeOff);
         setType("password");
      }
   };

   // handleEmail, handlePasswords, handlePhone_number => untuk mendapatkan value dari inputan
   const handleEmail = (e) => {
      setEmail(e.target.value);
      // debug: console.log(e.target.value),
   };
   const handlePasswords = (e) => {
      setPasswords(e.target.value);
      // debug: console.log(e.target.value),
   };
   const handlePhone_number = (e) => {
      setPhone_number(e.target.value);
      // debug: console.log(e.target.value),
   };

   // SuccessMessage => toast, menampilkan popUP notifikasi jika berhasil
   const SuccessMessage = () => {
      toast.success("Register Success !", {
         position: toast.POSITION.TOP_RIGHT,
      });
   };

   titlebar("Coffee Addict | Sign-Up");
   return (
      <>
         <ToastContainer />
         <main className={styles["container"]}>
            <aside className={styles["left-heading"]}>
               <img src={bg_left} width="100%" height="100%" alt="homepage" />
            </aside>

            <aside className={styles["right-heading"]}>
               <Link to="/" className={styles["icon-coffee"]}>
                  <img
                     src={icon_coffee}
                     alt="icon_coffee"
                     width="40px"
                     height="40px"
                  />
                  <p>Coffee Addict</p>
                  <span>Sign Up</span>
               </Link>
               <form className={styles["register"]} onSubmit={handlingRegister}>
                  <div className={styles["input"]}>
                     <label for="">Email :</label>
                     <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                        onChange={handleEmail}
                        value={email}
                     />
                  </div>
                  <div className={styles["input"]}>
                     <label for="">Password :</label>
                     <input
                        type={type}
                        name="passwords"
                        id="passwords"
                        placeholder="Enter your password"
                        onChange={handlePasswords}
                        value={passwords}
                     />
                  </div>
                  <div onClick={handleToggle} className="w-100 ms-5 me-5">
                     Show Password
                     <Icon icon={icon} className="ms-2 my-2" />
                  </div>
                  <div className={styles["input"]}>
                     <label for="">Phone Number :</label>
                     <input
                        type="tel"
                        name="phone_number"
                        id="phone_number"
                        placeholder="Enter your phone number"
                        onChange={handlePhone_number}
                        value={phone_number}
                     />
                  </div>
                  <div className={styles["button"]}>
                     {loading ?  <div className="d-flex justify-content-center align-items-center pt-3">
                           <Spinner animation="border" />
                        </div> : <button>Sign Up</button>}
                  </div>
                  <div className={styles["button-google"]}>
                     <span>
                        <button>
                           <img src={icon_google} alt="icon_google" />
                           <p>Sign up with Google</p>
                        </button>
                     </span>
                  </div>
                  <h2>
                     <span>Already have an account?</span>
                  </h2>
                  <Link to="/Login" className={styles["button-login"]}>
                     <button type="submit">Login</button>
                  </Link>
               </form>
               <Footerloginsignup />
            </aside>
         </main>
      </>
   );
};

export default SignUp;
