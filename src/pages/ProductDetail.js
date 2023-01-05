import React from "react";
// import { connect } from "react-redux";
import Axios from "axios";
// import withSearchParams from "../helpers/withSearchParams";
// import withParams from "../helpers/withRouteParams";
import {  useNavigate, useParams } from "react-router-dom";

// import css
import styles from "../styles/ProductDetail.module.css";

// import components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import titlebar from "../utility/WebDinamis";
// import CounterActions from "../redux/actions/couter"
// import withNavigate from "../helpers/withNavigate";
// import {
//    setDataProduct,
//    counterUp,
//    counterDown,
//    counterReset,
// } from "../redux/actions/action";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authAction from "../redux/actions/auth";

// import image
// import prod_cold_brew from "../asset/img_coldbrew.png";
const ProductDetail = () => {

   const dispatch = useDispatch()
   const product = useSelector((state) => state.auth.product)
   const { id } = useParams();
   
   const navigate = useNavigate();

   const url = `${process.env.REACT_APP_BACKEND_HOST}/product/${id}`;
   const [name, setName] = useState("");
   const [deliv, setDeliv] = useState("")
   const [size, setSize] = useState("");
   const [price, setPrice] = useState("");
   // const [stock, setStock] = useState("");
   const [image, setImage] = useState("");
   const [description, setDescription] = useState("");
   // const [style, setStyle] = useState(`${styles.selected}`);
   
   useEffect(() => {
      window.scrollTo(0, 0);
      Axios.get(url)
         .then((response) => {
            // console.log(response.data.result.data[0].id);
            // this.props.setDataProduct(
            //    "name_product",
            //    response.data.result.data[0].name
            // );
            // this.props.setDataProduct(
            //    "image",
            //    response.data.result.data[0].image
            // );
            // this.props.setDataProduct(
            //    "size",
            //    response.data.result.data[0].size
            // );
            // this.props.setDataProduct(
            //    "price",
            //    response.data.result.data[0].price
            // );

            setName(response.data.result.data[0].name);
            setImage(response.data.result.data[0].image);
            setDescription(response.data.result.data[0].description);
            setSize(response.data.result.data[0].size);
            setPrice(response.data.result.data[0].price);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   // const totalPrice = () => {
   //    const getPrice = price;
   //    const sumProduct = this.props.counter;
   //    return getPrice * sumProduct;
   // };

   const costing = (price) => {
      return (
         "IDR " +
         parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
   };

   const handleAddtoCart = () => {
      if(!deliv) return (console.log("delivery method harus di isi"))
      dispatch(authAction.productThunk({
         id_product: parseInt(id),
         price: price,
         name_product: name,
         total: price*product.qty,
         image: image,
         size: size,
         delivery_method: parseInt(deliv)
      }))
   }

   titlebar("Coffee Addict | Product Detail");
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
                           <span className={styles.title_product}>
                              {name}
                           </span>
                        </span>
                     </section>
                  </nav>
                  <img
                     className={`${styles.content_left} my-5`}
                     // src={prod_cold_brew}
                     src={image}
                     alt="img_product"
                  />
                  <section
                     className={`${styles.delivery_time_bar} d-flex flex-column justify-content-start text-start p-4 mx-auto`}
                  >
                     <h3 className="fs-3 fw-bold">Delivery Method</h3>
                     <section className="my-4 d-flex flex-wrap">
                        <button value='3' onClick={(e) => setDeliv(e.target.value)}
                           className={deliv === '3' ? `${styles.btn_delivery_time} ${styles.selected} my-sm-2` : `${styles.btn_delivery_time} my-sm-2`}
                        >
                           Dine in
                        </button>
                        <button value='1' onClick={(e) => setDeliv(e.target.value)}
                           className={deliv === '1' ? `${styles.btn_delivery_time} ${styles.selected} my-sm-2` : `${styles.btn_delivery_time} my-sm-2`}
                           
                        >
                           Door Delivery
                        </button>
                        <button value='2' onClick={(e) => setDeliv(e.target.value)}
                           className={deliv === '2' ? `${styles.btn_delivery_time} ${styles.selected} my-sm-2` : `${styles.btn_delivery_time} my-sm-2`}
                           
                        >
                           Pick Up
                        </button>
                     </section>
                  </section>
               </section>
               <article
                  className={`${styles.content_right} col-6 col-sm-12 col-md-6 col-lg-6 text-center d-flex flex-column justify-content-between mx-auto`}
               >
                  <h2 className={styles.title}>{name}</h2>
                  <p className="text-start fs-5">{description}</p>
                  <p className="text-start fs-5">size : {size}</p>
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
                              onClick={() =>
                                 (product.qty === 1) ? dispatch(authAction.productThunk({qty: product.qty})) : dispatch(authAction.productThunk({qty: product.qty - 1}))
                              }
                           >
                              -
                           </button>
                        </span>
                        <input type="text" maxlength="2" value={product.qty} />
                        <span>
                           <button
                              type="button"
                              onClick={() => dispatch(authAction.productThunk({qty: product.qty + 1}))}
                           >
                              +
                           </button>
                        </span>
                     </div>
                     <p className={styles.price}>
                        {costing(price*product.qty)}
                     </p>
                  </section>
                  <span
                     className={`${styles.cart} mb-3 mb-sm-5 mb-md-5 mb-lg-3`}
                  >
                     Add to Cart
                  </span>
                  <br />
                  <span className={styles.staff}>Ask a Staff</span>
               </article>
               <section
                  className={`${styles.choose_checkout} row justify-content-between flex-md-column flex-lg-row`}
               >
                  {/* <section className={`${styles.size} col-4 text-center ms-0`}>
                     <h4>Choose a size</h4>
                     <button
                        className="bg-secondary opacity-50 rounded-circle"
                        disabled
                     >
                        M
                     </button>
                     <button
                        className="bg-secondary opacity-50 rounded-circle"
                        disabled
                     >
                        L
                     </button>
                     <button
                        className="bg-secondary opacity-50 rounded-circle"
                        disabled
                     >
                        XL
                     </button>
                  </section> */}
                  <section
                     className={`${styles.checkout} col-6 d-flex justify-content-between align-content-center`}
                  >
                     <div className="d-flex justify-content-center align-items-center">
                        <img className="me-3" src={image} alt="img_product" />
                        <section className="d-flex flex-column justify-content-center">
                           <h5 className="fw-bold fs-4">{name}</h5>
                           <p>
                              Quantity : x{product.qty}
                           </p>
                           <p>
                              Size : {size}
                           </p>
                        </section>
                     </div>
                     <div className="d-flex justify-content-center align-items-center">
                        <span className="fs-4 fw-bold">Checkout</span>
                        <button
                           className={styles.button_checkout}
                           onClick={() => {handleAddtoCart();navigate(`/payment`)}}
                        >
                           <i className="bi bi-arrow-right"></i>
                        </button>
                     </div>
                  </section>
               </section>
            </div>
         </main>
         <Footer />
      </>
   );
};
export default ProductDetail;
// const mapDispatchToProps = {
//    setDataProduct,
//    counterUp,
//    counterDown,
//    counterReset,
// };

// const mapStateToProps = (reduxState) => {
//    console.log(reduxState);
//    return {
//       counter: reduxState.counter.number,
//    };
// };

// export default connect(mapStateToProps)(withparams(ProductDetail));
// export default connect(
//    mapStateToProps,
//    mapDispatchToProps
// )(withNavigate(withParams(ProductDetail)));
