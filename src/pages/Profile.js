import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import css
import styles from "../styles/Profile.module.css"

// import Component
import Footer from "../components/Footer.js";
import titlebar from "../utility/WebDinamis"
import Navbar from "../components/Navbar.js";
import NavbarAdmin from "../components/NavbarAdmin"
import NavbarnotLogin from "../components/Navbar-notLogin"
import withNavigate from "../helpers/withNavigate";

// import image
import icon_pencil from "../asset/icon_pensil.png"



class Profile extends Component {

    state = {
        url: `${process.env.REACT_APP_BACKEND_HOST}coffee/users/UserID`,
        urlpatch: `${process.env.REACT_APP_BACKEND_HOST}coffee/users/profile`,
        email: "",
        address: "",
        phone_number: "",
        displayname: "",
        firstname: "",
        lastname: "",
        birthday: "",
        isEdit: true,
        navLogin: <Navbar />,
        navAdmin: <NavbarAdmin />,
        navnotLogin: <NavbarnotLogin />,
    }


    componentDidMount() {
        const getToken = localStorage.getItem('token')
        // console.log(getToken);
        Axios.get(this.state.url, {
            headers: {
                "x-access-token": getToken,
            },
        }).then((response) => {
            this.setState({
                // debug: console.log(response.data.result[0].gender),
                // .slice(0, 10).split("-").reverse().join("/")
                image: response.data.result[0].image,
                email: response.data.result[0].email,
                address: response.data.result[0].address,
                phone_number: response.data.result[0].phone_number,
                displayname: response.data.result[0].displayname,
                firstname: response.data.result[0].firstname,
                lastname: response.data.result[0].lastname,
                birthday: response.data.result[0].birthday,
                gender: response.data.result[0].gender,
            }, () => {
                console.log(this.state);
            });
        });
    }

    // get value input
    valueEmail = (e) => {
        this.setState({ email: e.target.value });
    };
    valueAddress = (e) => {
        this.setState({ address: e.target.value });
        console.log(this.state.address);
    };
    valuePhone_number = (e) => {
        this.setState({ phone_number: e.target.value });
    };
    valueBirthday = (e) => {
        this.setState({ birthday: e.target.value });
    };
    valueDisplayname = (e) => {
        this.setState({ displayname: e.target.value });
    };
    valueFirstname = (e) => {
        this.setState({ firstname: e.target.value });
    };
    valueLastname = (e) => {
        this.setState({ lastname: e.target.value });
    };
    valueGender = (e) => {
        this.setState({ gender: e.target.value });
    };
    // handleChangeImage = e => {
    //     this.setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) })
    // }

    navtype = () => {
        if (localStorage.getItem('token')) {
            if (localStorage.getItem("role") === "user") {
                return this.state.navLogin
            } else {
                return this.state.navAdmin
            }
        } else {
            return this.state.navnotLogin
        }
    }


