import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import component
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import withParams from "../../helpers/withRouteParams";
import NavbarAdmin from "../../components/NavbarAdmin"
import NavbarnotLogin from "../../components/Navbar-notLogin"
import withNavigate from "../../helpers/withNavigate";

// import css
import styles from "../../styles/adminCSS/Updateproduct.module.css"





class UpdateProduct extends Component {

    state = {
        navLogin: <Navbar />,
        navAdmin: <NavbarAdmin />,
        navnotLogin: <NavbarnotLogin />,
        url: `${process.env.REACT_APP_BACKEND_HOST}coffee/product/${this.props.params.id}`,
        urlpatchProd: `${process.env.REACT_APP_BACKEND_HOST}coffee/product/${this.props.params.id}`,
        name: "",
        price: "",
        description: "",
        stock: "",
        category: "",
        image: "",
        imagePreview: "",
        display: "https://res.cloudinary.com/dx7cvqczn/image/upload/v1668147344/coffee_addict/pic_default_product.png",
    };

    componentDidMount() {
        window.scrollTo(0, 0)
        this.getProduct()
    }

    getProduct() {
        Axios.get(this.state.url)
            .then((response) => {
                console.log(response.data.result.data[0].image);
                this.setState({
                    name: response.data.result.data[0].name,
                    image: response.data.result.data[0].image,
                    description: response.data.result.data[0].description,
                    size: response.data.result.data[0].size,
                    stock: response.data.result.data[0].stock,
                    price: response.data.result.data[0].price,
                })
            })
            .catch((err) => { console.log(err) })
    }

