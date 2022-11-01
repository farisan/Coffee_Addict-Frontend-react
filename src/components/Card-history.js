import React, { Component } from 'react'

// import css
import styles from "../styles/CardHistory.module.css"

// import images
import pic_product from "../asset/product-1.png"



class CardHistory extends Component {
    render() {
        return (
            <>
                <section className={`${styles["border"]} col-lg-3 row my-2 mx-1`}>
                    <div className='col-lg-3 py-2'>
                        <img className={`${styles["imagine"]} rounded-circle`} src={pic_product} alt="" />
                    </div>
                    <article className='col col-sm col-md col-lg-8 ms-2 py-2'>
                        <p className={`${styles["title"]}`}>Veggie tomato mix</p>
                        <p className={`${styles["IDR"]}`}>IDR 34.000</p>
                        <p className={`${styles["delivered"]}`}> Delivered </p >
                    </article >
                </section >

            </>
        )
    }
}

export default CardHistory;