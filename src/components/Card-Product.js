// import React, { Component } from 'react'
import React from 'react'

// import css
import styles from "../styles/ListProduct.module.css"


import image_product from "../asset/product-7.png"


export default function card_Product(props) {


    return (
        <div className={`col-md-2 p-4 position-relative text-wrap ${styles["content-product"]}`}>
            <img className={styles["list-product-image"]} src={`http://localhost:6060/${props.image_product}`} alt="image_product" />
            {/* <div className={styles["label-promo"]}>
                <p>{props.discount}<span>%</span></p>
            </div> */}
            <p className={styles.title}>{props.product_name}</p>
            <p className={styles.price}><span>IDR</span> {props.price}</p>
        </div>
    )
}


// className List_Product extends Component {
//     render() {
//         return (
//             <>
//                 <div
//                     className={`col-md-2 p-4 position-relative text-wrap ${styles["content-product"]}`}>
//                     <img className={styles["list-product-image"]} src={image_product} alt="image_product" />
//                     <div className={styles["label-promo"]}>
//                         <p>10%</p>
//                     </div>
//                     <p className={styles.title}>Summer Fried Rice</p>
//                     <p className={styles.price}>IDR 34.000</p>
//                 </div>
//             </>
//         )
//     }
// }

// export default List_Product;