    deleteProduct() {
        const getToken = localStorage.getItem('token')
        Axios.delete(`${process.env.REACT_APP_BACKEND_HOST}coffee/product/${this.props.params.id}`, {
            headers: {
                "x-access-token": getToken,
            },
        })
            .then((response) => {
                console.log(response);
                toast.success('Success Delete Product !', {
                    position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(() => {
                    this.props.navigate("/handlingproduct")
                }, 1000)
            })
            .catch((err) => {
                console.log(err)
                toast.err(err, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
    }

    selectImage = () => {
        if (!this.state.image) return this.state.display
        return this.state.image
    }

    // handleFile => memndapatkan value inputan dari gambar yang telah di choose file
    handleFile = (e) => {
        // e.preventDefault();
        let file = e.target.files[0]
        let preview = URL.createObjectURL(e.target.files[0])
        // console.log(file);
        this.setState({ image: preview })
        this.setState({ imagePreview: file })
        // console.log(e.target.files[0]);
        // console.log(URL.createObjectURL(e.target.files[0]));
    }

    navtype = () => {
        if (localStorage.getItem('token')) {
            if (localStorage.getItem("role") === "user") {
                return this.state.navLogin
            } else {
                return this.state.navAdmin
            }
        } else {
            return this.state.navnotLogin
        }
    }

    valueDescription = (e) => {
        this.setState({ description: e.target.value, debug: console.log(e.target.value) });
    };
    valuePrice = (e) => {
        this.setState({ price: e.target.value, debug: console.log(e.target.value) });
    };
    valueNameproduct = (e) => {
        this.setState({ name: e.target.value, debug: console.log(e.target.value) });
    };
    valueStock = (e) => {
        this.setState({ stock: e.target.value, debug: console.log(e.target.value) })
    }
    valueSize = (e) => {
        this.setState({ size: e.target.value, debug: console.log(e.target.value) })
    }
    valueCategory = (e) => {
        this.setState({ category: e.target.value, debug: console.log(e.target.value) })
    }


    SuccessMessage = () => {
        toast.success('Data Save Change !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };


    submitSavechangeProduct = () => {
        const getToken = localStorage.getItem('token')
        let formdata = new FormData()
        // if (this.state.image) formdata.append('image', this.state.image)
        if (this.state.imagePreview) formdata.append('image', this.state.imagePreview)
        if (this.state.name) formdata.append('name', this.state.name)
        if (this.state.price) formdata.append('price', this.state.price)
        if (this.state.description) formdata.append('description', this.state.description)
        if (this.state.size) formdata.append('size', this.state.size)
        if (this.state.stock) formdata.append('stock', this.state.stock)
        if (this.state.category) formdata.append('category', this.state.category)
        Axios.patch(this.state.urlpatchProd, formdata, {
            headers: {
                "x-access-token": getToken,
            },
        })
            .then((response) => {
                this.SuccessMessage()
                setTimeout(() => {
                    this.props.navigate("/handlingproduct")
                }, 1000)
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
                toast.error('Error Input !', {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
    }
    // submitSavechangeProduct =(e) => {
    //     e.preventDefault();
    //     // console.log(this.state.description);
    //     try {
    //         const getToken = localStorage.getItem('token')
    //         Axios.patch(this.state.urlpatchProd, {
    //             name: this.state.name,
    //             image: this.state.image,
    //             description: this.state.description,
    //             size: this.state.size,
    //             price: this.state.price,
    //             stock: this.state.stock
    //         }, {
    //             headers: {
    //                 "x-access-token": getToken,
    //             }
    //         })
    //         // alert("success change product")
    //         this.SuccessMessage()
    //         setTimeout(() => this.props.navigate('/handlingproduct'), 3000);
    //     } catch (err) {
    //         alert("input error")
    //         console.log(err);
    //     }
    // }



    costing = (price) => {
        return parseFloat(price).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }

    render() {
        // console.log(localStorage.getItem('token'));
        return (
            <>
                <ToastContainer />
                <this.navtype />
                <div className='container-fluid border-top mb-5'>
                    {/* breadcrumb */}
                    <div className='container d-flex flex-row justify-content-between'>
                        <div className='row py-3'>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className={`breadcrumb-item ${styles["step-one"]}`}><Link to="/handlingproduct">Product</Link></li>
                                    <li className={`breadcrumb-item ${styles["step-two"]}`} >Edit product : {this.state.name}</li>
                                </ol>
                            </nav>
                        </div>
                        <button className={`${styles["button-delete-product"]} bg-danger`} onClick={() => this.deleteProduct()}>Delete product</button>
                    </div>
                    {/* breadcrumb */}

                    {/* Left Content */}
                    <div className='container'>
                        <div className='row gap-2 d-flex justify-content-between'>
                            <section className='col-lg-5 col-md-12 col-sm-12 d-flex flex-column align-items-center '>
                                <div className='pt-5'>
                                    <img className='rounded-circle' src={this.selectImage()} alt='img_product' width="250px" height="250px"></img>
                                </div>
                                <button className={`${styles["change-profile"]} mt-5 rounded-5`}>Save Change</button>
                                <div className={`${styles["profile-image"]} text-center rounded-5 mt-3 mb-5`}>
                                    <label for="img-profile">Choose Photo</label>
                                    <input
                                        type="file"
                                        name="file"
                                        id="img-profile"
                                        onChange={(e) => this.handleFile(e)} />
                                </div>
                                <div className={`${styles[`delivery-hour`]}`}>
                                    <p >Delivery Hour :</p>
                                </div>
                                <div className='mt-3 w-100 d-flex align-item-center justify-content-center'>
                                    <select className={` ${styles["dropdown-hour"]} ps-3 bg-secondary opacity-50`} disabled >
                                        <option selected>Select start hour</option>
                                        <option value="1">1 hour</option>
                                        <option value="2">2 hour</option>
                                        <option value="3">3 hour</option>
                                        <option value="4">4 hour</option>
                                        <option value="5">5 hour</option>
                                    </select>
                                </div>
                                <div className='mt-3 w-100 d-flex align-item-center justify-content-center'>
                                    <select className={`${styles["dropdown-hour"]} mb-3 ps-3 bg-secondary opacity-50`} disabled >
                                        <option selected>Select end hour</option>
                                        <option value="1">1 hour</option>
                                        <option value="2">2 hour</option>
                                        <option value="3">3 hour</option>
                                        <option value="4">4 hour</option>
                                        <option value="5">5 hour</option>
                                    </select>
                                </div>
                                <div className={`${styles[`delivery-hour`]} mt-5`}>
                                    <p >Input stock :</p>
                                </div>
                                <div className='mt-3 w-100 d-flex align-item-center justify-content-center mb-5'>
                                    {/* <select className={`${styles["dropdown-hour"]} ps-3 `}>
                                        <option selected>Input stock</option>
                                        <option value="10">10 stock</option>
                                        <option value="15">15 stock</option>
                                        <option value="20">20 stock</option>
                                        <option value="25">25 stock</option>
                                        <option value="30">30 stock</option>
                                    </select> */}
                                    <input className={`${styles["input-stock-add-admin"]}`}
                                        type="number"
                                        name='stock'
                                        id='stock'
                                        value={this.state.stock}
                                        onChange={this.valueStock}
                                        placeholder="Input stock product"
                                    />
                                </div>
                            </section>

                            <section className='col-lg-6 col-md-12 col-sm-12 pt-5 '>
                                <div className={`${styles["data-form"]} d-flex flex-column w-100`}>
                                    <label for="">Name :</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={this.state.name}
                                        onChange={this.valueNameproduct}
                                        placeholder="Type product name min. 50 characters" />
                                    <label for="">Price :</label>
                                    <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        value={this.state.price}
                                        onChange={this.valuePrice}
                                        placeholder="Type the price" />
                                    <label for="">Description :</label>
                                    <input
                                        type="text"
                                        name="description"
                                        id="description"
                                        value={this.state.description}
                                        onChange={this.valueDescription}
                                        placeholder="Describe your product min. 150 characters" />
                                </div>
                                <div className={`${styles[`input-size`]} mt-5`}>
                                    <p className={styles['input-product-size']}>Input product size :</p>
                                    <p className={styles['input-product-desc']}>Click size you want to use for this product</p>
                                </div>
                                <div className={`${styles.size} d-flex justify-content-start text-center mt-3`}>
                                    <button className=" rounded-circle"
                                        value='M'
                                        onClick={this.valueSize}

                                    >M</button>
                                    <button className=" rounded-circle"
                                        value='L'
                                        onClick={this.valueSize}

                                    >L</button>
                                    <button className=" rounded-circle"
                                        value='XL'
                                        onClick={this.valueSize}

                                    >XL</button>
                                </div>
                                <div className={`${styles[`input-size`]} mt-5`}>
                                    <p className={styles['input-product-size']}>Category product :</p>
                                    <p className={styles['input-product-desc']}>Click methods you want to use for this product</p>
                                </div>
                                <div className={`${styles.method} d-flex justify-content-start text-center mt-3`}>
                                    <button className=" rounded-3"
                                        value='coffee'
                                        onClick={this.valueCategory}
                                    >Coffee</button>
                                    <button className=" rounded-3"
                                        value='non coffee'
                                        onClick={this.valueCategory}
                                    >Non Coffee</button>
                                    <button className=" rounded-3"
                                        value='foods'
                                        onClick={this.valueCategory}
                                    >Foods</button>
                                    <button className=" rounded-3"
                                        value='addon'
                                        onClick={this.valueCategory}
                                    >Addon</button>
                                </div>
                                <button className={`${styles["save-product"]} mt-5 rounded-5`} onClick={this.submitSavechangeProduct}>Save Change</button>
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
}

export default withNavigate(withParams(UpdateProduct))