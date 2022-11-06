
import React, { Component } from "react";
// import React, { useState, useEffect } from "react";
import axios from "axios";
import withParams from "../helpers/withRouteParams";
import withSerchParams from "../helpers/withSearchParams"
// import withNavigate from "../helpers/withNavigate"

// import css
import styles from "../styles/Product.module.css"


// import navbar dan footer
import Navbar from "../components/Navbar"
import NavbarnotLogin from "../components/Navbar-notLogin"
import Footer from "../components/Footer"
import CardPromo from "../components/CardPromo"
import CardProduct from "../components/Card-Product"
import titlebar from "../utility/WebDinamis"


// import image
// import promo_one from "../asset/icon_promo-1.png"
// import promo_two from "../asset/icon_promo-2.png"
// import promo_four from "../asset/icon_promo-4.png"




class Product extends Component {

    // State awal
    state = {
        product: [],
        favorite: `${process.env.REACT_APP_BACKEND_HOST}coffee/product/?sorting=favorite&page=1&limit=12`,
        coffee: `${process.env.REACT_APP_BACKEND_HOST}coffee/product/?category=coffee&page=1&limit=12`,
        non_coffee: `${process.env.REACT_APP_BACKEND_HOST}coffee/product/?category=non_coffee&page=1&limit=12`,
        food: `${process.env.REACT_APP_BACKEND_HOST}coffee/product/?category=foods&page=1&limit=12`,
        addons: `${process.env.REACT_APP_BACKEND_HOST}coffee/product/?category=addon&page=1&limit=12`,
        navLogin: <Navbar />,
        navnotLogin: <NavbarnotLogin />,
        searchParams: {}
    };

    // Kondisi ketika di refresh
    componentDidMount() {
        axios.get(this.state.favorite)
            .then((res) => {
                this.setState({ product: res.data.result.data })
            })
            .catch((err) => console.log(err));
    }

    componentDidUpdate() {

    }

    costing = (price) => {
        return 'IDR ' + parseFloat(price).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }

    Favorite = () => {
        axios
            .get(this.state.favorite)
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

    navtype = () => {
        if (localStorage.getItem('token')) {
            return this.state.navLogin
        } else {
            return this.state.navnotLogin
        }
    }




    render() {
        titlebar("Coffee Addict | Product")
        return (
            <>
                <this.navtype />

                <div className='container-fluid border-top'>
                    <div className=''>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-4 col-md-12 col-sm-12 border-end d-flex flex-column align-items-center w-sm-50 px-5'>
                                <div className={`${styles["product-left"]} d-flex flex-column`}>
                                    <span className={`${styles["title-promo"]} text-center mt-4`}>Promo Today</span>
                                    <span className={`${styles["desc-promo"]} text-center mt-3 mb-5 px-5`}>Coupons will be updated every weeks. Check them out!</span>
                                </div>
                                {/* Card promo start */}
                                <CardPromo />
                                <CardPromo />
                                <CardPromo />
                                <CardPromo />
                                {/* card promo end */}

                                <button className={`${styles["apply-coupon"]} mt-5 rounded-5 w-100`}>Apply Coupon</button>
                                <div className={`${styles["noted"]} d-flex flex-column my-5 justify-content-start w-100`}>
                                    <span className="py-3">Terms and Condition</span>
                                    <p>1. You can only apply 1 coupon per day</p>
                                    <p>2. It only for dine in</p>
                                    <p>3. Buy 1 get 1 only for new user</p>
                                    <p>4. Should make member card to apply coupon</p>
                                </div>

                            </div>

                            <div className='col-lg-8 col-md-12 col-sm-12'>
                                <div className={`${styles["nav-product"]} d-flex flex-row justify-content-around mt-4`}>
                                    <span><p className={styles.point} onClick={() => {
                                        this.Favorite()
                                        this.setState({
                                            searchParams: { sorting: "favorite" }
                                        },
                                            () => {
                                                this.props.setSearchParams(this.state.searchParams)
                                            })
                                    }} >Favorite & Promo</p></span>

                                    <span><p className={styles.point} onClick={() => {
                                        this.Coffee()
                                        this.setState({
                                            searchParams: { sorting: "coffee" }
                                        },
                                            () => {
                                                this.props.setSearchParams(this.state.searchParams)
                                            })
                                    }}>Coffee</p></span>

                                    <span><p className={styles.point} onClick={() => {
                                        this.NonCoffee()
                                        this.setState({
                                            searchParams: { sorting: "non coffee" }
                                        },
                                            () => {
                                                this.props.setSearchParams(this.state.searchParams)
                                            })
                                    }}>Non Coffee</p></span>

                                    <span><p className={styles.point} onClick={() => {
                                        this.Food()
                                        this.setState({
                                            searchParams: { sorting: "food" }
                                        },
                                            () => {
                                                this.props.setSearchParams(this.state.searchParams)
                                            })
                                    }}>Foods</p></span>

                                    <span><p className={styles.point} onClick={() => {
                                        this.AddOn()
                                        this.setState({
                                            searchParams: { sorting: "addon" }
                                        },
                                            () => {
                                                this.props.setSearchParams(this.state.searchParams)
                                            })
                                    }}>Add-on</p></span>
                                </div>
                                <div className={`row ${styles["list-content"]} d-flex justify-content-start`}>
                                    {this.state.product.map((e, key) => (
                                        <CardProduct
                                            // key={`${key}`}
                                            id={e.id}
                                            params={e.id}
                                            product_name={e.name}
                                            size={e.size}
                                            price={this.costing(e.price)}
                                            image_product={e.image} />
                                    ))}

                                </div>
                                <div className="ms-5 mt-3 mb-4">
                                    <p className={styles["note-price"]}>*the price has been cutted by discount appears</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}


export default withSerchParams(withParams(Product));


















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




















