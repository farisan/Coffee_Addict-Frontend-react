import React from "react";

// import Component
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import titlebar from "../utility/WebDinamis";
// import CardPayment from '../components/CardPayment.js'


// import Css
import styles from "../styles/Payment.module.css";

// import image
import icon_card from "../asset/icon_card.png";
import icon_cod from "../asset/icon_cod.png";
import icon_bank from "../asset/icon_bank.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from 'axios'
import authAction from "../redux/actions/auth"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-bootstrap";

const Payment = () => {

   const navigate = useNavigate();
   const dispatch = useDispatch()

   const product = useSelector((state) => state.auth.product)
   const profile = useSelector((state) => state.auth.profile)

   const [payment, setPayment] = useState('')
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const costing = (price) => {
      return (
         "IDR " +
         parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
   };

   const handleResetRedux = () => {
      dispatch(authAction.productThunk({
         id_product: null,
         price: 0,
         name_product: null,
         status: null,
         delivery: null,
         total: 0,
         image: null,
         qty: 1,
         payment_method: null,
         size: null,
         id_promo: null,
      }))
   }

   const handleTransactions = () => {
      setLoading(true)
      const getToken = localStorage.getItem('token')
      if(!payment) return (toast.error("Choose payment method", {
         position: toast.POSITION.TOP_RIGHT,
      }), setLoading(false))
      axios.post(`${process.env.REACT_APP_BACKEND_HOST}/transactions`,{
         product_id : product.id_product,
         promo_id : product.id_promo,
         delivery_id : product.delivery_method,
         method_payment : payment,
         qty : product.qty,
         tax : 10,
         total : (product.qty*product.price) + ((product.price*product.qty*10)/100) + (product.delivery_method === 1 ? 5000 : 0),
         status : (payment === 'Cash On Delivery') ? 'pending' : 'paid'
      },
      {
         headers: {
            'x-access-token' : getToken
         }
      })
      .then((res) => {
         handleResetRedux()
         toast.success("Transactions Success", {
            position: toast.POSITION.TOP_RIGHT,
         })
         navigate('/product')
         setLoading(false)
      })
      .catch((err) => {
         console.log(err)
         toast.error('internal server error', {
            position: toast.POSITION.TOP_RIGHT,
         })
         setLoading(false)
      })
   }

   titlebar("Coffee Addict | Payment");
   return (
      <>
         {/* <!-- Start Navbar --> */}
         <Navbar />
         {/* <!-- End Navbar --> */}
         <ToastContainer />
         <main>
            <div className={`container-fluid ${styles["background-payment"]}`}>
               <div className={`container ${styles["title-payment"]}`}>
                  <h3>
                     Checkout your <br></br> item now!
                  </h3>
                  <div className="row d-flex justify-content-between gap-5">
                     <div
                        className={`${styles["content-left-payment"]} col-lg-5 col-md-12 col-sm-12 bg-white rounded-5`}
                     >
                        <div className={styles["box-left"]}>
                           <p>Order Summary</p>
                           {/* payment 1 */}
                           <div className={styles["payment-content"]}>
                              <img
                                 src={product.image}
                                 alt="Payment1"
                                 width="100px"
                                 height="100px"
                              ></img>
                              <div className={styles["payment-center"]}>
                                 <p>{product.name_product}</p>
                                 <p>x {product.qty}</p>
                                 <p>size : {product.size}</p>
                              </div>
                              <div className={styles["payment-idr"]}>
                                 <p>{costing(product.price)}</p>
                              </div>
                           </div>

                           {/* subtotal */}
                           <hr className="mx-5 my-4"></hr>
                           <div className={styles["total-payment"]}>
                              <div className={styles["total-payment-left"]}>
                                 <p>SUBTOTAL</p>
                                 <p>TAX & FEES (ppn 10%)</p>
                                 <p>SHIPPING</p>
                                 <p>{product.disc === null ? null : 'Discount (%)'}</p>
                              </div>
                              <div className={styles["total-payment-right"]}>
                                 <p>{costing(product.disc === null ? product.qty*product.price : (product.qty*product.price)-((product.qty*product.price)*(product.disc/100)))}</p>
                                 <p>{costing((product.price*product.qty*10)/100)}</p>
                                 <p>{product.delivery_method === 1 ? costing(5000) : costing(0)}</p>
                                 <p>{product.disc === null ? null : `${product.disc} %`}</p>
                              </div>
                           </div>
                           <div className={styles["subtotal-payment"]}>
                              <p>TOTAL</p>
                              <p>{costing((product.disc === null ? product.qty*product.price : (product.qty*product.price)-((product.qty*product.price)*(product.disc/100))) + ((product.price*product.qty*10)/100) + (product.delivery_method === 1 ? 5000 : 0))}</p>
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-5 col-md-12 col-sm-12 d-flex flex-column mb-5">
                        <div className="row d-flex flex-column">
                           <div className="col-12">
                              <div className={styles["address-detail"]}>
                                 <h2>Address</h2>
                                 <p style={{cursor:'pointer'}} onClick={() => navigate("/profile")}>
                                    edit
                                 </p>
                              </div>
                              <div className={styles["box-address"]}>
                                 <h5>
                                    <b className="me-1">Delivery to :</b>
                                    {profile.displayname}
                                 </h5>
                                 <p className={styles["address-column"]}>
                                    {profile.address}
                                 </p>
                                 <p>{profile.phone_number}</p>
                              </div>
                           </div>
                           <div className="col-12">
                              <div className={styles["payment-method"]}>
                                 <h2>Payment Method</h2>
                              </div>
                              <div className={styles["choose-payment"]}>
                                 <div className={styles["radio-payment"]}>
                                    <div
                                       className={`form-check d-flex flex-row align-items-center ${styles["styling-data-radio"]}`}
                                    >
                                       <input
                                          className="form-check-input"
                                          type="radio"
                                          value="Card"
                                          name="flexRadioDefault"
                                          id="flexRadioDefault1"
                                          onChange={(e) => setPayment(e.target.value)}
                                       />
                                       <label
                                          className="form-check-label"
                                          for="flexRadioDefault1"
                                       ></label>
                                       <div
                                          className={
                                             styles["data-content-payment"]
                                          }
                                       >
                                          <img
                                             src={icon_card}
                                             alt="icon-card"
                                             width="40px"
                                             className="rounded-2 mx-3"
                                          ></img>
                                          <span>Card</span>
                                       </div>
                                    </div>
                                    <div
                                       className={`form-check d-flex flex-row align-items-center ${styles["styling-data-radio"]}`}
                                    >
                                       <input
                                          className="form-check-input"
                                          type="radio"
                                          value='Bank'
                                          name="flexRadioDefault"
                                          id="flexRadioDefault1"
                                          onChange={(e) => setPayment(e.target.value)}
                                       />
                                       <label
                                          className="form-check-label"
                                          for="flexRadioDefault1"
                                       ></label>
                                       <div
                                          className={
                                             styles["data-content-payment"]
                                          }
                                       >
                                          <img
                                             src={icon_bank}
                                             alt="icon-bank"
                                             width="40px"
                                             className="rounded-2 mx-3"
                                          ></img>
                                          <span>Bank</span>
                                       </div>
                                    </div>
                                    <div
                                       className={`form-check d-flex flex-row align-items-center ${styles["styling-data-radio"]}`}
                                    >
                                       <input
                                          className="form-check-input"
                                          type="radio"
                                          value='Cash On Delivery'
                                          onChange={(e) => setPayment(e.target.value)}
                                          name="flexRadioDefault"
                                          id="flexRadioDefault1"
                                       />
                                       <label
                                          className="form-check-label"
                                          for="flexRadioDefault1"
                                       ></label>
                                       <div
                                          className={
                                             styles["data-content-payment"]
                                          }
                                       >
                                          <img
                                             src={icon_cod}
                                             alt="icon-cod"
                                             width="40px"
                                             className="rounded-2 mx-3"
                                          ></img>
                                          <span>Cash On Delivery</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className={styles["confirm-pay"]}>
                              <button onClick={handleTransactions}>
                                 {loading ? <div className="d-flex justify-content-center align-items-center mx-auto">
                        <Spinner animation="border" variant="info" />
                     </div> : <span>Confirm and Pay</span>}
                              </button>
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
   );
};
export default Payment;
// const mapStateToProps = (reduxState) => {
//    console.log(reduxState);
//    return {
//       address: reduxState.dataProfile.address,
//       phone_number: reduxState.dataProfile.phone_number,
//       displayname: reduxState.dataProfile.displayname,
//       counter: reduxState.counter.number,
//       name_product: reduxState.dataProduct.name_product,
//       image: reduxState.dataProduct.image,
//       size: reduxState.dataProduct.size,
//       totalPrice: reduxState.dataProduct.totalPrice,
//       price: reduxState.dataProduct.price,
//    };
// };

// export default connect(mapStateToProps)(withNavigate(Payment));
