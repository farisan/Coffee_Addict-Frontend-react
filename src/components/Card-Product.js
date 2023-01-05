// import React, { Component } from 'react'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import withParams from "../helpers/withRouteParams";
import authActions from '../redux/actions/auth'

// import css
import styles from "../styles/ListProduct.module.css";

// import image_product from "../asset/product-7.png"

function Card_Product(props) {
   const navigate = useNavigate();
   const dispatch = useDispatch()
   const profile = useSelector((state) => state.auth.profile)

   return (
      <div
         onClick={() => {
            if(profile.role === 'user' ? (dispatch(authActions.productThunk({id_promo : null, id_product: props.id, disc: null})),navigate(`/productdetail/${props.id}`)) : profile.role === 'admin' ? navigate(`/updateproduct/${props.id}`) : navigate(`/login`) );
         }}
         className={`col-md-2  position-relative text-wrap ${styles["content-product"]}`}
      >
         <img
            className={styles["list-product-image"]}
            src={props.image_product}
            alt="image_product"
            width="50px"
            height="50px"
         />
         {/* <div className={styles["label-promo"]}>
                <p>{props.discount}<span>%</span></p>
            </div> */}
         <p className={styles.title}>{props.product_name}</p>
         <p className={styles.price}>{props.size}</p>
         <p className={styles.price}>{props.price}</p>
      </div>
   );
}
export default withParams(Card_Product);
