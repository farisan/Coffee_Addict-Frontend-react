import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

import css from "../../styles/Auth.module.css";

function Otp() {

  const { otp } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    axios
    .get(
      `${process.env.REACT_APP_BACKEND_HOST}/auth/${otp}`,
    )
    .then(() => console.log("success"))
    .catch((err) => console.log(err));

  }, [])

  const toLogin = () => navigate("/login");

  return (
    <>
    <div
        className={`container-fluid ${css.container}`}
      >
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <p className={css.verify}>
            Verifiy Account
          </p>
          <p
            className={`${css.success} text-success`}
          >
            Success
          </p>
          <button
            className={css.login}
            onClick={toLogin}
          >
            Click here to login
          </button>
        </div>
      </div>
    </>
  )
}

export default Otp