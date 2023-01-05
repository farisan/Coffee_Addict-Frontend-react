import axios from 'axios';
const URLBE = process.env.REACT_APP_BACKEND_HOST

const getURL = URLBE;

// Axios register
export const Register = body => {
  return axios.post(`${getURL}/users`, body);
};

// Axios Get user by id
export const userID = token => {
  return axios.get(`${getURL}/users/UserID`, {
    headers: {
      'x-access-token': token,
    },
  });
};

// Axios Login
export const LoginUser = body => {
  return axios.post(`${URLBE}/auth`, body);
};

// Axios getHistory
export const getHistory = token => {
  return axios.get(`${URLBE}/transactions/history?page=1&limit=10`, {
    headers: {
      'x-access-token': token,
    },
  });
};

// Axios Logout
export const Logout = token => {
  return axios.delete(`${getURL}/auth`, {
    headers: {
      'x-access-token': token,
    },
  });
};

// Axios Transactions
export const transactions = (token, body) => {
  return axios.post(`${getURL}/transactions`, body, {
    headers: {
      'x-access-token': token,
    },
  });
};

// Axios getHistory All
export const getHistoryAll = token => {
  return axios.get(`${URLBE}/transactions/history`, {
    headers: {
      'x-access-token': token,
    },
  });
};

// Axios getHistory Admin
export const getHistoryAdmin = token => {
  return axios.get(`${URLBE}/transactions/status`, {
    headers: {
      'x-access-token': token,
    },
  });
};

// Axios Delete historyid
export const deleteHistoryId = (token, id) => {
  return axios.delete(`${URLBE}/transactions/${id}`, {
    headers: {
      'x-access-token': token,
    },
  });
};
export const deleteProduct = (token, id) => {
  return axios.delete(`${URLBE}/product/${id}`, {
    headers: {
      'x-access-token': token,
    },
  });
};

// Axios Change Payment
// export const changePaymentStatus = (token, statusPayment, id) => {
//   return axios.patch(
//     `${URL}/transactions/users/${statusPayment}/${id}`,
//     {
//       headers: {
//         'x-access-token': token,
//       },
//     },
//   );
// };
export const changePaymentStatus = (token, body, id) => {
  return axios.patch(`${URLBE}/transactions/${id}`, body, {
    headers: {
      'x-access-token': token,
    },
  });
};

// Axios reset password
export const Resetpassword = (token, body) => {
  return axios.patch(`${URLBE}/users/editPasswords`, body, {
    headers: {
      'x-access-token': token,
    },
  });
};

//Axios patch profile
export const editProfile = (token, body) => {
  return axios.patch(`${getURL}/users/profile`, body, {
    headers: {
      'Content-Type' : 'multipart/form-data',
      'x-access-token': token,
    },
  });
};

//add product
export const addProduct = (token, body) => {
  return axios.post(`${getURL}/product`, body, {
    headers: {
      'Content-Type' : 'multipart/form-data',
      'x-access-token': token,
    },
  });
};

export const patchProduct = (token, body, id) => {
  return axios.patch(`${getURL}/product/${id}`, body, {
    headers: {
      'Content-Type' : 'multipart/form-data',
      'x-access-token': token,
    },
  });
};

//create promo
export const createPromo = (token, body) => {
  return axios.post(`${getURL}/promo`, body, {
    headers: {
      'Content-Type' : 'multipart/form-data',
      'x-access-token': token,
    },
  });
};

//edit promo
export const editPromo = (token, body, params) => {
  return axios.patch(`${URLBE}/promo/${params}`, body, {
    headers: {
      'Content-Type' : 'multipart/form-data',
      'x-access-token': token,
    },
  });
};

//edit product
export const editProduct = (token, body, params) => {
  return axios.patch(`${URLBE}/product/${params}`, body, {
    headers: {
      'Content-Type' : 'multipart/form-data',
      'x-access-token': token,
    },
  });
};


// Axios Delete promo
export const deletePromo = (token, id) => {
  return axios.delete(
    `${URLBE}/promo/${id}`,
    {
      headers: {
        'x-access-token': token,
      },
    },
  );
};