    SuccessMessage = () => {
        toast.success('Data Save Change !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    LogoutMessage = () => {
        toast.success('Logout Success !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    // memasukan data kedatabase
    submitEditprofile = async (e) => {
        e.preventDefault();
        // console.log(this.state.address);
        try {
            const getToken = localStorage.getItem('token')
            Axios.patch(this.state.urlpatch, {
                address: this.state.address,
                image: this.state.image,
                displayname: this.state.displayname,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                birthday: this.state.birthday,
                gender: this.state.gender,
            }, {
                headers: {
                    "x-access-token": getToken,
                }
            })
            this.SuccessMessage()
            // setTimeout(() => this.props.navigate('/profile'), 5000);
        } catch (err) {
            // alert("input error")
            // console.log(err);
            toast.error(err, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }


    handleEditDate = () => {
        this.setState({ isEdit: false })
    }

    handleCancel = () => {
        this.setState.address("")
        this.setState.displayname("")
        this.setState.firstname("")
        this.setState.lastname("")
        this.setState.gender("")

    }


    render() {
        titlebar("Coffee Addict | Profile")
        let {
            displayname,
            email,
            image,
            phone_number,
            address,
            firstname,
            lastname,
            birthday,
            gender
        } = this.state;
        // console.log(this.state.address);
        return (
            <>
                <ToastContainer />
                <this.navtype />

                {/* <!-- Start Container Full Center --> */}
                <section className={`container-fluid ${styles["section"]}`}>
                    <div className="container pt-4 pb-2 ">
                        <span className={`${styles["user-profil"]} fs-4`}>User Profile</span>
                    </div>

                    {/* <!-- Form Left --> */}
                    <form className={`container ${styles["form-profile"]} d-flex flex-warp rounded-4`}>
                        <div className={`${styles["profile"]} py-4 d-flex flex-column justify-content-center align-items-center`}>
                            <Link to="">
                                <img src={image} alt="profile_picture" width="170px" height="180px" className="rounded-circle mt-4" />
                            </Link>
                            <span className={styles["name-profile"]} >{displayname}</span>
                            <p className={styles["email-profile"]}>{email}</p>
                            <div className={`${styles["profile-image"]} text-center rounded-5`}>
                                <label for="img-profile">Choose Photo</label>
                                <input type="file" id="img-profile" />
                                {/* style="display:none;" */}
                            </div>
                            <button className={`${styles["remove-profile"]} mt-3 rounded-5`}>Remove Photo</button>
                            <button className={`${styles["editpwd-profile"]} mt-5 rounded-5`}>Edit Password</button>
                            <span className={`${styles["save-change-profile"]} text-center mt-5 fs-4`}>Do you want to save the change?</span>
                            <button className={`${styles["change-profile"]} mt-5 rounded-5`} onClick={this.submitEditprofile}>Save Change</button>
                            <button className={`${styles["cancel-profile"]} mt-3 rounded-5`} onClick={this.handleCancel}>Cancel</button>
                            <button className={`${styles["editpwd-profile"]} mt-5 rounded-5`} onClick={() => {
                                localStorage.removeItem('token')
                                localStorage.removeItem('role')
                                this.LogoutMessage()
                            }}>Logout</button>
                        </div>

                        {/* <!-- form Right --> */}
                        <div className={`${styles["form"]} mx-2 my-5 d-flex flex-column w-100`}>
                            <div className={`${styles["title-form"]} d-flex flex-row justify-content-between my-3 px-5 py-2 `}>
                                <span>Contact</span>
                                <Link onClick={this.handleEditDate} className="rounded-5"><img src={icon_pencil} alt="" /></Link>
                            </div>
                            <div className={`${styles["data-form"]} d-flex flex-row p-3 `}>
                                <div className={`${styles["form-data"]} d-flex flex-column m-4 w-50`}>
                                    <label for="">Email Address :</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        // onChange={this.valueEmail}
                                        placeholder="Input email address" />
                                    <label for="">Delivery Address :</label>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        // value={address}
                                        onChange={this.valueAddress}
                                        placeholder={address}
                                        disabled={this.state.isEdit} />
                                </div>
                                <div className={`${styles["form-data"]} d-flex flex-column m-4 w-50`}>
                                    <label for="">Mobile Number :</label>
                                    <input
                                        type="tel"
                                        name="phone_number"
                                        id="phone_number"
                                        value={phone_number}
                                        // onChange={this.valuePhone_number}
                                        placeholder="Input your phone number" />
                                </div>
                            </div>
                            <div className={`${styles["title-form"]} d-flex flex-row justify-content-between my-3 px-5 py-2 `}>
                                <span>Details</span>
                            </div>
                            <div className={`${styles["data-form"]} d-flex flex-row p-3 `}>
                                <div className={`${styles['form-data']} d-flex flex-column m-4 w-50`}>
                                    <label for="">Display Name :</label>
                                    <input type="text"
                                        name="displayname"
                                        id="displayname"
                                        // value={displayname}
                                        onChange={this.valueDisplayname}
                                        placeholder={displayname}
                                        disabled={this.state.isEdit} />
                                    <label for="">First Name :</label>
                                    <input type="text"
                                        name="firstname"
                                        id="firstname"
                                        // value={firstname}
                                        onChange={this.valueFirstname}
                                        placeholder={firstname}
                                        disabled={this.state.isEdit} />
                                    <label for="">Last Name :</label>
                                    <input type="text"
                                        name="lastname"
                                        id="lastname"
                                        // value={lastname}
                                        onChange={this.valueLastname}
                                        placeholder={lastname}
                                        disabled={this.state.isEdit} />
                                </div>
                                <div className={`${styles["form-data"]} d-flex flex-column m-4 w-50`}>
                                    <label for="">Birthday :</label>
                                    <input type={this.state.isEdit ? "text" : "date"}
                                        name="birthday"
                                        id="birthday"
                                        // value={birthday}
                                        onChange={this.valueBirthday}
                                        placeholder={birthday === null ? null : birthday.slice(0, 10).split("-").reverse().join("/")}
                                        disabled={this.state.isEdit} />
                                </div>
                            </div>

                            <div className="container d-flex flex-row flex-warp justify-content-center mt-3">
                                {/* <div className="form-check mx-5">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="male" checked />
                                    <label className="form-check-label" for="male">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check mx-5">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="female" />
                                    <label className="form-check-label" for="female">
                                        Female
                                    </label>
                                </div> */}
                                <div className={styles.input__radio}>
                                    <input
                                        type="radio"
                                        name="gender"
                                        id="male"
                                        value={"male"}
                                        onChange={this.valueGender}
                                        checked={gender === "male"}
                                        disabled={this.state.isEdit}
                                    />
                                    <label
                                        htmlFor="MALE"
                                        className={styles.radio_label}
                                    >
                                        Male
                                    </label>
                                </div>
                                <div className={styles.input__radio}>
                                    <input
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        value={"female"}
                                        onChange={this.valueGender}
                                        checked={gender === "female"}
                                        disabled={this.state.isEdit}
                                    />
                                    <label
                                        htmlFor="FEMALE"
                                        className={styles.radio_label}
                                    >
                                        Female
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                {/* <!-- End Container Full Center --> */}

                <Footer></Footer>
            </>
        )
    }
}


export default withNavigate(Profile);