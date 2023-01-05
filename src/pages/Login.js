// import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import css
import styles from "../styles/Login.module.css";

// import component
import Footerloginsignup from "../components/Footer-login-signup";
import titlebar from "../utility/WebDinamis";
// import withNavigate from "../helpers/withNavigate"

// import images
import bg_left from "../asset/Homepage_1.png";
import icon_coffee from "../asset/icon_titlebar.png";
import icon_google from "../asset/icon_google.png";

// import icon react bawaan
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import withNavigate from "../helpers/withNavigate";
import { Spinner } from "react-bootstrap";
import authActions from "../redux/actions/auth"
import { useDispatch } from "react-redux";
import {LoginUser} from "../utility/axios"

// Function program
function Login() {
   const navigate = useNavigate();
   const dispatch = useDispatch()
   const [type, setType] = useState("password");
   const [icon, setIcon] = useState(eyeOff);
   const [email, setEmail] = useState("");
   const [passwords, setPasswords] = useState("");
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const handleToggle = () => {
      if (type === "password") {
         setIcon(eye);
         setType("text");
      } else {
         setIcon(eyeOff);
         setType("password");
      }
   };

   const SuccessMessage = () => {
      toast.success("Login Success !", {
         position: toast.POSITION.TOP_RIGHT,
      });
   };
   const ErrorMessage = (err) => {
      toast.error(err, {
         position: toast.POSITION.TOP_RIGHT,
      });
   };

   /*  get token localstorage */
   const handleEmail = (e) => {
      setEmail(e.target.value);
   };

   const handlePasswords = (e) => {
      setPasswords(e.target.value);
   };

   // Mendapatkan token dan di simpan di localstorage
   const handleApi = async (e) => {
      try {
         e.preventDefault();
         if(!email || !passwords ) return  (toast.error("Data register can't be empty", {
         position: toast.POSITION.TOP_RIGHT,
         }), setLoading(false))
         const response = await LoginUser({email, passwords})
         localStorage.setItem("token", response.data.result.data.token);
         localStorage.setItem("role", response.data.result.data.role);
         await dispatch(authActions.userIDThunk(response.data.result.data.token),
         () => {
            SuccessMessage();
         })
         navigate("/")
         setLoading(false)
      } catch (error) {
         ErrorMessage(error.response.data.msg.msg);
         setLoading(false)
      }

      // e.preventDefault();
      // setLoading(true)
      // if(!email || !passwords ) return  (toast.error("Data register can't be empty", {
      //    // menampilkan notifikasi error
      //    position: toast.POSITION.TOP_RIGHT,
      // }), setLoading(false))
      // axios
      //    .post(`${process.env.REACT_APP_BACKEND_HOST}/auth`, {
      //       email,
      //       passwords,
      //    })
      //    .then((response) => {
      //       try {
      //          localStorage.setItem("token", response.data.result.data.token);
      //          localStorage.setItem("role", response.data.result.data.role);
      //          SuccessMessage();
      //          await dispatch(authActions.userIDThunk(response.data.result.data.token),
      //          () => {
      //             navigate("/")
      //             setLoading(false)
      //          })
      //       } catch (error) {
      //          console.log(error)
      //       }
      //    })
      //    .catch((err) => {
      //       ErrorMessage();
      //       setLoading(false)
      //       // console.log(err);
      //    });
   };

   /* Main Website */
   titlebar("Coffee Addict | Login");
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
                  <span>Login</span>
               </Link>
               <form className={styles.register} onSubmit={handleApi}>
                  <div className={styles.input}>
                     <label>Email :</label>
                     <input
                        type="text"
                        placeholder="Enter your email address"
                        onChange={handleEmail}
                     />
                  </div>
                  <div className={styles.input}>
                     <label>Password :</label>
                     <input
                        type={type}
                        placeholder="Enter your Password"
                        onChange={handlePasswords}
                     />

                     <span onClick={handleToggle}>
                        Show Password
                        <Icon icon={icon} className="ms-2 my-2" />
                     </span>
                  </div>
                  <Link
                     to="/forgotpassword"
                     className={styles["forget-password"]}
                  >
                     Forget Password?
                  </Link>
                  <div className={styles.button}>
                     {loading ? <div className="d-flex justify-content-center align-items-center pt-3">
                           <Spinner animation="border" />
                        </div> : <button>Login</button>}
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
                     <span>Don't have an account?</span>
                  </h2>
                  <Link to="/signup" className={styles["button-login"]}>
                     <span>Sign Up</span>
                  </Link>
               </form>

               <Footerloginsignup />
            </aside>
         </main>
      </>
   );
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
