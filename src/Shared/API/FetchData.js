import axios from "axios";

const BACKEND_HOST = "https://final-project-rk77.onrender.com/";

const BACKUP_HOST = "https://e-commerce.cleverapps.io/";

export const loadNewArrivals = () => {
  return axios
    .get(`${BACKUP_HOST}api/products/v1/search?newArrival=true&page=1`)
    .then((response) => response.data);
};

export const loadCategories = () => {
  return axios
    .get("https://e-commerce.cleverapps.io/api/categories")
    .then((response) => response.data);
};

export const searchProduct = (queryParams) => {
  const queryString = new URLSearchParams(queryParams).toString();
  return axios
    .get(`${BACKUP_HOST}api/products/v1/search?${queryString}`)
    .then((response) => response.data);
};
