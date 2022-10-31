import React, { Component } from 'react'
import { Link } from 'react-router-dom'


// import css
import styles from "../styles/Home.module.css";

// import footer
import Footer from "../components/Footer.js";
import titlebar from "../utility/WebDinamis"

// import image
import icon_coffee from "../asset/icon_coffee.png";
import icon_staff from "../asset/icon_staff.png";
import icon_location from "../asset/icon_location.png";
import teamwork from "../asset/teamwork_bg.png";
import icon_ceklis from "../asset/Ceklis.png";
import home_2 from "../asset/home-2.png";
import home_3 from "../asset/home-3.png";
import home_1 from "../asset/home-1.png";
import global from "../asset/Huge Global.png";
import netflix from "../asset/img_netflix.png";
import amazon from "../asset/img_amazon.png";
import reddit from "../asset/img_reddit.png";
import discord from "../asset/img_discord.png";
import spotify from "../asset/img_spotify.png";
import pic1 from "../asset/pic1.png";
import pic2 from "../asset/pic2.png";
import pic3 from "../asset/pic3.png";
import bintang from "../asset/bintang.png";
import rounded from "../asset/rounded.png";







class Home extends Component {
    render() {
        titlebar("Coffee Addict | Home")
        return (
            <>
                <main>
                    {/* <!-- Start Navbar --> */}
                    <div className="container">
                        <nav className="nav d-flex justify-content-between align-items-center mx-auto px-4">
                            <div className={`${styles["left-nav"]} d-flex py-4`}>
                                <img src={icon_coffee} alt="" className="me-2" widht="27px" height="27px" />
                                <span className="mt-1">Coffee Addict</span>
                            </div>
                            <div className={`${styles["center-nav"]} d-sm-none d-none  d-sm-none d-md-none d-lg-flex flex-row`}>
                                <Link to="/" className="nav-link">Home</Link>
                                <Link to="/product" className="nav-link">Product</Link>
                                <Link to="/payment" className="nav-link">Your Cart</Link>
                                <Link to="/history" className="nav-link">History</Link>
                            </div>
                            <div className={`${styles["right-nav"]} d-flex`}>
                                <Link to="/login" className={`${styles["login-nav"]} d-none d-sm-block d-md-none d-lg-block d-sm-none`}><span>Login</span></Link>
                                <Link to="/signup" className={`${styles["sign-up-nav"]} d-none d-sm-block d-md-none d-lg-block d-sm-none`}><span>Login</span></Link>
                                <Link to="#" className="nav-link d-lg-none d-sm-block"><span className={styles.burger}><i class="bi bi-list fs-4"></i></span></Link>
                            </div>
                        </nav>
                    </div>
                    {/* <!-- End Navbar --> */}



                    {/* <!-- Start Background TOP --> */}
                    <section className={`container-fluid ${styles["full-content"]}`}>
                        <div className="container">
                            <div className={`row ${styles["top-content"]}`}>
                                <div className=" col-md-6 col-sm-12  d-flex flex-column">
                                    <span className={styles["description-content-one"]}>Start Your Day with Coffee and Good Meals</span>
                                    <span className={styles["description-content-two"]}>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</span>
                                    <Link to="" className={styles["get-started"]}>
                                        <span>Get Started</span>
                                    </Link>
                                </div>
                                <div className="col-md-6 col-sm-0">
                                    {/* <!-- isi untuk content di sebelah kanan jika ada --> */}
                                </div>
                            </div>

                            <section className={`container-fluid ${styles["box-center-content"]}`}>
                                <div className={`container ${styles["content-bottom"]} d-flex flex-wrap justify-content-around bg-white rounded-4`}>
                                    <div className="row d-flex flex-warp justify-content-between w-100 my-3">
                                        <div className="col-md-4 col-sm-4 d-flex borderalign-items-center justify-content-center">
                                            <span><img src={icon_staff} alt="staff_icon" /></span>
                                            <div className={`d-flex flex-column ${styles["description-box"]}`}>
                                                <span className={styles["desc-one"]}>90+</span>
                                                <span className={styles["desc-two"]}>Staff</span>
                                            </div>
                                        </div>
                                        <div className={`col-md-4 col-sm-4 d-flex align-items-center justify-content-center ${styles["store"]}`}>
                                            <span><img src={icon_location} alt="staff_icon" /></span>
                                            <div className={`d-flex flex-column ${styles["description-box"]}`}>
                                                <span className={styles["desc-one"]}>30+</span>
                                                <span className={styles["desc-two"]}>Store</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 d-flex align-items-center justify-content-center">
                                            <span><img src={icon_staff} alt="staff_icon" /></span>
                                            <div className={`d-flex flex-column ${styles["description-box"]}`}>
                                                <span className={styles["desc-one"]}>800+</span>
                                                <span className={styles["desc-two"]}>Customers</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                    {/* <!-- End Background TOP --> */}



                    <section className="container my-5 py-5">
                        <div className="row">
                            <div className={`col-lg-6 col-md-12 ${styles["teamwork"]}`}>
                                <img src={teamwork} alt="teamwork_background" />
                            </div>
                            <div className={`col-lg-6 col-md-12 ${styles["desc-team"]}`}>
                                <h2 className={styles["title-desc-one"]}>We Provide Good Coffee and Healthy Meals</h2>
                                <span className={styles["title-desc-two"]}>You can explore the menu that we provide with fun and have their own taste and make your day better.</span>
                                <div className={`${styles["desc-teamwork"]} pt-4`}>
                                    <p><img src={icon_ceklis} alt="ceklis" />High quality beans</p>
                                    <p><img src={icon_ceklis} alt="ceklis" />Healthy meals, you can request the ingredients</p>
                                    <p><img src={icon_ceklis} alt="ceklis" />Chat with our staff to get better experience for ordering</p>
                                    <p><img src={icon_ceklis} alt="ceklis" />Free member card with a minimum purchase of IDR 200.000.</p>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section className="container-fluid mt-5">
                        <div className={`container text-center ${styles["favorite"]}`}>
                            <h2>Here is People's Favorite</h2>
                            <p>Let's choose and have a bit taste of poeple's favorite. It might be yours too!</p>
                        </div>
                    </section>




                    <section className="container mt-5 fav">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                                <div className={`${styles["products"]} d-flex flex-column align-items-center position-relative`}>
                                    <Link to="#" ><img className={`${styles["product-img"]} rounded-circle`} src={home_2} alt="tomato" /></Link>
                                    <div className={`position-absolute ${styles["product-posisi"]} text-center`}>
                                        <h2>Hazzelnut Latte</h2>
                                        <ul className="text-start mt-4">
                                            <li><img src={icon_ceklis} alt="ceklis" />HazelnutSyrup</li>
                                            <li><img src={icon_ceklis} alt="ceklis" />Wanilla Whipped Cream</li>
                                            <li><img src={icon_ceklis} alt="ceklis" />Ice / Hot</li>
                                            <li><img src={icon_ceklis} alt="ceklis" />Sliced Banana on Top</li>
                                        </ul>
                                        <h3>IDR 25.000</h3>
                                        <Link to="#" >Order Now</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                                <div className={`${styles["products"]} d-flex flex-column align-items-center position-relative`}>
                                    <Link to="#" ><img className={`${styles["product-img"]} rounded-circle`} src={home_3} alt="tomato" /></Link>
                                    <div className={`position-absolute ${styles["product-posisi"]} text-center`}>
                                        <h2>Pinky Promise</h2>
                                        <ul className="text-start mt-4">
                                            <li><img src={icon_ceklis} alt="ceklis" />1 Shot of Coffee</li>
                                            <li><img src={icon_ceklis} alt="ceklis" />Vanilla Whipped Cream</li>
                                            <li><img src={icon_ceklis} alt="ceklis" />Chocolate Biscuits</li>
                                            <li><img src={icon_ceklis} alt="ceklis" />Strawberry Syrup</li>
                                            <li><img src={icon_ceklis} alt="ceklis" />Sliced strawberry on Top</li>
                                        </ul>
                                        <h3>IDR 30.000</h3>
                                        <Link to="#">Select</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex col-sm-12 flex-column justify-content-center align-items-center">
                                <div className={`${styles["products"]} d-flex flex-column align-items-center position-relative`}>
                                    <Link to="#" ><img className={`${styles["product-img"]} rounded-circle`} src={home_1} alt="tomato" /></Link>
                                    <div className={`position-absolute ${styles["product-posisi"]} text-center`}>
                                        <h2>Chicken Wings</h2>
                                        <ul className="text-start mt-4">
                                            <li><img src={icon_ceklis} alt="ceklis" />Wings</li>
                                            <li><img src={icon_ceklis} alt="ceklis" />Drum Sticks</li>
                                            <li><img src={icon_ceklis} alt="ceklis" />Mayonaise and Lemon</li>
                                            <li><img src={icon_ceklis} alt="ceklis" />Hot Fried</li>
                                            <li><img src={icon_ceklis} alt="ceklis" />Secret Recipe</li>
                                            <li><img src={icon_ceklis} alt="ceklis" />Buy 1 Get 1 only for Dine in</li>
                                        </ul>
                                        <h3>IDR 40.000</h3>
                                        <Link to="#" className="bg-warning">Select</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* <!-- map --> */}
                    <section className={`container ${styles["map"]} row text-center d-flex align-content-center justify-content-around mx-auto my-5`}>
                        <div className="col-12">
                            <h2 className={styles["visit-store"]}>Visit Our Store in the <br />Spot on the Map Below</h2>
                            <p className="text-wrap pt-2 pb-5">See our store in every city on the spot and spen your good day there.
                                See
                                <br /> you soon!
                            </p>
                            <img className="p-5" src={global} alt="map" width="100%" height="auto" />
                        </div>
                    </section>

                    {/* <!-- out partner --> */}
                    <section className="container row text-center mx-auto my-5">
                        <div className={`${styles["partner"]} col-12 mx-auto`}>
                            <h2 className="fw-bold">Our Partner</h2>
                            <div className={styles["partner__img"]}>
                                <img src={netflix} alt="netflix" />
                                <img src={reddit} alt="reddit" />
                                <img src={amazon} alt="amazon" />
                                <img src={discord} alt="discord" />
                                <img src={spotify} alt="spotify" />
                            </div>
                        </div>
                    </section>





                    {/* <!-- customer testimoni --> */}
                    <section className={`container ${styles["customer"]} mx-auto text-center position-relative mb-5`}>
                        <h2 className="my-3">Loved by Thousands of <br /> Happy Customer</h2>
                        <p className="mb-5">These are the stories of our customers who have visited us with great <br /> pleasure.</p>
                        {/* <!-- card 1 --> */}
                        <div className=" row d-flex justify-content-around align-content-center">
                            <article className={`${styles["card_customer"]} col-md-3 col-lg-3`}>
                                <div className="tex-wrap">
                                    <div className="d-flex justify-content-between justify-content-center">
                                        <div className="text-start d-flex flex-column align-content-center justify-content-center flex-lg-row">
                                            <img className="me-3 rounded-circle" src={pic1} alt="pic1" width="50" height="50" />
                                            <div>
                                                <h4 className="fs-5 fw-bold">Viezh Robert</h4>
                                                <p>Warsaw, Poland</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center p-2">
                                            <p className="fs-4 fw-light ms-3">4.5</p>
                                            <img className="mb-3 ms-1" src={bintang} width="20" height="20" alt="icon_bintang" />
                                        </div>
                                    </div>
                                    <p className="text-start fs-5 mt-3 ">“Wow... I am very happy to spend my whole day here. the Wi-fi
                                        is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                                </div>
                            </article>
                            {/* <!-- card 2 --> */}
                            <article className={`${styles["card_customer"]} col-md-4 col-lg-3 pt-3 d-none d-sm-none d-md-block d-lg-block`}>
                                <div className="text-wrap">
                                    <div className="d-flex justify-content-between justify-content-center align-content-center ">
                                        <div
                                            className="text-start d-flex flex-column align-content-center justify-content-center flex-lg-row">
                                            <img className="me-3" src={pic2} alt="pic2" width="50" height="50" />
                                            <div>
                                                <h4 className="fs-5 fw-bold">Yessica Christy</h4>
                                                <p>Shanxi, China</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center p-md-0 p-2 m-md-auto">
                                            <p className="fs-4 fw-light ms-3">4.5</p>
                                            <img className="mb-3 ms-1" src={bintang} width="20" height="20" alt="icon_bintang" />
                                        </div>
                                    </div>
                                    <p className="text-start fs-5 mt-3 ">“I like it because I like to travel far and still can make my
                                        day better just by drinking their Hazelnut Latte</p>
                                </div>
                            </article>
                            {/* <!-- card 3  --> */}
                            <article className={`${styles["card_customer"]} col-md-4 col-lg-3 pt-3 d-none d-sm-none d-md-none d-lg-block `}>
                                <div className="text-wrap">
                                    <div className=" d-flex justify-content-between align-content-center m-md-auto">
                                        <div className="text-start d-flex">
                                            <img className="me-3" src={pic3} alt="pic3" width="50" height="50" />
                                            <div>
                                                <h4 className="fs-5 fw-bold name-one">Viezh Robert</h4>
                                                <p>Warsaw, Poland</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center p-md-0 p-2 m-md-auto">
                                            <p className="fs-4 fw-light ms-3">4.5</p>
                                            <img className="mb-3 ms-1" src={bintang} width="20" height="20" alt="icon_bintang" />
                                        </div>
                                    </div>
                                    <p className="text-start fs-5 mt-3 ">“This is very unusual for my taste, I haven't liked coffee
                                        before but their coffee is the best! and yup, you have to order the chicken wings, the best
                                        in town!</p>
                                </div>
                            </article>
                        </div>
                        <div className={`${styles["controller"]} py-3 px-5 d-flex justify-content-center align-items-center`}>
                            <div className="">
                                <img className='px-2' src={rounded} alt="bulet" />
                                <img className='px-2' src={rounded} alt="bulet" />
                                <img className='px-2' src={rounded} alt="bulet" />
                            </div>
                        </div>
                        {/* <!-- check promos --> */}
                        <section className={`${styles["card_promo"]} row position-absolute mx-auto d-none d-sm-none d-md-inline-flex`}>
                            <div className="col-12 d-flex justify-content-between align-items-center">
                                <div className="text-start mx-5">
                                    <h2 className="fw-bold mb-3">Check our promo <br /> today!</h2>
                                    <p className="text-muted">Let's see the deals and pick yours!</p>
                                </div>
                                <Link className={`${styles["promo"]} fs-5 text-decoration-none fw-bold hover`} to="/product">See Promo</Link>
                            </div>
                        </section>
                    </section>
                </main>

                <Footer />
            </>
        )
    }
}


export default Home;