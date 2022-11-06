import React, { Component } from 'react'

// import Css
import styles from "../styles/Payment.module.css"

import payment_image_1 from "../asset/payment_image_1.png";

export default class CardPayment extends Component {
    render() {
        // const {name_product, qty, size, image,} =this.props
        return (
            <>
                {/* payment 1 */}
                <div className={styles['payment-content']}>
                    <img src={payment_image_1} alt='Payment1' width="100px" height="100px"></img>
                    <div className={styles['payment-center']}>
                        <p>Hazelnut Latte</p>
                        <p>x1</p>
                        <p>Reguler</p>
                    </div>
                    <div className={styles['payment-idr']}>
                        <p>IDR 24.0</p>
                    </div>
                </div>
            </>
        )
    }
}
