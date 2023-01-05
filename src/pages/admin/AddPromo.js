import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import component
// import Navbar from "../../components/Navbar"
import NavbarAdmin from "../../components/NavbarAdmin";
// import NavbarnotLogin from "../../components/Navbar-notLogin"
import Footer from "../../components/Footer";

// import css
import styles from "../../styles/adminCSS/newPromo.module.css";

// import images
import img_product from "../../asset/profil-bg.png";
import { ChromePicker } from "react-color";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { createPromo } from "../../utility/axios";

function AddPromo() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [product, setProduct] = useState([]);
  const [prevColor, setPrevColor] = useState("#05FF28");
  const [color, setColor] = useState("#05FF28");
  const [showColor, setShowColor] = useState(false);
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [sizeProduct, setSizeProduct] = useState("");
  const [productId, setProductId] = useState("");
  const [disc, setDisc] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);

  const handleColor = (color) => {
    setColor(color);
  };

  const handleImage = (e) => {
    let file = e.target.files[0];
    setImage(file);
  };

  const handleClose = () => {
    setProductId("");
    setNameProduct("");
    setSizeProduct("");
    setShow(false);
  };

  const handleCreatePromo = async () => {
    try {
      // console.log("klik")
      const getToken = await localStorage.getItem("token");
      const formData = new FormData();
      formData.append("product_id", productId);
      formData.append("code", code);
      formData.append("discount", disc);
      formData.append("valid", date);
      formData.append("color", prevColor);
      formData.append("image", image);
      await createPromo(getToken, formData);
      toast.success("success add promo", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
    } catch (error) {
      console.log(error.response);
      toast.error("error add product", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_HOST}/product?search=${search}`)
      .then((res) => setProduct(res.data.result.data))
      .catch();
  }, [search]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>select product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          select product to add promo
          {product &&
            product.map((e) => (
              <div
                style={
                  productId === e.id
                    ? {
                        backgroundColor: "black",
                        color: "white",
                        cursor: "pointer",
                      }
                    : { backgroundColor: "#fff", cursor: "pointer" }
                }
                onClick={() => {
                  setProductId(e.id);
                  setNameProduct(e.name);
                  setSizeProduct(e.size);
                }}
              >
                {e.name + "       size : " + e.size}
              </div>
            ))}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            className="fw-bold text-bg-danger text-white"
            onClick={handleClose}
          >
            cancel
          </Button>
          <Button
            variant="success"
            className="fw-bold text-bg-success text-white"
            onClick={() => {
              setShow(false);
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <NavbarAdmin />
      <div className="container-fluid border-top mb-5">
        {/* breadcrumb */}
        <div className="container">
          <div className="row py-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className={`breadcrumb-item ${styles["step-one"]}`}>
                  <Link to="/handlingproduct">Product</Link>
                </li>
                <li className={`breadcrumb-item ${styles["step-two"]}`}>
                  Add new promo
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
                  className="rounded-circle"
                  src={!image ? img_product : URL.createObjectURL(image)}
                  alt="img_product"
                  width="250px"
                  height="250px"
                ></img>
              </div>
              <div
                className={`${styles["profile-image"]} text-center rounded-5 mt-3 mb-5`}
              >
                <input
                  type="file"
                  name="file"
                  id="img-profile"
                  onChange={(e) => handleImage(e)}
                />
                <label for="img-profile">Choose Photo</label>
              </div>
              <div className={`${styles[`delivery-hour`]} mt-5`}>
                <p>background color :</p>
              </div>
              <div className={styles.color}>
                <p className={styles.pcolor}>color : {prevColor}</p>
                <div
                  className={styles.blockcolor}
                  style={{ backgroundColor: prevColor }}
                ></div>
              </div>
              <div className="mt-3 w-100 d-flex align-item-center justify-content-center">
                {showColor ? (
                  <ChromePicker
                    color={color}
                    onChange={(color) => handleColor(color.hex)}
                  />
                ) : null}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                }}
              >
                <button
                  onClick={() => {
                    setShowColor((showColor) => !showColor);
                    if (showColor) return setPrevColor(color);
                  }}
                >
                  {showColor ? "confirm color" : "select color"}
                </button>
                {showColor && (
                  <button
                    onClick={() => {
                      setShowColor((showColor) => !showColor);
                      setColor(prevColor);
                    }}
                  >
                    cancel
                  </button>
                )}
              </div>
            </section>

            <section className="col-lg-6 col-md-12 col-sm-12 pt-5 ">
              <div
                className={`${styles["data-form"]} d-flex flex-column w-100`}
              >
                <label for="">code :</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Type code"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                />
                <label for="">discount :</label>
                <input
                  type="number"
                  value={disc}
                  onChange={(e) => setDisc(e.target.value)}
                  placeholder="Type the price"
                />
                <label>for product :</label>
                <div onClick={() => setShow(true)}>product : {nameProduct}</div>
                <div onClick={() => setShow(true)}>size : {sizeProduct}</div>
                <button onClick={() => setShow(true)}>choose product</button>
                <label for="">valid until :</label>
                <input
                  type="date"
                  name=""
                  id=""
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
              <button
                className={`${styles["save-product"]} rounded-5`}
                onClick={handleCreatePromo}
              >
                Save Change
              </button>
              <button className={`${styles["cancel-product"]} mt-3 rounded-5`}>
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

export default AddPromo;
