import axios from "axios";

// const BACKEND_HOST = "https://final-project-rk77.onrender.com/";

const BACKUP_HOST = "https://e-commerce.cleverapps.io/api";

export const loadNewArrivals = () => {
  return axios
    .get(`${BACKUP_HOST}/products/v1/search?newArrival=true&page=1`)
    .then((response) => response.data);
};

export const loadHandpickedProducts = () => {
  return axios
    .get(`${BACKUP_HOST}/products/v1/search?handpickedProducts=true&page=1`)
    .then((response) => response.data);
};

export const loadBrands = () => {
  return axios.get(`${BACKUP_HOST}/brands`).then((response) => response.data);
};

export const loadCategories = () => {
  return axios
    .get(`${BACKUP_HOST}/categories`)
    .then((response) => response.data);
};


export const searchProduct = (query) => {
  const queryString = new URLSearchParams(query).toString();

  return axios
    .get(`${BACKUP_HOST}/products/v1/search?${queryString}`)
    .then((response) => response.data);
};

