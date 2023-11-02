import Category from "../Components/Category";
import { useEffect, useState } from "react";
import { loadNewArrivals } from "../Shared/API/FetchData";
import { useParams } from "react-router-dom";
import { loadCategoryProducts } from "../Shared/API/FetchData";

export const CategoryPage = () => {
  const [newArrivals, setNewArriavls] = useState([]);
  const [categoryProduct, setCategoryProduct] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    loadNewArrivals()
      .then((response) => {
        setNewArriavls(response.data);
      })
      .catch((error) => {
        console.log("Error in fetching data", error);
      });
  }, []);

  useEffect(() => {
    loadCategoryProducts(categoryId)
      .then((response) => {
        setCategoryProduct(response.data);
      })
      .catch((error) => {
        console.log("Error in fetching data", error);
      });
  });

  console.log(categoryProduct);

  return <Category products={newArrivals} />;
};
