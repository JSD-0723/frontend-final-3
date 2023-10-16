import { ImageSlider } from "../Components/ImageSlider";

export const Detail = () => {
  const images = [
    "../Assets/chanel.png",
    "../Assets/chanel.png",
    "../Assets/chanel.png",
  ];

  return (
    <>
      <ImageSlider images={images} />
    </>
  );
};
