import React from "react";
import { Link, useNavigate } from "react-router-dom";

// import css navbar
import styles from "../styles/Navbar.module.css";

// import image
import icon_coffee from "../asset/icon_titlebar.png";
import { useDispatch } from "react-redux";
import authAction from "../redux/actions/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function NavbarAdmin() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [show, setShow] = useState(false);

   const handleShow = () => {
      setShow(true);
   };
   const handleClose = () => {
      setShow(false);
   };

   const SuccessMessage = () => {
      toast.success("Logout Success", {
         position: toast.POSITION.TOP_RIGHT,
      });
   };

   const handleLogout = async () => {
      try {
         dispatch(authAction.logoutThunk(localStorage.getItem("token")));
         SuccessMessage();
         navigate("/login");
         setShow(false);
      } catch (err) {
         toast.error(err.response.data.msg, {
            position: toast.POSITION.TOP_RIGHT,
         });
      }
   };

   return (
      <>
         <ToastContainer />
         <div className="container">
            <nav className="nav d-flex justify-content-between align-items-center mx-auto px-4">
               <div
                  id="navbarNav"
                  className={`${styles["left-nav"]} d-flex py-4`}
               >
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
                  id="navbarNav"
                  className={`${styles["center-nav"]} d-sm-none d-none  d-sm-none d-md-none d-lg-flex flex-row  `}
               >
                  <Link to="/" className="nav-link">
                     Home
                  </Link>
                  <Link to="/product" className="nav-link">
                     Product
                  </Link>
                  <Link to="/history" className="nav-link">
                     Order
                  </Link>
                  <Link to="#" className="nav-link">
                     Dashboard
                  </Link>
               </div>
               <div id="navbarNav" className={`${styles["right-nav"]} d-flex `}>
                  <button
                     className={`${styles["logout-style"]}`}
                     onClick={handleShow}
                  >
                     Logout
                  </button>
                  {/* style burger button when size tablet and phone */}
                  <Link to="#" className="nav-link d-lg-none d-sm-block">
                     <span className={styles.burger}>
                        <i class="bi bi-list fs-4"></i>
                     </span>
                  </Link>
               </div>
            </nav>
         </div>
         <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header closeButton>
               <Modal.Title>confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>are you sure you want to log out?</Modal.Body>
            <Modal.Footer>
               <Button
                  variant="success"
                  className="fw-bold text-bg-success text-white"
                  onClick={handleLogout}
               >
                  Yes
               </Button>
               <Button
                  variant="danger"
                  className="fw-bold text-bg-danger text-white"
                  onClick={handleClose}
               >
                  No
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default NavbarAdmin;
