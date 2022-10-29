import React, { Component } from 'react'

// import css
import styles from "../styles/History.module.css"

// import components
import CardHistory from "../components/Card-history"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

class History extends Component {
    render() {
        return (
            <>
                <Navbar />
                <main className={`${styles["hist-bck"]} py-5`}>
                    <section>
                        <div className={`${styles["title1"]}`}>
                            Let's see what you have bought!
                        </div>
                        <div className={`${styles["title2"]}`}>
                            Long press to delete item
                        </div>
                    </section >
                    <section className='container col-lg my-5'>
                        <section className='row justify-content-center'>
                            <CardHistory />
                            <CardHistory />
                            <CardHistory />
                        </section>
                        <section className='row justify-content-center'>
                            <CardHistory />
                            <CardHistory />
                            <CardHistory />
                        </section>
                        <section className='row justify-content-center'>
                            <CardHistory />
                            <CardHistory />
                            <CardHistory />
                        </section>
                        <section className='row justify-content-center'>
                            <CardHistory />
                            <CardHistory />
                            <CardHistory />
                        </section>
                        <section className='row justify-content-center'>
                            <CardHistory />
                            <CardHistory />
                            <CardHistory />
                        </section>
                    </section>
                </main >
                <Footer />
            </>
        )
    }
}

export default History;