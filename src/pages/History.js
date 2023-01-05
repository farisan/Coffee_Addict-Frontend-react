import { React, useState, useEffect } from "react";
import Axios from "axios";

import styles from "../styles/History.module.css";
import Navbar from "../components/Navbar";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";
import CardHistory from "../components/CardHistory";
import Spinner from "react-bootstrap/Spinner";
import titlebar from "../utility/WebDinamis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import react bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

const History = () => {
   const [history, setHistory] = useState([]);
   const [data, setData] = useState([]);
   const [err, setErr] = useState("");
   const [next, setNext] = useState("");
   const [prev, setPrev] = useState("");
   const [loading, setLoading] = useState(false);
   const [transactionId, setTransactionID] = useState("");
   const [deps, setDeps] = useState("");
   const [show, setShow] = useState(false);
   const profile = useSelector((state) => state.auth.profile);
   // handleClose, handleShow => Show Modals
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const getHistory = (url) => {
      setLoading(true);
      const getToken = localStorage.getItem("token");
      // console.log(getToken);
      Axios.get(url, {
         headers: { "x-access-token": getToken },
      })
         .then((res) => {
            profile.role === "admin"
               ? setHistory(res.data.result)
               : setHistory(res.data.result.data);
            setData(res.data);
            setNext(res.data.result.next);
            setPrev(res.data.result.prev);
            setLoading(false);
         })
         .catch((err) => {
            console.log(err.response.data.msg);
            setErr(err.response.data.msg);
            setLoading(false);
         });
      console.log(url);
   };

   const deleteHistory = () => {
      const url = `${process.env.REACT_APP_BACKEND_HOST}/transactions/${transactionId}`;
      const getToken = localStorage.getItem("token");
      Axios.delete(url, {
         headers: { "x-access-token": getToken },
      })
         .then((res) => {
            console.log(res.data);
            handleClose();
            setDeps(Math.floor(Math.random() * 1000));
            toast.success("Delete history Success!", {
               position: toast.POSITION.TOP_RIGHT,
            });
         })
         .catch((err) => console.log(err));
   };

   // change status only admin
   const changeStatus = () => {
      const url = `${process.env.REACT_APP_BACKEND_HOST}/transactions/${transactionId}`;
      const getToken = localStorage.getItem("token");
      Axios.patch(
         url,
         {
            status: "success",
         },
         {
            headers: { "x-access-token": getToken },
         }
      )
         .then((res) => {
            console.log(res.data);
            handleClose();
            setDeps(Math.floor(Math.random() * 1000));
            toast.success("Change status Success!", {
               position: toast.POSITION.TOP_RIGHT,
            });
         })
         .catch((err) => console.log(err));
   };
   useEffect(() => {
      getHistory(
         `${process.env.REACT_APP_BACKEND_HOST}/transactions${
            profile.role === "admin" ? "/status" : "/history?page=1&limit=9"
         }`
      );
      console.log(history);
   }, [deps]);

   const handleNext = () => {
      window.scrollTo(0, 0);
      getHistory(next);
   };

   const handlePrev = () => {
      window.scrollTo(0, 0);
      getHistory(prev);
   };

   const costring = (price) => {
      return (
         "IDR " +
         parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
   };

   titlebar("Coffee Addict | History");
   return (
      <>
         {profile.role === "admin" ? <NavbarAdmin /> : <Navbar />}
         <main className={`${styles["bg-history"]} container-fluid`}>
            <div className="container-fluid ">
               <div className="row py-5">
                  <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                     <p className={styles["title-history-one"]}>
                        Let's see what you have bought!
                     </p>
                     <p className={styles["title-history-two"]}>
                        Long press to delete item
                     </p>
                  </div>
               </div>
               <div className="row d-flex  mx-auto ">
                  {loading ? (
                     <div className="d-flex justify-content-center align-items-center mx-auto my-5 py-5">
                        <Spinner animation="border" variant="info" />
                     </div>
                  ) : err === "History Not Found" ? (
                     <h1 className="text-white text-center mt-5">
                        History Empty
                        <i class="bi bi-bag-x-fill">.</i>
                     </h1>
                  ) : (
                     <>
                        <div className="d-flex flex-wrap mx-auto justify-content-md-center justify-content-sm-center">
                           {history.map((item, key) => (
                              <CardHistory
                                 name={item.name}
                                 price={costring(item.total)}
                                 image_product={item.image}
                                 status={item.status}
                                 key={`${key}`}
                                 id={item.id}
                                 handler={() => {
                                    setTransactionID(item.id);
                                    handleShow();
                                 }}
                              />
                           ))}
                        </div>
                        <div
                           style={{
                              justifyContent: "flex-end",
                              display: "flex",
                              marginTop: "20px",
                              paddingRight: "80px",
                              paddingBottom: "60px",
                           }}
                        >
                           {prev && (
                              <button
                                 className="btn btn-warning"
                                 onClick={handlePrev}
                                 style={{
                                    color: "#000",
                                    fontWeight: "bold",
                                 }}
                              >
                                 Prev
                              </button>
                           )}
                           {next && (
                              <button
                                 className="btn btn-warning"
                                 onClick={handleNext}
                                 style={{
                                    color: "#000",
                                    fontWeight: "bold",
                                 }}
                              >
                                 Next
                              </button>
                           )}
                        </div>
                     </>
                  )}
               </div>
            </div>
         </main>
         <Footer />
         <ToastContainer />
         <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header closeButton>
               <Modal.Title>confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               do you want to {profile.role === "admin" ? "changed" : "delete"}{" "}
               history data?
            </Modal.Body>
            <Modal.Footer>
               <Button
                  variant="danger"
                  className="fw-bold text-bg-danger text-white"
                  onClick={handleClose}
               >
                  No
               </Button>
               <Button
                  variant="success"
                  className="fw-bold text-bg-success text-white"
                  onClick={
                     profile.role === "admin" ? changeStatus : deleteHistory
                  }
               >
                  Yes
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
};

export default History;
