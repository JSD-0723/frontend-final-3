import Category from "../Components/Category";
import { useEffect, useState } from "react";
import { searchProduct } from "../Shared/API/FetchData";
import { useSearchParams } from "react-router-dom";

export const CategoryPage = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [searchParams] = useSearchParams(window.location.search);

  const newArrival = searchParams.get("newArrivals");
  const categoryName = searchParams.get("categoryName");
  const brandName = searchParams.get("brandName");

  useEffect(() => {
    const queryParams = {
      newArrival,
      categoryName,
      brandName,
    };
    searchProduct(queryParams)
      .then((response) => {
        setCategoryProduct(response.data);
      })
      .catch((error) => {
        console.log("Error in fetching data", error);
      });
  }, [newArrival, categoryName, brandName]);

  return <Category categoryProduct={categoryProduct} />;
};
