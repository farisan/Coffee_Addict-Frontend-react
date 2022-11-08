import React from 'react'


import styles from "../styles/History.module.css"



export default function CardHistory(props) {
    return (
        <>
            <div className='col-sm-12 col-md-5 col-lg-3 p-2 d-flex bg-white rounded-4'>
                <div className='d-flex flex-column justify-content-center'>
                    <img className='rounded-circle' src={props.image_product} alt='img_history_product' width="80px" height="80px"></img>
                </div>
                <div className='d-flex flex-column ps-4 justify-content-center w-100'>
                    <p className={`${styles["title-history-name"]} text-wrap`}>{props.name}</p>
                    <p className={styles["title-history-idr"]}>{props.price}</p>
                    <p className={styles["title-history-status"]}>{props.status}</p>
                </div>
            </div>
        </>
    )
}
