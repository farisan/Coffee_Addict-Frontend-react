import React from "react";
import { Link } from "react-router-dom";

// import css
import styles from "../styles/Home.module.css";
import icon_coffee from "../asset/icon_titlebar.png";
import { ToastContainer,toast } from "react-toastify";

export default function Navbar_notLogin() {


   const onklik = () => {
      console.log('click')
      toast.error('please login first', {
         position: toast.POSITION.TOP_RIGHT,
       });
   }
   return (
      <>
      <ToastContainer />
         {/* <!-- Start Navbar --> */}
         <div className="container">
            <nav className="nav d-flex justify-content-between align-items-center mx-auto px-4">
               <div className={`${styles["left-nav"]} d-flex py-4`}>
                  <img
                     src={icon_coffee}
                     alt=""
                     className="me-2"
                     widht="27px"
                     height="27px"
                  />
                  <span className="mt-1">Coffee Addict</span>
               </div>
               <div
                  className={`${styles["center-nav"]} d-sm-none d-none  d-sm-none d-md-none d-lg-flex flex-row`}
               >
                  <Link to="/" className="nav-link">
                     Home
                  </Link>
                  <Link to="/product" className="nav-link">
                     Product
                  </Link>
                  <Link  onClick={onklik} className="nav-link">
                     Your Cart
                  </Link>
                  <Link onClick={onklik}  className="nav-link">
                     History
                  </Link>
               </div>
               <div className={`${styles["right-nav"]} d-flex`}>
                  <Link
                     to="/login"
                     className={`${styles["login-nav"]} d-none d-sm-block d-md-none d-lg-block d-sm-none`}
                  >
                     <span>Login</span>
                  </Link>
                  <Link
                     to="/signup"
                     className={`${styles["sign-up-nav"]} d-none d-sm-block d-md-none d-lg-block d-sm-none`}
                  >
                     <span>Sign-Up</span>
                  </Link>
                  <Link to="#" className="nav-link d-lg-none d-sm-block">
                     <span className={styles.burger}>
                        <i className="bi bi-list fs-4"></i>
                     </span>
                  </Link>
               </div>
            </nav>
         </div>
         {/* <!-- End Navbar --> */}
      </>
   );
}
