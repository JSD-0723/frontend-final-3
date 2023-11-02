import axios from "axios";

const BACKEND_HOST = "https://final-project-rk77.onrender.com/";

export const loadNewArrivals = () => {
  return axios
    .get(`${BACKEND_HOST}api/products/?newArrival=true&page=1`)
    .then((response) => response.data);
};

export const loadCategories = () => {
  return axios
    .get(`${BACKEND_HOST}api/categories`)
    .then((response) => response.data);
};

export const loadCategoryProducts = (categoryId) => {
  return axios
    .get(`${BACKEND_HOST}api/categories/${categoryId}`)
    .then((response) => response.data);
};
