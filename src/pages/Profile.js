import React from 'react';
import { Link } from 'react-router-dom'


// import css
import styles from "../styles/Profile.module.css"

// import Component
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import titlebar from "../utility/WebDinamis"

// import image
import profile_image from "../asset/profil_image.png"
import icon_pencil from "../asset/icon_pensil.png"


import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
// import withNavigate from "../helpers/withNavigate";



export default function Profile() {
    titlebar("Coffee Addict | Profile")

    const navigate = useNavigate()


    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        }
    },);



    return (
        <>
            {/* <!-- Start Navbar --> */}

            <Navbar />

            {/* <!-- End Navbar --> */}



            {/* <!-- Start Container Full Center --> */}
            <section className={`container-fluid ${styles["section"]}`}>
                <div className="container pt-4 pb-2 ">
                    <span className={`${styles["user-profil"]} fs-4`}>User Profile</span>
                </div>

                {/* <!-- Form Left --> */}
                <form className={`container ${styles["form-profile"]} d-flex flex-warp rounded-4`}>
                    <div className={`${styles["profile"]} py-4 d-flex flex-column justify-content-center align-items-center`}>
                        <Link to="">
                            <img src={profile_image} alt="" width="170px" height="180px" className="rounded-circle mt-4" />
                        </Link>
                        <span className={styles["name-profile"]}>Zulaikha</span>
                        <p className={styles["email-profile"]}>Zulaikha@gmail.com</p>
                        <div className={`${styles["profile-image"]} text-center rounded-5`}>
                            <label for="img-profile">Choose Photo</label>
                            <input type="file" name="" id="img-profile" />
                            {/* style="display:none;" */}
                        </div>
                        <button className={`${styles["remove-profile"]} mt-3 rounded-5`}>Remove Photo</button>
                        <button className={`${styles["editpwd-profile"]} mt-5 rounded-5`}>Edit Password</button>
                        <span className={`${styles["save-change-profile"]} text-center mt-5 fs-4`}>Do you want to save the
                            change?</span>
                        <button className={`${styles["change-profile"]} mt-5 rounded-5`}>Save Change</button>
                        <button className={`${styles["cancel-profile"]} mt-3 rounded-5`}>Cancel</button>
                        <button className={`${styles["editpwd-profile"]} mt-5 rounded-5`} onClick={() => {
                            localStorage.removeItem('token')
                        }}>Logout</button>
                    </div>

                    {/* <!-- form Right --> */}
                    <div className={`${styles["form"]} mx-2 my-5 d-flex flex-column w-100`}>
                        <div className={`${styles["title-form"]} d-flex flex-row justify-content-between my-3 px-5 py-2 `}>
                            <span>Contact</span>
                            <Link to="" className="rounded-5"><img src={icon_pencil} alt="" /></Link>
                        </div>
                        <div className={`${styles["data-form"]} d-flex flex-row p-3 `}>
                            <div className={`${styles["form-data"]} d-flex flex-column m-4 w-50`}>
                                <label for="">Email Address :</label>
                                <input type="email" name="" id="" placeholder="Input your Email" />
                                <label for="">Delivery Address :</label>
                                <input type="text" name="" id="" placeholder="Input your Delivery Address" />
                            </div>
                            <div className={`${styles["form-data"]} d-flex flex-column m-4 w-50`}>
                                <label for="">Mobile Number :</label>
                                <input type="tel" name="" id="" placeholder="Input your Phone Number" />
                            </div>
                        </div>
                        <div className={`${styles["title-form"]} d-flex flex-row justify-content-between my-3 px-5 py-2 `}>
                            <span>Details</span>
                        </div>
                        <div className={`${styles["data-form"]} d-flex flex-row p-3 `}>
                            <div className={`${styles['form-data']} d-flex flex-column m-4 w-50`}>
                                <label for="">Display Name :</label>
                                <input type="text" name="" id="" placeholder="Input your display name" />
                                <label for="">First Name :</label>
                                <input type="text" name="" id="" placeholder="Input your first name" />
                                <label for="">Last Name :</label>
                                <input type="text" name="" id="" placeholder="Input your last name" />
                            </div>
                            <div className={`${styles["form-data"]} d-flex flex-column m-4 w-50`}>
                                <label for="">Birthday :</label>
                                <input type="date" name="" id="" placeholder="mm/dd/yyyy" />
                            </div>
                        </div>

                        <div className="container d-flex flex-row flex-warp justify-content-center mt-3">
                            <div className="form-check mx-5">
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
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            {/* <!-- End Container Full Center --> */}

            <Footer></Footer>
        </>
    )
}

