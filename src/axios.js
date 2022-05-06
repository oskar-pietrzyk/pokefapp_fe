import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_PROXY_HOST,
  headers: {
    common: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
  },
});

export default instance;
