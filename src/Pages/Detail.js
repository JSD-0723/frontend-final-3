import { ImageSlider } from "../Components/ImageSlider";

export const Detail = () => {
  const images = [
    "/Assets/class.png",
    "/Assets/chanel.png",
    "/Assets/biba.png",
  ];

  return (
    <>
      <ImageSlider images={images} />
    </>
  );
};
