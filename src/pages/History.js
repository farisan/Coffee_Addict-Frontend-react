import React, { Component } from 'react'
import Axios from 'axios'

import styles from "../styles/History.module.css"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CardHistory from "../components/CardHistory"
import titlebar from "../utility/WebDinamis"


class History extends Component {

    state = {
        url: `${process.env.REACT_APP_BACKEND_HOST}coffee/transactions/history?page=1&limit=12`,
        history: [],
        name: "",
        image: "",
        price: "",
        status: "",
    };

    componentDidMount() {
        const getToken = localStorage.getItem('token')
        Axios.get(this.state.url, {
            headers: {
                "x-access-token": getToken,
            },
        })
            .then((response) => {
                // console.log(response.data.result.data);
                this.setState({ history: response.data.result.data }, () => {
                    // return res.data.result.data[0].image;
                });
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    costring = (price) => {
        return (
            "IDR " +
            parseFloat(price)
                .toFixed()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        );
    };

    render() {
        titlebar("Coffee Addict | History")
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
                            {this.state.history.map((item, key) => (
                                <CardHistory
                                    name={item.name}
                                    price={this.costring(item.total)}
                                    image_product={item.image}
                                    status={item.status}
                                    key={`${key}`}
                                // id={item.id}
                                />
                            ))}

                        </div>
                    </div>
                </main>

                <Footer />
            </>
        )
    }
}

export default History