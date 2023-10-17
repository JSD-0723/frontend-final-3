import { Sheet } from "@mui/joy";
import { ImageSlider } from "../Components/ImageSlider";

export const Detail = () => {
  const images = [
    "/Assets/class.png",
    "/Assets/chanel.png",
    "/Assets/biba.png",
  ];

  return (
    <>
      <Sheet sx={{ display: "flex", justifyContent: "space-around" }}>
        <ImageSlider images={images} />
        <Sheet>Test component</Sheet>
      </Sheet>
    </>
  );
};
