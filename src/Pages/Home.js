import { SlideShowComponent } from "../Components/SlideShowComponent";
import { Brands } from "../Components/Brands";
import Handpicked from "../Components/HandPicked";
import ThreeCards from "../Components/ThreeCards";
import { Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { useEffect, useState } from "react";
import {
  loadNewArrivals,
  loadHandpickedProducts,
  loadBrands,
} from "../Shared/API/FetchData";
import Carousel from "../Components/Carousel";

const Container = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: "var(--bright)",
  paddingBottom: "50px",
}));

export const Home = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [handpicked, setHandPicked] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    loadNewArrivals()
      .then((response) => {
        setNewArrivals(response.data);
      })
      .catch((error) => {
        console.log("Error fetching New Arrivals", error);
      });

    loadHandpickedProducts()
      .then((response) => {
        setHandPicked(response.data);
      })
      .catch((error) => {
        console.log("Error fetching Handpicked", error);
      });

    loadBrands()
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) => {
        console.log("Error fetching Brands", error);
      });
  }, []);

  const sliderNewArrivals = newArrivals.slice(0, 10);
  return (
    <>
      <Container>
        <SlideShowComponent newArrivals={sliderNewArrivals} />
        <Handpicked handpicked={handpicked} />
        <Brands brands={brands} />
        <ThreeCards />
      </Container>
    </>
  );
};
