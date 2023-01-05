import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import styles from "../styles/adminCSS/Handlingproduct.module.css";

// import images
import authActions from "../redux/actions/auth";

function CardPromo(props) {
   const navigate = useNavigate();
   const dispatch = useDispatch()
   const profile = useSelector((state) => state.auth.profile)
   
   
   return (
      <>
         <div
            onClick={() => {
               if(profile.role === 'user' ? (dispatch(authActions.productThunk({id_promo : props.id_promo, id_product: props.id, disc: props.discount})),navigate(`/productdetail/${props.id}`)) : profile.role === 'admin' ? navigate(`/updatepromo/${props.id_promo}`) : navigate(`/login`) );
            }}
            className={`d-flex mt-2 py-2`}
            style={{
               backgroundColor: props.hex,
               width: "100%",
               height: "120px",
               borderRadius: "20px",
               padding: "10px",
               cursor: "pointer",
               justifyContent: "flex-start",
               alignItems: "center",
            }}
         >
            <Link to="">
               <img
                  src={props.image}
                  alt="pic-promo"
                  style={{ width: 90, height: 90, paddingRight: "20px" }}
               />
            </Link>
            <div className={`${styles["description-promo"]} py-2`}>
               <span className="fw-bold">{props.code}</span>
               {/* <span>{this.props.codepromo}</span> */}
               {/* <p>{this.props.name_product}</p> */}
               <p>{props.name}</p>
               <p>size : {props.size}</p>
               <p>discount : {props.discount}%</p>
            </div>
         </div>
      </>
   );
}

// export default withParams(CardPromo)
export default CardPromo;
