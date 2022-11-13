import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from 'axios'
// import withSearchParams from "../helpers/withSearchParams";
import withParams from "../helpers/withRouteParams";
import { Link } from 'react-router-dom'

// import css
import styles from "../styles/ProductDetail.module.css";

// import components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import titlebar from "../utility/WebDinamis"
import CounterActions from "../redux/actions/couter"

// import image
// import prod_cold_brew from "../asset/img_coldbrew.png";


class ProductDetail extends Component {

   state = {
      url: `${process.env.REACT_APP_BACKEND_HOST}coffee/product/${this.props.params.id}`,
      name: "",
      category: "",
      size: "",
      price: "",
      stock: "",
      image: "",
      description: "",
   }

   componentDidMount() {
      Axios.get(this.state.url)
         .then((response) => {
            // console.log(response.data.result.data[0].image);
            this.setState({
               name: response.data.result.data[0].name,
               image: response.data.result.data[0].image,
               description: response.data.result.data[0].description,
               size: response.data.result.data[0].size,
               price: this.costing(response.data.result.data[0].price),
            })
         })
         .catch((err) => { console.log(err); })
   }




   costing = (price) => {
      return 'IDR ' + parseFloat(price).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
   }

   render() {
      titlebar("Coffee Addict | Product Detail")
      return (
         <>
            <Navbar />
            <main className="container">
               <div className="row d-flex justify-content-center align-content-center flex-column flex-md-row position-relative">
                  {/* breadcrumb */}
                  <section className="col-6 col-sm-12 col-lg-6 col-md-6 text-center">
                     <nav className="text-start">
                        <section className="text-start align-items-start fs-5">
                           Favorite & Promo <i className="bi bi-chevron-right"></i>
                           <span>
                              <Link className={styles.title_product} to="/">
                                 product
                              </Link>
                           </span>
                        </section>
                     </nav>
                     <img
                        className={`${styles.content_left} my-5`}
                        // src={prod_cold_brew}
                        src={this.state.image}
                        alt="img_product"
                     />
                     <section
                        className={`${styles.delivery_time_bar} d-flex flex-column justify-content-start text-start p-4 mx-auto`}
                     >
                        <h3 className="fs-3 fw-bold">Delivery and Time</h3>
                        <section className="my-4 d-flex flex-wrap">
                           <button
                              className={`${styles.btn_delivery_time} ${styles.selected} my-sm-2`}>
                              Dine in
                           </button>
                           <button className={`${styles.btn_delivery_time} my-sm-2`}>
                              Door Delivery
                           </button>
                           <button className={`${styles.btn_delivery_time} my-sm-2`}>
                              Pick Up
                           </button>
                        </section>
                        <section className="mt-2 mb-4">
                           <span className={styles.now}>Now</span>
                           <button
                              className={`${styles.btn_delivery_time} ${styles.selected}`}
                           >
                              Yes
                           </button>
                           <button className={styles.btn_delivery_time}>No</button>
                        </section>
                        <section className="d-flex align-items-center">
                           <span className="fs-5 me-3 fw-light">Set Time</span>
                           <input
                              className={styles.set_time}
                              type="text"
                              name="set_time"
                              id="set_time"
                              placeholder="Enter time for reservation"
                           />
                        </section>
                     </section>
                  </section>
                  <article
                     className={`${styles.content_right} col-6 col-sm-12 col-md-6 col-lg-6 text-center d-flex flex-column justify-content-between mx-auto`}>
                     <h2 className={styles.title}>{this.state.name}</h2>
                     <p className="text-start fs-5">
                        {this.state.description}
                     </p>
                     <p className={`${styles.info} text-start mt-5`}>
                        Delivery only on <span>Monday to</span> <br />
                        <span>friday</span> at <span>1 - 7 pm</span>
                     </p>
                     <section className="d-flex justify-content-between align-items-center">
                        <div
                           className={`${styles.qty} d-flex justify-content-center align-items-center`}
                        >
                           <span>
                              <button
                                 type="button"
                                 onClick={() => this.props.dispatch(CounterActions.counterDown())}
                              >-</button>
                           </span>
                           <input type="text" maxlength="2" value={this.props.counter} />
                           <span>
                              <button
                                 type="button"
                                 onClick={() => this.props.dispatch(CounterActions.counterUp())}
                              >+</button>
                           </span>
                        </div>
                        <p className={styles.price}>{this.state.price}</p>
                     </section>
                     <span className={`${styles.cart} mb-3 mb-sm-5 mb-md-5 mb-lg-3`}>
                        Add to Cart
                     </span>
                     <br />
                     <span className={styles.staff}>Ask a Staff</span>
                  </article>
                  <section className={`${styles.choose_checkout} row justify-content-between flex-md-column flex-lg-row`}>
                     <section className={`${styles.size} col-4 text-center ms-0`}>
                        <h4>Choose a size</h4>
                        <button className=" rounded-circle">R</button>
                        <button className=" rounded-circle">L</button>
                        <button className=" rounded-circle">XL</button>
                     </section>
                     <section className={`${styles.checkout} col-6 d-flex justify-content-between align-content-center`}>
                        <div className="d-flex justify-content-center align-items-center">
                           <img
                              className="me-3"
                              src={this.state.image}
                              alt="img_product"
                           />
                           <section className="d-flex flex-column justify-content-center">
                              <h5 className="fw-bold fs-4">{this.state.name}</h5>
                              <span>x{`${this.props.counter}`} (Size - {this.state.size})</span>
                           </section>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                           <span className="fs-4 fw-bold">Checkout</span>
                           <button className={styles.button_checkout}>
                              <i className="bi bi-arrow-right"></i>
                           </button>
                        </div>
                     </section>
                  </section>
               </div >
            </main >
            <Footer />
         </>
      )
   }
}


const mapStateToProps = (reduxState) => {
   console.log(reduxState);
   return {
      counter: reduxState.counter.number,
   };
};
const productdetailParams = withParams(ProductDetail)
// export default connect(mapStateToProps)(withparams(ProductDetail));
export default connect(mapStateToProps)(productdetailParams);


