
import React, { Component } from "react";
// import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

// import css
import styles from "../styles/Product.module.css"


// import navbar dan footer
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CardProduct from "../components/Card-Product"
import titlebar from "../utility/WebDinamis"


// import image
import promo_one from "../asset/icon_promo-1.png"
import promo_two from "../asset/icon_promo-2.png"
import promo_four from "../asset/icon_promo-4.png"




class Product extends Component {

    // State awal
    state = {
        product: [],
        url: `${process.env.REACT_APP_BACKEND_HOST}coffee/product/?sorting=favorite&page=1&limit=12`,
        coffee: `${process.env.REACT_APP_BACKEND_HOST}coffee/product/?category=coffee&page=1&limit=12`,
        non_coffee: `${process.env.REACT_APP_BACKEND_HOST}coffee/product/?category=non_coffee&page=1&limit=12`,
        food: `${process.env.REACT_APP_BACKEND_HOST}coffee/product/?category=foods&page=1&limit=12`,
        addons: `${process.env.REACT_APP_BACKEND_HOST}coffee/product/?category=addon&page=1&limit=12`,
    };

    // Kondisi ketika di refresh
    componentDidMount() {
        axios.get(this.state.url)
            .then((res) => {
                this.setState({ product: res.data.result.data })
            })
            .catch((err) => console.log(err));
    }

    Favorite = () => {
        axios
            .get(this.state.url)
            .then((res) => this.setState({ product: res.data.result.data }))
            .catch((err) => console.log(err));

    };
    Coffee = () => {
        axios
            .get(this.state.coffee)
            .then((res) => this.setState({ product: res.data.result.data }))
            .catch((err) => console.log(err));
    };
    NonCoffee = () => {
        axios
            .get(this.state.non_coffee)
            .then((res) => this.setState({ product: res.data.result.data }))
            .catch((err) => console.log(err));
    };
    Food = () => {
        axios
            .get(this.state.food)
            .then((res) => this.setState({ product: res.data.result.data }))
            .catch((err) => console.log(err));
    };
    AddOn = () => {
        axios
            .get(this.state.addons)
            .then((res) => this.setState({ product: res.data.result.data }))
            .catch((err) => console.log(err));
    };




    render() {
        titlebar("Coffee Addict | Product")
        return (
            <>

                <Navbar />

                <section className={`${styles["style-bd"]} container-fluid d-flex flex-row flex-wrap`}>
                    <aside className={`${styles["product-left"]} d-flex flex-column align-items-center`}>
                        <span className={`${styles["title-promo"]} text-center mt-4`}>Promo Today</span>
                        <span className={`${styles["desc-promo"]} text-center mt-3 px-5`}>Coupons will be updated every weeks. Check them out!
                        </span>
                        <div className={`${styles["promo-one"]} d-flex mt-5 py-2 `}>
                            <Link to="">
                                <img src={promo_one} alt="pic-promo" />
                            </Link>
                            <div className={`${styles["description-promo"]} py-2`}>
                                <span>HAPPY MOTHER'S DAY!</span>
                                <p>Get one of our favorite menu for free!</p>
                            </div>
                        </div>
                        <div className={`${styles["promo-two"]} d-flex mt-3 mx-3 py-2 bg-warning`}>
                            <Link to="">
                                <img src={promo_two} alt="pic-promo" />
                            </Link>
                            <div className={`${styles["description-promo"]} py-2`}>
                                <span>Get a cup of coffee for free on sunday morning</span>
                                <p>Only at 7 to 9 AM</p>
                            </div>
                        </div>
                        <div className={`${styles["promo-one"]} d-flex mt-3 py-2 `}>
                            <Link to="">
                                <img src={promo_one} alt="pic-promo" />
                            </Link>
                            <div className={`${styles["description-promo"]} py-2`}>
                                <span>HAPPY MOTHER'S DAY!</span>
                                <p>Get one of our favorite menu for free!</p>
                            </div>
                        </div>
                        <div className={`${styles["promo-four"]} d-flex mt-3 mx-3 `}>
                            <Link to="">
                                <img src={promo_four} alt="pic-promo" />
                            </Link>
                            <div className={`${styles["description-promo"]} py-3`}>
                                <span>HAPPY HALLOWEEN!</span>
                                <p>Do you like chicken wings? Get 1 free only if you buy pinky promise</p>
                            </div>
                        </div>
                        <button className={`${styles["apply-coupon"]} mt-5 rounded-5`}>Apply Coupon</button>
                        <div className={`${styles["noted"]} d-flex flex-column my-5`}>
                            <span className="py-3">Terms and Condition</span>
                            <p>1. You can only apply 1 coupon per day</p>
                            <p>2. It only for dine in</p>
                            <p>3. Buy 1 get 1 only for new user</p>
                            <p>4. Should make member card to apply coupon</p>
                        </div>
                    </aside>

                    <aside className={`${styles["product-right"]} d-flex flex-column py-4`}>
                        <div className={`${styles["nav-product"]} d-flex flex-row justify-content-around`}>
                            <span><p className={styles.point} onClick={this.Favorite}>Favorite & Promo</p></span>
                            <span><p className={styles.point} onClick={this.Coffee}>Coffee</p></span>
                            <span><p className={styles.point} onClick={this.NonCoffee}>Non Coffee</p></span>
                            <span><p className={styles.point} onClick={this.Food}>Foods</p></span>
                            <span><p className={styles.point} onClick={this.AddOn}>Add-on</p></span>
                        </div>

                        <section className="container-fluid text-center ps-5 ms-4">
                            <div className={`row ${styles["list-content"]} justify-content-start ${styles["gap-Row"]} ${styles["position-settings"]}`}>
                                {this.state.product.map((e) => (
                                    <CardProduct product_name={e.name} price={e.price} image_product={e.image} />
                                ))}


                            </div>
                        </section>

                    </aside>
                </section>

                <Footer />
            </>
        )
    }
}


