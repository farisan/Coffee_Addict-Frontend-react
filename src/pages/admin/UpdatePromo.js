import React from 'react'
import { Link } from 'react-router-dom'

// import component
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

// import css
import styles from "../../styles/adminCSS/Updatepromo.module.css"


// import images
import img_product from "../../asset/profil-bg.png";


export default function UpdateProduct() {
    return (
        <>
            <Navbar />
            <div className='container-fluid border-top mb-5'>
                {/* breadcrumb */}
                <div className='container'>
                    <div className='row py-3'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className={`breadcrumb-item ${styles["step-one"]}`}><Link to="/product">Product</Link></li>
                                <li className={`breadcrumb-item ${styles["step-two"]}`} >Add new promo</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* breadcrumb */}

                {/* Left Content */}
                <div className='container'>
                    <div className='row gap-2 d-flex justify-content-between'>
                        <section className='col-lg-5 col-md-12 col-sm-12 d-flex flex-column align-items-center '>
                            <div className='pt-5'>
                                <img className='rounded-circle' src={img_product} alt='img_product' width="250px" height="250px"></img>
                            </div>
                            <button className={`${styles["change-profile"]} mt-5 rounded-5`}>Save Change</button>
                            <div className={`${styles["profile-image"]} text-center rounded-5 mt-3 mb-5`}>
                                <label for="img-profile">Choose Photo</label>
                                <input type="file" name="" id="img-profile" />
                            </div>
                            <div className={`${styles[`delivery-hour`]}`}>
                                <p >Enter the discount :</p>
                            </div>
                            <div className='mt-3 w-100 d-flex align-item-center justify-content-center'>
                                <select className={` ${styles["dropdown-hour"]} ps-3`} >
                                    <option selected>Input discount</option>
                                    <option value="1">1 hour</option>
                                    <option value="2">2 hour</option>
                                    <option value="3">3 hour</option>
                                    <option value="3">4 hour</option>
                                    <option value="3">5  hour</option>
                                </select>
                            </div>
                            <div className={`${styles[`delivery-hour`]} mt-5`}>
                                <p >Expire date :</p>
                            </div>
                            <div className='mt-3 w-100 d-flex align-item-center justify-content-center'>
                                <select className={`${styles["dropdown-hour"]} ps-3 `}>
                                    <option selected>Select start date</option>
                                    <option value="1">1 hour</option>
                                    <option value="2">2 hour</option>
                                    <option value="3">3 hour</option>
                                    <option value="3">4 hour</option>
                                    <option value="3">5  hour</option>
                                </select>
                            </div>
                            <div className='mt-3 w-100 d-flex align-item-center justify-content-center'>
                                <select className={`${styles["dropdown-hour"]} ps-3 `}>
                                    <option selected>Select end date</option>
                                    <option value="1">1 hour</option>
                                    <option value="2">2 hour</option>
                                    <option value="3">3 hour</option>
                                    <option value="3">4 hour</option>
                                    <option value="3">5  hour</option>
                                </select>
                            </div>
                            <div className={`${styles[`delivery-hour`]} mt-5`}>
                                <p >Input coupon code :</p>
                            </div>
                            <div className='mt-3 w-100 d-flex align-item-center justify-content-center mb-5'>
                                <select className={`${styles["dropdown-hour"]} ps-3 `}>
                                    <option selected>Input stock</option>
                                    <option value="1">1 hour</option>
                                    <option value="2">2 hour</option>
                                    <option value="3">3 hour</option>
                                    <option value="3">4 hour</option>
                                    <option value="3">5  hour</option>
                                </select>
                            </div>
                        </section>

                        <section className='col-lg-6 col-md-12 col-sm-12 pt-5 '>
                            <div className={`${styles["data-form"]} d-flex flex-column w-100`}>
                                <label for="">Name :</label>
                                <input type="email" name="" id="" placeholder="Type product name min. 50 characters" />
                                <label for="">Price :</label>
                                <input type="number" name="" id="" placeholder="Type the price" />
                                <label for="">Description :</label>
                                <input type="text" name="" id="" placeholder="Describe your product min. 150 characters" />
                            </div>
                            <div className={`${styles[`input-size`]} mt-5`}>
                                <p className={styles['input-product-size']}>Input product size :</p>
                                <p className={styles['input-product-desc']}>Click size you want to use for this product</p>
                            </div>
                            <div className={`${styles.size} d-flex justify-content-start text-center mt-3`}>
                                <button className=" rounded-circle">R</button>
                                <button className=" rounded-circle">L</button>
                                <button className=" rounded-circle">XL</button>
                            </div>
                            <div className={`${styles[`input-size`]} mt-5`}>
                                <p className={styles['input-product-size']}>Input delivery methods :</p>
                                <p className={styles['input-product-desc']}>Click methods you want to use for this product</p>
                            </div>
                            <div className={`${styles.method} d-flex justify-content-start text-center mt-3`}>
                                <button className=" rounded-3">Home delivery</button>
                                <button className=" rounded-3">Dine in</button>
                                <button className=" rounded-3">Take away</button>
                            </div>
                            <button className={`${styles["save-product"]} rounded-5`}>Save Change</button>
                            <button className={`${styles["cancel-product"]} mt-3 rounded-5`}>Cancel</button>
                        </section>
                    </div>
                </div>
                {/* Left Content */}




            </div>
            <Footer />
        </>
    )
}
