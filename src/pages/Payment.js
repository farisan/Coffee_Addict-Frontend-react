import React, { Component } from 'react'

// import Component
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import titlebar from "../utility/WebDinamis"
// import CardPayment from '../components/CardPayment.js'
// import payment_image_1 from "../asset/payment_image_1.png";

// import Css
import styles from "../styles/Payment.module.css"

// import image
import icon_card from "../asset/icon_card.png";
import icon_cod from "../asset/icon_cod.png";
import icon_bank from "../asset/icon_bank.png";
import { connect } from 'react-redux'
import withNavigate from '../helpers/withNavigate.js'



class Payment extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    costing = (price) => {
        return 'IDR ' + parseFloat(price).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }


    render() {
        titlebar("Coffee Addict | Payment")
        return (
            <>
                {/* <!-- Start Navbar --> */}
                <Navbar />
                {/* <!-- End Navbar --> */}

                <main>
                    <div className={`container-fluid ${styles["background-payment"]}`}>
                        <div className={`container ${styles["title-payment"]}`}>
                            <h3>Checkout your <br></br> item now!</h3>
                            <div className="row d-flex justify-content-between gap-5">
                                <div className={`${styles["content-left-payment"]} col-lg-5 col-md-12 col-sm-12 bg-white rounded-5`}>
                                    <div className={styles['box-left']}>
                                        <p>Order Summary</p>
                                        {/* payment 1 */}
                                        <div className={styles['payment-content']}>
                                            <img src={this.props.image} alt='Payment1' width="100px" height="100px"></img>
                                            <div className={styles['payment-center']}>
                                                <p>{this.props.name_product}</p>
                                                <p>x {this.props.counter}</p>
                                                <p>{this.props.size}</p>
                                            </div>
                                            <div className={styles['payment-idr']}>
                                                <p>{this.costing(this.props.price)}</p>
                                            </div>
                                        </div>

                                        {/* subtotal */}
                                        <hr className='mx-5 my-4'></hr>
                                        <div className={styles['total-payment']}>
                                            <div className={styles['total-payment-left']}>
                                                <p>SUBTOTAL</p>
                                                <p>TAX & FEES</p>
                                                <p>SHIPPING</p>
                                            </div>
                                            <div className={styles['total-payment-right']}>
                                                <p>{this.costing(this.props.totalPrice)}</p>
                                                <p>IDR: 20.000</p>
                                                <p>IDR: 10.000</p>
                                            </div>
                                        </div>
                                        <div className={styles['subtotal-payment']}>
                                            <p>TOTAL</p>
                                            <p>IDR 150.000</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12 col-sm-12 d-flex flex-column mb-5">
                                    <div className='row d-flex flex-column'>
                                        <div className='col-12'>
                                            <div className={styles['address-detail']}>
                                                <h2>Address</h2>
                                                <p onClick={() => this.props.navigate("/profile")}>edit</p>
                                            </div>
                                            <div className={styles['box-address']}>
                                                <h5><b className='me-1'>Delivery to :</b>{this.props.displayname}</h5>
                                                <p className={styles['address-column']}>{this.props.address}</p>
                                                <p>{this.props.phone_number}</p>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className={styles['payment-method']}>
                                                <h2>Payment Method</h2>
                                            </div>
                                            <div className={styles['choose-payment']}>
                                                <div className={styles['radio-payment']}>
                                                    <div className={`form-check d-flex flex-row align-items-center ${styles["styling-data-radio"]}`}>
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label" for="flexRadioDefault1"></label>
                                                        <div className={styles['data-content-payment']}>
                                                            <img src={icon_card} alt='icon-card' width="40px" className='rounded-2 mx-3'></img>
                                                            <span>Card</span>
                                                        </div>
                                                    </div>
                                                    <div className={`form-check d-flex flex-row align-items-center ${styles["styling-data-radio"]}`}>
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label" for="flexRadioDefault1"></label>
                                                        <div className={styles['data-content-payment']}>
                                                            <img src={icon_bank} alt='icon-bank' width="40px" className='rounded-2 mx-3'></img>
                                                            <span>Bank</span>
                                                        </div>
                                                    </div>
                                                    <div className={`form-check d-flex flex-row align-items-center ${styles["styling-data-radio"]}`}>
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label" for="flexRadioDefault1"></label>
                                                        <div className={styles['data-content-payment']}>
                                                            <img src={icon_cod} alt='icon-cod' width="40px" className='rounded-2 mx-3'></img>
                                                            <span>Cash On Delivery</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['confirm-pay']}>
                                            <button><span>Confirm and Pay</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>


                {/* <!-- Start Navbar --> */}
                <Footer />
                {/* <!-- End Navbar --> */}
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    console.log(reduxState);
    return {
        address: reduxState.dataProfile.address,
        phone_number: reduxState.dataProfile.phone_number,
        displayname: reduxState.dataProfile.displayname,
        counter: reduxState.counter.number,
        name_product: reduxState.dataProduct.name_product,
        image: reduxState.dataProduct.image,
        size: reduxState.dataProduct.size,
        totalPrice: reduxState.dataProduct.totalPrice,
        price: reduxState.dataProduct.price,
    };
};

export default connect(mapStateToProps)(withNavigate(Payment));