export default Product;


















// export default function Product() {
//     titlebar("Coffee Addict | Product")

//     const [product, setProduct] = useState([])
//     const [url, setUrl] = useState("http://localhost:6060/coffee/product")

//     useEffect(() => {
//         axios.get(url)
//             .then(res => {
//                 // console.log(res.data.result.data);
//                 setProduct(res.data.result.data)
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }, [url])

//     // console.log(product);

//     return (
//         <>
//             <Navbar />
//             <section className={`${styles["style-bd"]} container-fluid d-flex flex-row flex-wrap`}>
//                 <aside className={`${styles["product-left"]} d-flex flex-column align-items-center`}>
//                     <span className={`${styles["title-promo"]} text-center mt-4`}>Promo Today</span>
//                     <span className={`${styles["desc-promo"]} text-center mt-3 px-5`}>Coupons will be updated every weeks. Check them out!
//                     </span>
//                     <div className={`${styles["promo-one"]} d-flex mt-5 py-2 `}>
//                         <Link to="">
//                             <img src={promo_one} alt="pic-promo" />
//                         </Link>
//                         <div className={`${styles["description-promo"]} py-2`}>
//                             <span>HAPPY MOTHER'S DAY!</span>
//                             <p>Get one of our favorite menu for free!</p>
//                         </div>
//                     </div>
//                     <div className={`${styles["promo-two"]} d-flex mt-3 mx-3 py-2 bg-warning`}>
//                         <Link to="">
//                             <img src={promo_two} alt="pic-promo" />
//                         </Link>
//                         <div className={`${styles["description-promo"]} py-2`}>
//                             <span>Get a cup of coffee for free on sunday morning</span>
//                             <p>Only at 7 to 9 AM</p>
//                         </div>
//                     </div>
//                     <div className={`${styles["promo-one"]} d-flex mt-3 py-2 `}>
//                         <Link to="">
//                             <img src={promo_one} alt="pic-promo" />
//                         </Link>
//                         <div className={`${styles["description-promo"]} py-2`}>
//                             <span>HAPPY MOTHER'S DAY!</span>
//                             <p>Get one of our favorite menu for free!</p>
//                         </div>
//                     </div>
//                     <div className={`${styles["promo-four"]} d-flex mt-3 mx-3 `}>
//                         <Link to="">
//                             <img src={promo_four} alt="pic-promo" />
//                         </Link>
//                         <div className={`${styles["description-promo"]} py-3`}>
//                             <span>HAPPY HALLOWEEN!</span>
//                             <p>Do you like chicken wings? Get 1 free only if you buy pinky promise</p>
//                         </div>
//                     </div>
//                     <button className={`${styles["apply-coupon"]} mt-5 rounded-5`}>Apply Coupon</button>
//                     <div className={`${styles["noted"]} d-flex flex-column my-5`}>
//                         <span className="py-3">Terms and Condition</span>
//                         <p>1. You can only apply 1 coupon per day</p>
//                         <p>2. It only for dine in</p>
//                         <p>3. Buy 1 get 1 only for new user</p>
//                         <p>4. Should make member card to apply coupon</p>
//                     </div>
//                 </aside>

//                 <aside className={`${styles["product-right"]} d-flex flex-column py-4`}>
//                     <div className={`${styles["nav-product"]} d-flex flex-row justify-content-around`}>
//                         <span><Link to="">Favorite & Promo</Link></span>
//                         <span><Link to="">Coffee</Link></span>
//                         <span><Link to="">Non Coffee</Link></span>
//                         <span><Link to="">Foods</Link></span>
//                         <span><Link to="">Add-on</Link></span>
//                     </div>

//                     {/* Card Product */}
//                     <section className="container-fluid text-center ps-5 ms-4">
//                         <div className={`row ${styles["list-content"]} justify-content-start ${styles["gap-Row"]} ${styles["position-settings"]}`}>
//                             {product.map((e) => (
//                                 <CardProduct product_name={e.name} price={e.price} image_product={e.image} />
//                             ))}
//                         </div>
//                     </section>
//                 </aside>
//             </section>
//             <Footer />
//         </>
//     )
// }




















