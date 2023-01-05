import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//  import redux
// import { setDataProfile } from "../redux/actions/auth";

// import react bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// import css
import styles from "../styles/Profile.module.css";

// import Component
import Footer from "../components/Footer.js";
import titlebar from "../utility/WebDinamis";
import Navbar from "../components/Navbar.js";
// import NavbarAdmin from "../components/NavbarAdmin";
// import NavbarnotLogin from "../components/Navbar-notLogin";
import authActions from "../redux/actions/auth";

// import image
import icon_pencil from "../asset/icon_pensil.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import authAction from "../redux/actions/auth";

const Profile = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const profile = useSelector((state) => state.auth.profile);

   const urlpatch = `${process.env.REACT_APP_BACKEND_HOST}/users/profile`;
   const [address, setAddress] = useState(profile.address);
   const [displayname, setDisplayname] = useState(profile.displayname);
   const [firstname, setFirstname] = useState(profile.firstname);
   const [lastname, setLastname] = useState(profile.lastname);
   const [birthday, setBirthday] = useState(profile.birthday);
   const [gender, setGender] = useState(profile.gender);
   const [image, setImage] = useState("");
   const [display, setDisplay] = useState(profile.image);
   const [isEdit, setIsEdit] = useState(true);
   const [loading, setLoading] = useState(false);
   const [show, setShow] = useState(false);
   // const navLogin = <Navbar />;
   // const navAdmin = <NavbarAdmin />;
   // const navnotLogin = <NavbarnotLogin />;

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   // editData => fungsi untuk memasukan data kedalam database ketika di click button save change
   const editData = (e) => {
      e.preventDefault();
      setLoading(true);
      let formdata = new FormData();
      if (image) formdata.append("image", image);
      if (address) formdata.append("address", address);
      if (displayname) formdata.append("displayname", displayname);
      if (firstname) formdata.append("firstname", firstname);
      if (lastname) formdata.append("lastname", lastname);
      if (gender) formdata.append("gender", gender);
      if (birthday) formdata.append("birthday", birthday);
      // for (var pair of formdata.entries()) {
      //     console.log(pair[0] + " - " + pair[1]);
      // }
      const getToken = localStorage.getItem("token");
      Axios.patch(urlpatch, formdata, {
         headers: {
            "x-access-token": getToken,
            "Content-Type": "multipart/form-data",
         },
      })
         .then(() => {
            SuccessMessage();
            setLoading(false);
            setIsEdit(true);
            dispatch(authActions.userIDThunk(getToken));
            window.scrollTo(0, 0);
         })
         .catch((err) => {
            toast.error(err, {
               position: toast.POSITION.TOP_RIGHT,
            });
            setLoading(false);
         });
   };

   // selectImage => untuk preview image ketika abis di choose file
   const selectImage = () => {
      if (!image) return display;
      return URL.createObjectURL(image);
   };

   // handleFile => memndapatkan value inputan dari gambar yang telah di choose file
   const handleFile = (e) => {
      let file = e.target.files[0];
      setImage(file);
      // console.log(e.target.files[0]);
      // console.log(URL.createObjectURL(e.target.files[0]));
   };

   // handleEditDate => gambar image pensil ketika di klik maka akan membuka inputan yang di disable
   const handleEditDate = () => {
      setIsEdit((isEdit) => !isEdit);
   };

   const valueAddress = (e) => {
      setAddress(e.target.value);
   };
   const valueBirthday = (e) => {
      setBirthday(e.target.value);
      console.log(e.target.value);
   };
   const valueDisplayname = (e) => {
      setDisplayname(e.target.value);
   };
   const valueFirstname = (e) => {
      setFirstname(e.target.value);
   };
   const valueLastname = (e) => {
      setLastname(e.target.value);
   };
   const valueGender = (e) => {
      setGender(e.target.value);
   };

   // handleCancel => kondisi ketika button cancel di klik maka akan mengembalikan inputan awal
   const handleCancel = (e) => {
      setLoading(false);
      setAddress("");
      setBirthday("");
      setDisplayname("");
      setFirstname("");
      setLastname("");
      setGender("");
      setIsEdit(true);
   };

   // SuccessMessage, LogoutMessage => notifikasi sukses dan gagal
   const SuccessMessage = () => {
      toast.success("Data Save Change !", {
         position: toast.POSITION.TOP_RIGHT,
      });
   };
   const LogoutMessage = () => {
      toast.success("Logout Success !", {
         position: toast.POSITION.TOP_RIGHT,
      });
   };

   const handleCancelImage = (e) => {
      e.preventDefault();
      setDisplay(profile.image);
   };

   //handleLogout => untuk menghapus token dan role di localstorage serta menghapus di redis BE
   const handleLogout = async () => {
      try {
         dispatch(authAction.logoutThunk(localStorage.getItem("token")));
         LogoutMessage();
         navigate("/login");
         setShow(false);
      } catch (err) {
         toast.error(err.response.data.msg, {
            position: toast.POSITION.TOP_RIGHT,
         });
      }
   };

   // handleClose, handleShow => Show Modals
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   titlebar("Coffee Addict | Profile");

   // console.log(image);

   return (
      <>
         <ToastContainer />
         {/* <navtype /> */}
         <Navbar />

         {/* <!-- Start Container Full Center --> */}
         <section className={`container-fluid ${styles["section"]}`}>
            <div className="container pt-4 pb-2 ">
               <span className={`${styles["user-profil"]} fs-4`}>
                  User Profile
               </span>
            </div>

            {/* <!-- Form Left --> */}
            <form
               className={`container ${styles["form-profile"]} d-flex flex-warp rounded-4`}
            >
               <div
                  className={`${styles["profile"]} py-4 d-flex flex-column justify-content-center align-items-center`}
               >
                  {/* <img src={image} alt="profile_picture" width="170px" height="180px" className="rounded-circle mt-4" /> */}
                  <img
                     src={selectImage()}
                     alt="profile_picture"
                     width="170px"
                     height="180px"
                     className="rounded-circle mt-4"
                  />
                  <span className={styles["name-profile"]}>{displayname}</span>
                  <p className={styles["email-profile"]}>{profile.email}</p>
                  <div
                     className={`${styles["profile-image"]} text-center rounded-5`}
                  >
                     <label for="img-profile">Choose Photo</label>
                     <input
                        type="file"
                        name="file"
                        id="img-profile"
                        onChange={(e) => handleFile(e)}
                     />
                     {/* style="display:none;" */}
                  </div>
                  <button
                     className={`${styles["remove-profile"]} mt-3 rounded-5`}
                     onClick={handleCancelImage}
                  >
                     Remove Photo
                  </button>
                  <button
                     className={`${styles["editpwd-profile"]} mt-5 rounded-5`}
                  >
                     Edit Password
                  </button>
                  <span
                     className={`${styles["save-change-profile"]} text-center mt-5 fs-4`}
                  >
                     Do you want to save the change?
                  </span>
                  <button
                     className={`${styles["change-profile"]} mt-5 rounded-5`}
                     onClick={editData}
                  >
                     {loading ? (
                        <div className="d-flex justify-content-center align-items-center ">
                           <Spinner animation="border" />
                        </div>
                     ) : (
                        "Save Change"
                     )}
                  </button>
                  {/* <button className={`${styles["cancel-profile"]} mt-3 rounded-5`} onClick={this.handleCancel}>Cancel</button> */}
                  <button
                     className={`${styles["cancel-profile"]} mt-3 rounded-5`}
                     onClick={(e) => {
                        e.preventDefault();
                        handleCancel();
                     }}
                  >
                     Cancel
                  </button>
                  <button
                     className={`${styles["editpwd-profile"]} mt-5 rounded-5`}
                     onClick={(e) => {
                        e.preventDefault();
                        handleShow();
                     }}
                  >
                     Logout
                  </button>
               </div>
               {/* <!-- form Right --> */}
               <div
                  className={`${styles["form"]} mx-2 my-5 d-flex flex-column w-100`}
               >
                  <div
                     className={`${styles["title-form"]} d-flex flex-row justify-content-between my-3 px-5 py-2 `}
                  >
                     <span>Contact</span>
                     <Link onClick={handleEditDate} className="rounded-5">
                        <img src={icon_pencil} alt="" />
                     </Link>
                  </div>
                  <div
                     className={`${styles["data-form"]} d-flex flex-row p-3 `}
                  >
                     <div
                        className={`${styles["form-data"]} d-flex flex-column m-4 w-50`}
                     >
                        <label for="">Email Address :</label>
                        <text>{profile.email}</text>
                        <label for="">Delivery Address :</label>
                        <input
                           type="text"
                           name="address"
                           id="address"
                           value={address}
                           onChange={valueAddress}
                           // onChange={(e) => e.address.target.value}
                           placeholder="Input your address"
                           disabled={isEdit}
                        />
                     </div>
                     <div
                        className={`${styles["form-data"]} d-flex flex-column m-4 w-50`}
                     >
                        <label for="">Mobile Number :</label>
                        <text>{profile.phone_number}</text>
                     </div>
                  </div>
                  <div
                     className={`${styles["title-form"]} d-flex flex-row justify-content-between my-3 px-5 py-2 `}
                  >
                     <span>Details</span>
                  </div>
                  <div
                     className={`${styles["data-form"]} d-flex flex-row p-3 `}
                  >
                     <div
                        className={`${styles["form-data"]} d-flex flex-column m-4 w-50`}
                     >
                        <label for="">Display Name :</label>
                        <input
                           type="text"
                           name="displayname"
                           id="displayname"
                           value={displayname}
                           onChange={valueDisplayname}
                           placeholder="Input displayname"
                           disabled={isEdit}
                        />
                        <label for="">First Name :</label>
                        <input
                           type="text"
                           name="firstname"
                           id="firstname"
                           value={firstname}
                           onChange={valueFirstname}
                           placeholder="Input firstname"
                           disabled={isEdit}
                        />
                        <label for="">Last Name :</label>
                        <input
                           type="text"
                           name="lastname"
                           id="lastname"
                           value={lastname}
                           onChange={valueLastname}
                           placeholder="Input lastname"
                           disabled={isEdit}
                        />
                     </div>
                     <div
                        className={`${styles["form-data"]} d-flex flex-column m-4 w-50`}
                     >
                        <label for="">Birthday :</label>
                        <input
                           type={isEdit ? "text" : "date"}
                           name="birthday"
                           id="birthday"
                           value={
                              birthday === null
                                 ? null
                                 : birthday
                                      .slice(0, 10)
                                      .split("-")
                                      .join("/")
                                      .split("/")
                                      .join("-")
                           }
                           onChange={valueBirthday}
                           placeholder="Input Birthday"
                           disabled={isEdit}
                        />
                     </div>
                  </div>

                  <div className="container d-flex flex-row flex-warp justify-content-center mt-3">
                     {/* <div className="form-check mx-5">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="male" checked />
                                    <label className="form-check-label" for="male">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check mx-5">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="female" />
                                    <label className="form-check-label" for="female">
                                        Female
                                    </label>
                                </div> */}
                     <div className={styles.input__radio}>
                        <input
                           type="radio"
                           name="gender"
                           id="male"
                           value={"male"}
                           onChange={valueGender}
                           checked={gender === "male"}
                           disabled={isEdit}
                        />
                        <label htmlFor="MALE" className={styles.radio_label}>
                           Male
                        </label>
                     </div>
                     <div className={styles.input__radio}>
                        <input
                           type="radio"
                           name="gender"
                           id="female"
                           value={"female"}
                           onChange={valueGender}
                           checked={gender === "female"}
                           disabled={isEdit}
                        />
                        <label htmlFor="FEMALE" className={styles.radio_label}>
                           Female
                        </label>
                     </div>
                  </div>
               </div>
            </form>
         </section>
         {/* <!-- End Container Full Center --> */}

         <Footer></Footer>
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
};

// const mapDispatchToProps = {
//    setDataProfile,
// };

export default Profile;
