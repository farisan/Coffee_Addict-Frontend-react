import React from "react";
import { useState } from "react";
import axios from 'axios'
import {
  useNavigate,
  useParams,
} from "react-router-dom";
// import Axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import component
import img_product from "../../asset/profil-bg.png";
// import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
// import withParams from "../../helpers/withRouteParams";
import NavbarAdmin from "../../components/NavbarAdmin";
// import NavbarnotLogin from "../../components/Navbar-notLogin"
// import withNavigate from "../../helpers/withNavigate";
import {patchProduct} from "../../utility/axios"
// import css
import styles from "../../styles/adminCSS/Updateproduct.module.css";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

function UpdateProduct() {
    const navigate = useNavigate();
    const {id} = useParams()

    const [image, setImage] = useState(null);
    const [display, setDisplay] = useState(null);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false)
  
    const returnInitial = () => {
      setImage(null);
      setDisplay(null)
      setName("");
      setCategory("");
      setSize("");
      setPrice("");
      setStock("");
      setDescription("");
    };
  
    const inputImage = (event) => {
          setDisplay(URL.createObjectURL(event.target.files[0]));
          setImage(event.target.files[0]);
    };
  
    const saveHandle = async () => {
      try {
        setLoading(true)
        const getToken = await localStorage.getItem("token");
        // console.log(getToken)
        const formData = new FormData();
        if(name)formData.append("name", name);
        if(category)formData.append("category", category);
        if(size)formData.append("size", size);
        if(price)formData.append("price", price);
        if(stock)formData.append("stock", stock);
        if(description)formData.append("description", description);
        if(image)formData.append("image", image);
        await patchProduct(getToken, formData, id);
        // await returnInitial();
        toast.success("success edit product", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/product");
        setLoading(false)
      } catch (error) {
        console.log(error);
        toast.error(`failed edit product`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false)
      }
    };

    const deleteProduct = () => {
      const getToken = localStorage.getItem('token');
      axios.patch(`https://coffeeadictbe.vercel.app/coffee/product/delete/${id}`,{}, {
        headers: {
          'x-access-token': getToken
        },
      })
      .then((res) => {
        toast.success(res.data.result.msg, {
          position: toast.POSITION.TOP_RIGHT,
        })
        navigate("/product")
      })
      .catch((err) => {
        console.log(err)
        toast.error("internal server error", {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
    }

    
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_HOST}/product/${id}`)
      .then((res) => {
        setImage(res.data.result.data[0].image);
        setDisplay(res.data.result.data[0].image);
        setName(res.data.result.data[0].name);
        setCategory(res.data.result.data[0].category);
        setSize(res.data.result.data[0].size);
        setPrice(res.data.result.data[0].price);
        setStock(res.data.result.data[0].stock);
        setDescription(res.data.result.data[0].description);
      })
      .catch((err) => {
        console.log(err)
      })
  },[])
    


  return (
    <>
      <ToastContainer />
      <NavbarAdmin />
      <div className="container-fluid border-top mb-5">
        {/* breadcrumb */}
        <div className="container">
          <div className="row py-3">
            <nav aria-label="breadcrumb">
              <div className="d-flex flex-row align-items-center justify-content-between">
                <ol className="breadcrumb">
                  <li
                    className={`breadcrumb-item ${styles["step-one"]}`}
                    onClick={() => navigate("/product")}
                  >
                    Product
                  </li>
                  <li className={`breadcrumb-item ${styles["step-two"]}`}>
                    Add new product
                  </li>
                </ol>
                <button className={styles['trash_button']} onClick={deleteProduct}>
                  <i className="bi bi-trash text-white fs-5" />
                </button>
              </div>
            </nav>
          </div>
        </div>
        {/* breadcrumb */}

        {/* Left Content */}
        <div className="container">
          <div className="row gap-2 d-flex justify-content-between">
            <section className="col-lg-5 col-md-12 col-sm-12 d-flex flex-column align-items-center ">
              <div className="pt-5">
                <img
                  className={`rounded-circle ${styles["default-bg-set"]}`}
                  src={display === null ? img_product : display}
                  alt="Image_Product_Default"
                  width="250px"
                  height="250px"
                ></img>
              </div>
              
              <div
                className={`${styles["profile-image"]} text-center rounded-5 mt-3 mb-5`}
              >
                <label for="img-profile">Choose Photo</label>
                <input
                  type="file"
                  name="file"
                  id="img-profile"
                  onChange={(e)=>inputImage(e)}
                />
              </div>
              <div className={`${styles[`delivery-hour`]} mt-5`}>
                <p>Input stock :</p>
              </div>
              <div className="mt-3 w-100 d-flex align-item-center justify-content-center mb-5">
                {/* <select className={`${styles["dropdown-hour"]} ps-3 `}>
                                <option selected>Input stock</option>
                                <option value="10">10 stock</option>
                                <option value="15">15 stock</option>
                                <option value="20">20 stock</option>
                                <option value="25">25 stock</option>
                                <option value="30">30 stock</option>
                            </select> */}
                <input
                  className={`${styles["input-stock-add-admin"]}`}
                  type="number"
                  name="stock"
                  id="stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  placeholder="Input stock product"
                />
              </div>
            </section>

            <section className="col-lg-6 col-md-12 col-sm-12 pt-5 ">
              <div
                className={`${styles["data-form"]} d-flex flex-column w-100`}
              >
                <label for="">Name :</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  placeholder="Type product name min. 50 characters"
                />
                <label for="">Price :</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e)=> setPrice(e.target.value)}
                  placeholder="Type the price"
                />
                <label for="">Description :</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your product min. 150 characters"
                />
              </div>
              <div className={`${styles[`input-size`]} mt-5`}>
                <p className={styles["input-product-size"]}>
                  Input product size :
                </p>
                <p className={styles["input-product-desc"]}>
                  Click size you want to use for this product
                </p>
              </div>
              <div
                className={`${styles.size} d-flex justify-content-start text-center mt-3`}
              >
                <button
                 style={size === 'M'?{backgroundColor:'#6A4029',color:'white'}:{backgroundColor:'#FFBA33'}}
                  className="rounded-circle"
                  value="M"
                  onClick={()=>setSize('M')}
                >
                  M
                </button>
                <button
                 style={size === 'L'?{backgroundColor:'#6A4029',color:'white'}:{backgroundColor:'#FFBA33'}}
                  className=" rounded-circle"
                  value="L"
                  onClick={()=>setSize('L')}
                >
                  L
                </button>
                <button
                style={size === 'XL'?{backgroundColor:'#6A4029',color:'white'}:{backgroundColor:'#FFBA33'}}
                  className=" rounded-circle"
                  value="XL"
                  onClick={()=>setSize('XL')}
                >
                  XL
                </button>
              </div>
              <div className={`${styles[`input-size`]} mt-5`}>
                <p className={styles["input-product-size"]}>
                  Category product :
                </p>
                <p className={styles["input-product-desc"]}>
                  Click methods you want to use for this product
                </p>
              </div>
              <div
                className={`${styles.method} d-flex justify-content-start text-center mt-3`}
              >
                <button
                  className=" rounded-3"
                  style={category === 'coffee'?{backgroundColor:'#6A4029',color:'white'}:{backgroundColor:'#FFBA33'}}
                  onClick={()=>setCategory('coffee')}
                >
                  Coffee
                </button>
                <button
                  className=" rounded-3"
                  style={category === 'non coffee'?{backgroundColor:'#6A4029',color:'white'}:{backgroundColor:'#FFBA33'}}
                  onClick={()=>setCategory('non coffee')}
                >
                  Non Coffee
                </button>
                <button
                  className=" rounded-3"
                  style={category === 'foods'?{backgroundColor:'#6A4029',color:'white'}:{backgroundColor:'#FFBA33'}}
                  onClick={()=>setCategory('foods')}
                >
                  Foods
                </button>
                <button
                  className=" rounded-3"
                  style={category === 'addon'?{backgroundColor:'#6A4029',color:'white'}:{backgroundColor:'#FFBA33'}}
                  onClick={()=>setCategory('addon')}
                >
                  Addon
                </button>
              </div>
              <button
                className={`${styles["save-product"]} mt-5 rounded-5`}
                onClick={saveHandle}
              >
                {loading ? <div className="d-flex justify-content-center align-items-center pt-3">
                           <Spinner animation="border" />
                        </div> : 'Save Change'}
              </button>
              <button
                className={`${styles["cancel-product"]} mt-3 rounded-5`}
                onClick={()=>returnInitial()}
              >
                Cancel
              </button>
            </section>
          </div>
        </div>
        {/* Left Content */}
      </div>
      <Footer />
    </>
  );
}

export default UpdateProduct;

