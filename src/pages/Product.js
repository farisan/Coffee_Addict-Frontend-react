import React from "react";
import axios from "axios";
// import css
import styles from "../styles/Product.module.css";

// import navbar dan footer
import Navbar from "../components/Navbar";
import NavbarAdmin from "../components/NavbarAdmin"
import NavbarnotLogin from "../components/Navbar-notLogin";
import Footer from "../components/Footer";
import CardPromo from "../components/CardPromo";
import CardProduct from "../components/Card-Product";
import titlebar from "../utility/WebDinamis";
import { useState, useEffect } from "react";
import {  useNavigate  } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";

const Product = () => {


   const url = `${process.env.REACT_APP_BACKEND_HOST}/product`;
   const profile = useSelector((state) => state.auth.profile)


   const [product, setProduct] = useState([]);
   let [currentPage, setCurrentPage] = useState(1);
   //   const [totalPage, setTotalPage] = useState("");
   const [searchParam, setSearchParam] = useState({});
   const [category, setCategory] = useState("favorite");
   const [sorting, setSorting] = useState("favorite");
   const [prev, setPrev] = useState("");
   const [next, setNext] = useState("");
   const [promo, setPromo] = useState([]);
   const [loading, setLoading] = useState(false);
   const [loading_promo, setLoading_promo] = useState(false)
   const navigate = useNavigate();
   

   useEffect(() => {      
      setLoading(true)
      setLoading_promo(true)
      axios
         .get(`${process.env.REACT_APP_BACKEND_HOST}/promo/Getpromo`)
         .then((res) => {
            setPromo(res.data.result);
            console.log(res.data.result);
            setLoading(false)
            setLoading_promo(false)
         })
         .catch((err) => {
            console.log(err);
            setLoading(false)
            setLoading_promo(false)
         });
   }, []);

   // Kondisi ketika di refresh
   useEffect(() => {
      setLoading(true);
      setSorting(sorting);
      setCurrentPage(1);
      axios
         .get(
            `${url}?category=${category}&sorting=${sorting}&page=${1}&limit=12`
         )
         .then((res) => {
            // console.log(res.data.result);
            setProduct(res.data.result.data);
            //   setTotalPage(res.data.result.totalPage);
            setNext(res.data.result.next);
            setPrev(res.data.result.prev);

            console.log(res.data.result);
            setLoading(false);
         })
         .catch((err) => console.log(err));
      navigate(`?category=${category}&sorting=${sorting}&page=${1}&limit=12`);
   }, [sorting, category]);

   const costing = (price) => {
      return (
         "IDR " +
         parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
   };

   const Favorite = () => {
      setSorting("favorite");
      setCategory("favorite");
   };
   const Coffee = () => {
      setCategory("coffee");
      setSorting("");
   };
   const NonCoffee = () => {
      setCategory("non_coffee");
      setSorting("");
   };
   const Food = () => {
      setCategory("foods");
      setSorting("");
   };
   const AddOn = () => {
      setCategory("addon");
      setSorting("");
   };
   const Sort = (e) => {
      setSorting(e.target.value);
      if (category === "favorite") return setCategory("");
   };

   const getPrevProducts = () => {
      setCurrentPage(currentPage - 1);
      navigate(
         `?category=${category}&sorting=${sorting}&page=${
            currentPage - 1
         }&limit=12`
      );
      axios
         .get(prev)
         .then((res) => {
            setProduct(res.data.result.data);
            setNext(res.data.result.next);
            setPrev(res.data.result.prev);
            window.scrollTo(0, 0);
         })
         .catch((err) => console.log(err));
   };
   const getNextProducts = () => {
      setCurrentPage(currentPage + 1);
      navigate(
         `?category=${category}&sorting=${sorting}&page=${
            currentPage + 1
         }&limit=12`
      );
      axios
         .get(next)
         .then((res) => {
            setProduct(res.data.result.data);
            setNext(res.data.result.next);
            setPrev(res.data.result.prev);
            window.scrollTo(0, 0);
         })
         .catch((err) => console.log(err));
   };

   

   titlebar("Coffee Addict | Product");
   return (
      <>
         {profile.role === 'admin' ? <NavbarAdmin /> : profile.role === 'user' ? <Navbar /> : <NavbarnotLogin />}
         <div className={`${styles["border-top"]} container-fluid`}>
            <div className="">
               <div className="row d-flex justify-content-center ">
                  <div className="col-lg-4 col-md-12 col-sm-12 border-end d-flex flex-column align-items-center w-sm-50 px-5">
                     <div
                        className={`${styles["product-left"]} d-flex flex-column`}
                     >
                        <span
                           className={`${styles["title-promo"]} text-center mt-4`}
                        >
                           Promo Today
                        </span>
                        <span
                           className={`${styles["desc-promo"]} text-center mt-3 mb-5 px-5`}
                        >
                           Coupons will be updated every weeks. Check them out!
                        </span>
                     </div>
                     {/* Card promo start */}
                     {loading_promo ? (
                        <div className="d-flex justify-content-center align-items-center my-5">
                           <Spinner animation="border" />
                        </div>
                     ) : (
                        <>
                           {promo.length === 0 ? (
                              <div className="py-5 my-5">
                                 <h1 className="text-center fs-3 my-5 py-5">
                                    Promo Empty
                                 </h1>
                              </div>
                           ) : (
                              <div className={styles.card_bar}>
                                 {promo.map((e, index) => (
                                    <CardPromo
                                       key={e.id}
                                       image={e.image}
                                       id={e.product_id}
                                       code={e.code}
                                       name={e.name}
                                       size={e.size}
                                       discount={e.discount}
                                       hex={e.hex_color}
                                       id_promo={e.id}
                                    />
                                 ))}
                                 {/* card promo end */}
                              </div>
                           )}

                           {promo.length === 0 ? null : (
                              <div
                                 className={`${styles["noted"]} d-flex flex-column my-5 justify-content-start w-100`}
                              >
                                 <span className="py-3">
                                    Terms and Condition
                                 </span>
                                 <p>1. You can only apply 1 coupon per day</p>
                                 <p>2. It only for dine in</p>
                                 <p>3. Buy 1 get 1 only for new user</p>
                                 <p>
                                    4. Should make member card to apply coupon
                                 </p>
                              </div>
                           )}
                        </>
                     )}
                     {/* {profile.role !== null ?  : null} */}
                  {profile.role === 'admin' ? <button
                  onClick={()=> navigate('/addProduct')}
                    className={`${styles["apply-coupon"]} mt-5 rounded-5 w-100`}
                  >
                    Add product
                  </button> : null} 
                  {profile.role === 'admin' ? <button
                  onClick={()=> navigate('/addpromo')}
                    className={`${styles["apply-coupon"]} mt-5 rounded-5 w-100`}
                  >
                    {profile.role === "admin" ? "add coupon" : "Apply Coupon"}
                  </button> : null}
                  </div>
                  {/* product */}
                  <div className="col-lg-8 col-md-12 col-sm-12">
                     <div
                        className={`${styles["nav-product"]} d-flex flex-row justify-content-around mt-4`}
                     >
                        <span>
                           <p
                              style={
                                 category === "favorite"
                                    ? {
                                         borderBottom: "2px solid #6A4029",
                                         fontFamily: "Rubik",
                                         fontStyle: "normal",
                                         fontWeight: 700,
                                         fontSize: "15px",
                                         color: "#6A4029",
                                      }
                                    : null
                              }
                              className={`${styles.point}`}
                              value="favorite"
                              onClick={() => {
                                 Favorite();
                                 setSearchParam({ category: "favorite" });
                              }}
                           >
                              Favorite & Promo
                           </p>
                        </span>

                        <span>
                           <p
                              style={
                                 category === "coffee"
                                    ? {
                                         borderBottom: "2px solid #6A4029",
                                         fontFamily: "Rubik",
                                         fontStyle: "normal",
                                         fontWeight: 700,
                                         fontSize: "15px",
                                         color: "#6A4029",
                                      }
                                    : null
                              }
                              className={styles.point}
                              value="coffee"
                              onClick={() => {
                                 Coffee();
                                 setSearchParam({ category: "coffee" });
                              }}
                           >
                              Coffee
                           </p>
                        </span>

                        <span>
                           <p
                              style={
                                 category === "non_coffee"
                                    ? {
                                         borderBottom: "2px solid #6A4029",
                                         fontFamily: "Rubik",
                                         fontStyle: "normal",
                                         fontWeight: 700,
                                         fontSize: "15px",
                                         color: "#6A4029",
                                      }
                                    : null
                              }
                              className={styles.point}
                              value="non coffee"
                              onClick={() => {
                                 NonCoffee();
                                 setSearchParam({ category: "non coffee" });
                              }}
                           >
                              Non Coffee
                           </p>
                        </span>

                        <span>
                           <p
                              style={
                                 category === "foods"
                                    ? {
                                         borderBottom: "2px solid #6A4029",
                                         fontFamily: "Rubik",
                                         fontStyle: "normal",
                                         fontWeight: 700,
                                         fontSize: "15px",
                                         color: "#6A4029",
                                      }
                                    : null
                              }
                              className={styles.point}
                              value="food"
                              onClick={() => {
                                 Food();
                                 setSearchParam({ category: "food" });
                              }}
                           >
                              Foods
                           </p>
                        </span>

                        <span>
                           <p
                              style={
                                 category === "addon"
                                    ? {
                                         borderBottom: "2px solid #6A4029",
                                         fontFamily: "Rubik",
                                         fontStyle: "normal",
                                         fontWeight: 700,
                                         fontSize: "15px",
                                         color: "#6A4029",
                                      }
                                    : null
                              }
                              className={styles.point}
                              value="addon"
                              onClick={() => {
                                 AddOn();
                                 setSearchParam({ category: "addon" });
                              }}
                           >
                              Add-on
                           </p>
                        </span>
                     </div>
                     <div
                        className={`d-flex justify-content-end w-100 container`}
                     >
                        {category === "favorite" ? null : (
                           <select
                              className={`form-select form-select-sm ${styles["sort"]}`}
                              aria-label=".form-select-sm example"
                              onChange={Sort}
                              value={sorting}
                           >
                              <option value="">Sorting</option>
                              <option value="cheapest">cheapest</option>
                              <option value="expensive">expensive</option>
                              <option value="newest">newest</option>
                              <option value="lates">lates</option>
                           </select>
                        )}
                     </div>
                     {loading ? (
                        <div className="d-flex justify-content-center align-items-center mt-5">
                           <Spinner animation="border" />
                        </div>
                     ) : (
                        <>
                           {product.length === 0 ? (
                              <div className="py-5 my-5">
                                 <h1 className="text-center fs-3 my-5 py-5">
                                    Product Not Found
                                 </h1>
                              </div>
                           ) : (
                              <div
                                 className={`d-flex flex-wrap ${styles["list-content"]}`}
                              >
                                 {product.map((e, key) => (
                                    <CardProduct
                                       key={e.id}
                                       id={e.id}
                                       params={e.id}
                                       product_name={e.name}
                                       size={e.size}
                                       price={costing(e.price)}
                                       image_product={e.image}
                                    />
                                 ))}
                              </div>
                           )}

                           <div className="ms-5 mt-5 mb-3">
                              <p className={styles["note-price"]}>
                                 *the price has been cutted by discount appears
                              </p>
                           </div>

                           <div className="container d-flex justify-content-end mb-5">
                              <button
                                 className={`${styles["button-prev"]} ${
                                    prev === null ? "d-none" : "d-block"
                                 }`}
                                 onClick={getPrevProducts}
                                 disabled={prev === null}
                              >
                                 Prev
                              </button>
                              <button
                                 className={`${styles["button-next"]} ${
                                    next === null ? "d-none" : "d-block"
                                 }`}
                                 onClick={getNextProducts}
                                 disabled={next === null}
                              >
                                 Next
                              </button>
                           </div>
                        </>
                     )}
                  </div>
               </div>
            </div>
         </div>

         <Footer />
      </>
   );
};

export default Product;
