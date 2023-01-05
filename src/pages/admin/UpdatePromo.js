import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editPromo } from "../../utility/axios";
import axios from "axios";

// import component
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";

// import css
import styles from "../../styles/adminCSS/newPromo.module.css";

// import images
// import img_product from "../../asset/profil-bg.png";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import { ChromePicker } from "react-color";

function UpdatePromo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [oldCode, setOldCode] = useState("");
  const [OldHex, setOldHex] = useState("");
  // const [oldDisc, setOldDisc] = useState(0);
  const [code, setCode] = useState("");
  const [display, setDisplay] = useState(null);
  const [product, setProduct] = useState([]);
  const [prevColor, setPrevColor] = useState("");
  const [color, setColor] = useState("");
  const [showColor, setShowColor] = useState(false);
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  // const [search, setSearch] = useState("");
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

  const handleCloseDelete = () => {
    setShowDelete(false);
  };

  const handleClose = () => {
    setProductId("");
    setNameProduct("");
    setSizeProduct("");
    setShow(false);
  };

  const handleDelete = () => {
    const getToken = localStorage.getItem("token");
    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_HOST}/promo/delete/${id}`,
        {},
        {
          headers: {
            "x-access-token": getToken,
          },
        }
      )
      .then((res) => {
        toast.success("success delete promo", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/Product");
      })
      .catch((err) => console.log(err));
  };

  const handleCreatePromo = async () => {
    try {
      // console.log("klik")
      const getToken = await localStorage.getItem("token");
      const formData = new FormData();
      if (productId) formData.append("product_id", productId);
      if (code) formData.append("code", code);
      if (disc) formData.append("discount", disc);
      if (date) formData.append("valid", date);
      if (prevColor) formData.append("hex_color", prevColor);
      if (image) formData.append("image", image);
      await editPromo(getToken, formData, id);
      toast.success("success add promo", {
        position: toast.POSITION.TOP_RIGHT,
      });
      // navigate("/");
    } catch (error) {
      console.log(error.response);
      toast.error("error add product", {
        position: toast.POSITION.TOP_RIGHT,
      });
      // navigate("/");
    }
  };

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_HOST}/product`)
      .then((res) => setProduct(res.data.result.data))
      .catch();
    axios
      .get(`${process.env.REACT_APP_BACKEND_HOST}/promo/promo/${id}`)
      .then((res) => {
        setCode(res.data.result.data[0].code);
        setOldCode(res.data.result.data[0].code);
        setDisc(res.data.result.data[0].discount);
        setDate(res.data.result.data[0].valid);
        setOldHex(res.data.result.data[0].hex_color);
        setNameProduct(res.data.result.data[0].name);
        setDisplay(res.data.result.data[0].image);
      })
      .catch((err) => console.log(err));
  }, [id]);

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

      <Modal
        show={showDelete}
        onHide={handleCloseDelete}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>select product</Modal.Title>
        </Modal.Header>
        <Modal.Body>are you sure to delete promo?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            className="fw-bold text-bg-danger text-white"
            onClick={handleCloseDelete}
          >
            cancel
          </Button>
          <Button
            variant="success"
            className="fw-bold text-bg-success text-white"
            onClick={handleDelete}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

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
                    Promo
                  </li>
                  <li className={`breadcrumb-item ${styles["step-two"]}`}>
                    {oldCode}
                  </li>
                </ol>
                <button
                  className={styles["trash_button"]}
                  onClick={() => {
                    setShowDelete(true);
                  }}
                >
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
                  className="rounded-circle"
                  src={!image ? display : URL.createObjectURL(image)}
                  alt="img_product"
                  width="250px"
                  height="250px"
                ></img>
              </div>
              <div
                className={`${styles["profile-image"]} text-center rounded-5 mt-3`}
              >
                <label for="img-profile">Choose Photo</label>
                <input
                  type="file"
                  name="file"
                  id="img-profile"
                  onChange={(e) => handleImage(e)}
                />
              </div>
              <div
                className={`${styles["cancel-image"]} text-center rounded-5 mt-3 mb-5`}
                onClick={() => setImage(null)}
              >
                <label>Cancel Image</label>
              </div>
              <div className={`${styles[`delivery-hour`]} mt-5`}>
                <p>background color :</p>
              </div>
              <div className={styles.color}>
                <p className={`${styles.pcolor}`}>
                  color : {prevColor ? prevColor : OldHex}
                </p>
                <div
                  className={styles.blockcolor}
                  style={{ backgroundColor: prevColor ? prevColor : OldHex }}
                ></div>
              </div>
              <div className={`mt-3 w-100 d-flex align-item-center justify-content-center`}>
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
                <button className={styles.bg_setColor}
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
                <div className="py-2" onClick={() => setShow(true)}>product : {nameProduct}</div>
                <div className="py-2" onClick={() => setShow(true)}>size : {sizeProduct}</div>
                <button className={styles.choose_product} onClick={() => setShow(true)}>choose product</button>
                <label className="pt-3" for="">valid until :</label>
                <input
                  type="date"
                  name=""
                  id=""
                  value={date}
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
              <button
                className={`${styles["cancel-product"]} mt-3 rounded-5`}
                onClick={() => navigate("/product")}
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

export default UpdatePromo;
