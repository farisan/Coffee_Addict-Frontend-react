import React, { Component } from 'react'

// import css
// import styles from "../styles/Product.module.css"
import styles from "../styles/ListProduct.module.css"


import image_product from "../asset/product-7.png"


class List_Product extends Component {
    render() {
        return (
            <>
                <div
                    class={`col-md-2 p-4 position-relative text-wrap ${styles["content-product"]}`}>
                    <img class={styles["list-product-image"]} src={image_product} alt="image_product" />
                    <div class={styles["label-promo"]}>
                        <p>10%</p>
                    </div>
                    <p class={styles.title}>Summer Fried Rice</p>
                    <p class={styles.price}>IDR 34.000</p>
                </div>
            </>
        )
    }
}

export default List_Product;