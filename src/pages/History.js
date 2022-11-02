import React from 'react'

import styles from "../styles/History.module.css"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CardHistory from "../components/CardHistory"




export default function History() {
    return (
        <>
            <Navbar />

            <main className={`${styles["bg-history"]} container-fluid`}>
                <div className='container-fluid '>
                    <div className='row py-5'>
                        <div className='col-sm-12 col-md-12 col-lg-12 text-center'>
                            <p className={styles["title-history-one"]}>Let's see what you have bought!</p>
                            <p className={styles["title-history-two"]}>Long press to delete item</p>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center gap-2 pb-5'>
                        <CardHistory />
                        <CardHistory />
                        <CardHistory />
                        <CardHistory />
                        <CardHistory />
                        <CardHistory />
                        <CardHistory />
                        <CardHistory />
                        <CardHistory />
                        <CardHistory />
                        <CardHistory />
                        <CardHistory />

                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
