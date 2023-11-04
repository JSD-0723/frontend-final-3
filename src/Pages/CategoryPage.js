import Category from "../Components/Category";
import { useEffect, useState } from "react";
import { searchProduct } from "../Shared/API/FetchData";
import { useSearchParams } from "react-router-dom";

export const CategoryPage = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams(
    window.location.search
  );

  const newArrivals = searchParams.get("newArrivals");
  const categoryName = searchParams.get("categoryName");
  const brandName = searchParams.get("brandName");
  const queryParams = {
    newArrival: newArrivals,
    categoryName: categoryName,
    brandName: brandName,
  };
  useEffect(() => {
    searchProduct(queryParams)
      .then((response) => {
        setCategoryProduct(response.data);
      })
      .catch((error) => {
        console.log("Error in fetching data", error);
      });
  }, [searchParams]);
  console.log(categoryProduct);

  return <Category categoryProduct={categoryProduct} />;
};
