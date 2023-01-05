import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/History.module.css";

export default function CardHistory(props) {
   const profile = useSelector((state) => state.auth.profile);
   return (
      <>
         <div
            className={`${styles.card_bar} col-sm-12 col-md-5 col-lg-3 p-2 d-flex bg-white rounded-4`}
         >
            <div className="d-flex flex-column justify-content-center">
               <img
                  className="rounded-circle ms-3"
                  src={props.image_product}
                  alt="img_history_product"
                  width="80"
                  height="80"
               ></img>
            </div>
            <div className="d-flex flex-column ps-4 justify-content-center w-100">
               <p className={`${styles["title-history-name"]} text-wrap`}>
                  {props.name}
               </p>
               <p className={styles["title-history-idr"]}>{props.price}</p>
               <p className={styles["title-history-status"]}>{props.status}</p>
            </div>
            <i
               className={`${
                  profile.role === "admin" ? "bi bi-check2 fs-4" : "bi bi-trash"
               }  ${styles.deleted}`}
               onClick={props.handler}
            ></i>
         </div>
      </>
   );
}
