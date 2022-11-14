import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import styles from "../styles/adminCSS/Handlingproduct.module.css"

// import images
import promo_one from "../asset/icon_promo-1.png"
import withParams from '../helpers/withRouteParams';

function CardPromo(props) {
    // const navigate = useNavigate();
    return (
        <>
            <div
                // onClick={() => {
                //     navigate(`/productdetail/${props.id}`);
                // }}

                className={`${styles["promo-one"]} d-flex mt-2 py-2`}>
                <Link to="">
                    <img src={promo_one} alt="pic-promo" />
                </Link>
                <div className={`${styles["description-promo"]} py-2`}>
                    <span>HAPPY MOTHER'S DAY!</span>
                    {/* <span>{this.props.codepromo}</span> */}
                    {/* <p>{this.props.name_product}</p> */}
                    <p>Get one of our favorite menu for free!</p>
                </div>
            </div>
        </>
    )
}

// export default withParams(CardPromo)
export default CardPromo