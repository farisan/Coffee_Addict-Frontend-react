import React, {  useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import component
import Footer from "../../components/Footer";
// import withParams from "../../helpers/withRouteParams";
import NavbarAdmin from "../../components/NavbarAdmin";
import img_product from "../../asset/profil-bg.png";

// import css
import styles from "../../styles/adminCSS/Updateproduct.module.css";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../utility/axios";
import { useEffect } from "react";

function AddProduct() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [display, setDisplay] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");


  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);

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
      const getToken = await localStorage.getItem("token");
      // console.log(getToken)
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("size", size);
      formData.append("price", price);
      formData.append("stock", stock);
      formData.append("description", description);
      formData.append("image", image);
      await addProduct(getToken, formData);
      await returnInitial();
      toast.success("success add product", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(`${error.response.data.msg}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };


  return (
    <>
      <ToastContainer />
      <NavbarAdmin />
      <div className="container-fluid border-top mb-5">
        {/* breadcrumb */}
        <div className="container">
          <div className="row py-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li
                  className={`breadcrumb-item ${styles["step-one"]}`}
                  onClick={() => navigate("/handlingproduct")}
                >
                  Product
                </li>
                <li className={`breadcrumb-item ${styles["step-two"]}`}>
                  Add new product{" "}
                </li>
              </ol>
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
              <button className={`${styles["change-profile"]} mt-5 rounded-5`} >
                Save Change
              </button>
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
                onClick={()=>saveHandle()}
              >
                Save Change
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

export default AddProduct;
