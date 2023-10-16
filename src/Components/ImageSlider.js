import { Sheet } from "@mui/joy";
import React, { useState } from "react";
import { styled } from "@mui/joy/styles";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

const SliderContainer = styled(Sheet)(({ theme }) => ({
  width: "40vw",
  background: "var(--bright)",
}));

const DisplyedPic = styled(Sheet)(({ theme }) => ({
  background: "var(--bright)",
  width: "250px",
  height: "70%",
}));

const ThumbnailStack = styled(Sheet)(({ theme }) => ({
  background: "var(--bright)",
  textAlign: "center",
}));

const PreviewPic = styled("img")(({ theme }) => ({
  width: "80px",
  height: "80px",
}));

export const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <SliderContainer>
      <DisplyedPic>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
        />
      </DisplyedPic>
      <ThumbnailStack>
        <KeyboardArrowLeft onClick={prevSlide} />
        {images.map((image, index) => (
          <PreviewPic
            key={index}
            src={image}
            alt={`Image ${index}`}
            onClick={() => setCurrentImageIndex(index)}
            className={currentImageIndex === index ? "active" : ""}
          />
        ))}
        <KeyboardArrowRight onClick={nextSlide} />
      </ThumbnailStack>
    </SliderContainer>
  );
};
