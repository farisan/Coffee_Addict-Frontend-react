import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import styles from "../styles/adminCSS/Handlingproduct.module.css"

// import images
import promo_one from "../asset/icon_promo-1.png"
import withParams from "../helpers/withRouteParams";

function CardPromo(props) {
    const navigate = useNavigate();
    return (
        <>
            <div
                onClick={() => {
                    navigate(`/handlingproduct/updatepromo/${props.id}`);
                }}

                className={`${styles["promo-one"]} d-flex mt-2 py-2`}>
                <Link to="">
                    <img src={promo_one} alt="pic-promo" />
                </Link>
                <div className={`${styles["description-promo"]} py-2`}>
                    {/* <span>HAPPY MOTHER'S DAY!</span> */}
                    <span className='fw-bold'>{props.name_product}</span>
                    <p>Code : {props.codepromo}</p>
                    <p>Discount : {props.discount}%</p>
                    {/* <p>Get one of our favorite menu for free!</p> */}
                </div>
            </div>
        </>
    )
}

export default withParams(CardPromo)