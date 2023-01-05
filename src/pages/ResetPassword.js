import React, { useState } from "react";
import axios from 'axios'

// import css
import styles from "../styles/ResetPassword.module.css";

// import footer
import Footerloginsignup from "../components/Footer-login-signup";
import titlebar from "../utility/WebDinamis";

// import images
import bg_left_forgotpwd from "../asset/forgotpwd_bgleft.png";
import icon_coffee from "../asset/icon_coffee.png";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {

  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [otp, setOtp] = useState()
  const [loading, setLoading] = useState()

  const valuePassword = (e) => {
    setPassword(e.target.value)
  }

  const valueOTP = (e) => {
    setOtp(e.target.value)
  }

  const ResetPassword = (e) => {
    setLoading(true)
    e.preventDefault()
    if(!otp || !password) return (toast.error("Data don't empty", {
      position: toast.POSITION.TOP_RIGHT,
   }),setLoading(false))
    axios.patch(`${process.env.REACT_APP_BACKEND_HOST}/users/changePwd`, {otp, password})
    .then((res) => {
      
      toast.success(res.data.result.msg, {
        position: toast.POSITION.TOP_RIGHT,
     })
      setLoading(false)
      navigate('/login')
    })
    .catch((err)=> {
      toast.error("code otp expired please send email again in forgot password", {
      position: toast.POSITION.TOP_RIGHT,
      })
      setLoading(false)
      navigate("/forgotpassword")
    })
  }

   titlebar("Coffee Addict | Reset Password");   
   return (
      <>
      <ToastContainer />
         <main className={styles["container"]}>
            <aside className={styles["left-heading"]}>
               <img
                  src={bg_left_forgotpwd}
                  width="100%"
                  height="100%"
                  alt="homepage"
               />
            </aside>

            <aside className={styles["right-heading"]}>
               <div className={styles["icon-coffee"]}>
                  <img src={icon_coffee} alt="icon_coffee" />
                  <p>Coffee Addict</p>
               </div>
               <form className={styles.register}>
                  <div className={`${styles["forgot-text"]} text-center`}>
                     <h3 className={styles.text_one}>Reset Password</h3>
                  </div>
                  <div className={styles.input}>
                    <label className={styles.label_input} htmlFor="">OTP</label>
                     <input
                        type="text"
                        onChange={valueOTP}
                        placeholder="Please input code otp from email automatic"
                     />
                     <label className={styles.label_input} htmlFor="">New Password</label>
                     <input
                        type="password"
                        onChange={valuePassword}
                        placeholder="Input new password"
                     />
                  </div>

                  <div className={styles.button}>
                    {loading ? <div className="d-flex justify-content-center align-items-center mx-auto">
                        <Spinner animation="border" variant="info" />
                     </div> : <button onClick={ResetPassword}>Confirm Reset Password</button>}
                  </div>
               </form>

               <Footerloginsignup />
            </aside>
         </main>
      </>
   );
};

export default ResetPassword;
