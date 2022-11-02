import React from 'react'


import styles from "../styles/History.module.css"


import pic_product from "../asset/product-1.png"

export default function CardHistory() {
    return (
        <>
            <div className='col-sm-12 col-md-5 col-lg-3 p-2 d-flex bg-white rounded-4'>
                <div className='d-flex flex-column justify-content-center'>
                    <img className='rounded-circle' src={pic_product} alt='img_history_product' width="80px" height="80px"></img>
                </div>
                <div className='d-flex flex-column ps-4 justify-content-center w-100'>
                    <p className={`${styles["title-history-name"]} text-wrap`}>Veggie Tomato Mix</p>
                    <p className={styles["title-history-idr"]}>IDR 34.000</p>
                    <p className={styles["title-history-status"]}>Delivery</p>
                </div>
            </div>
        </>
    )
}
