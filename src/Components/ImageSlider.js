import { Sheet } from "@mui/joy";
import React, { useState } from "react";
import { styled } from "@mui/joy/styles";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

const SliderContainer = styled(Sheet)(({ theme }) => ({
  width: "100%",
  
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const DisplyedPic = styled("img")(({ theme }) => ({
  width: '100%',
  aspectRatio: '5/4',
  borderRadius: "16px",
}));

const ThumbnailStack = styled(Sheet)(({ theme }) => ({
  marginTop: "20px",
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

const PreviewPic = styled("img")(({ theme }) => ({
  maxWidth: "80px",
  maxHeight: "80px",
  aspectRatio: 1/1,
  borderRadius: "8px",
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
      <DisplyedPic
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex}`}
      />
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

