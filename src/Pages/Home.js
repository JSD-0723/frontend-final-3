import { SlideShowComponent } from "../Components/SlideShowComponent";
import { Brands } from "../Components/Brands";
import Handpicked from "../Components/HandPicked";
import ThreeCards from "../Components/ThreeCards";
import { Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { useEffect, useState } from "react";
import { loadNewArrivals } from "../Shared/API/FetchData";
import Carousel from "../Components/Carousel";

const Container = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: "var(--bright)",
  paddingBottom: "50px",
}));

export const Home = () => {
  const [newArrivals, setNewArriavls] = useState([]);

  useEffect(() => {
    loadNewArrivals()
      .then((response) => {
        setNewArriavls(response.data);
      })
      .catch((error) => {
        console.log("Error in fetching data", error);
      });
  }, []);

  const sliderNewArrivals = newArrivals.slice(0, 10);
  return (
    <>
      <Container>
        <SlideShowComponent newArrivals={sliderNewArrivals} />
        <Handpicked />
        <Brands />
        <ThreeCards />
      </Container>
    </>
  );
};
