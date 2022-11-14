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
// import CounterActions from "../redux/actions/couter"
import withNavigate from "../helpers/withNavigate";
import { setDataProduct, counterUp, counterDown, counterReset } from "../redux/actions/action"

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
      style: `${styles.selected}`
   }

   componentDidMount() {
      window.scrollTo(0, 0)
      Axios.get(this.state.url)
         .then((response) => {
            // console.log(response.data.result.data[0].id);
            this.props.setDataProduct("name_product", response.data.result.data[0].name)
            this.props.setDataProduct("image", response.data.result.data[0].image)
            this.props.setDataProduct("size", response.data.result.data[0].size)
            this.props.setDataProduct("price", response.data.result.data[0].price)

            this.setState({
               name: response.data.result.data[0].name,
               image: response.data.result.data[0].image,
               description: response.data.result.data[0].description,
               size: response.data.result.data[0].size,
               price: response.data.result.data[0].price,
            })
         })
         .catch((err) => { console.log(err); })
   }

   totalPrice = () => {
      const getPrice = this.state.price
      const sumProduct = this.props.counter
      return getPrice * sumProduct
   }




   costing = (price) => {
      return 'IDR ' + parseFloat(price).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
   }

   render() {
      titlebar("Coffee Addict | Product Detail")
      // console.log(this.totalPrice());
      this.props.setDataProduct("totalPrice", this.totalPrice());
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
                              <Link className={styles.title_product} to="/product">
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
                           <button className={`${styles.btn_delivery_time} bg-secondary opacity-50`} disabled>Yes</button>
                           <button className={`${styles.btn_delivery_time} bg-secondary opacity-50`} disabled>No</button>
                        </section>
                        <section className="d-flex align-items-center">
                           <span className="fs-5 me-3 fw-light">Set Time</span>
                           <input
                              className={styles.set_time}
                              type="text"
                              name="set_time"
                              id="set_time"
                              disabled
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
                                 onClick={() => this.props.counterDown("COUNTER_DOWN")}
                              >-</button>
                           </span>
                           <input type="text" maxlength="2" value={this.props.counter} />
                           <span>
                              <button
                                 type="button"
                                 onClick={() => this.props.counterUp("COUNTER_UP")}
                              >+</button>
                           </span>
                        </div>
                        <p className={styles.price}>{this.costing(this.totalPrice())}</p>
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
                        <button className="bg-secondary opacity-50 rounded-circle" disabled>M</button>
                        <button className="bg-secondary opacity-50 rounded-circle" disabled>L</button>
                        <button className="bg-secondary opacity-50 rounded-circle" disabled>XL</button>
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
                           <span className="fs-4 fw-bold" >Checkout</span>
                           <button className={styles.button_checkout} onClick={() => this.props.navigate(`/payment`)}>
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


const mapDispatchToProps = {
   setDataProduct,
   counterUp,
   counterDown,
   counterReset,
};

const mapStateToProps = (reduxState) => {
   console.log(reduxState);
   return {
      counter: reduxState.counter.number,

   };
};

// export default connect(mapStateToProps)(withparams(ProductDetail));
export default connect(mapStateToProps, mapDispatchToProps)(withNavigate(withParams(ProductDetail)));


