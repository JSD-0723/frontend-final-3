import { Box } from "@mui/joy";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/joy/styles";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import CircularSpinner from "./CircularSpinner";

const SliderContainer = styled(Box)(({ theme }) => ({
  width: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const DisplyedPic = styled("img")(({ theme }) => ({
  width: "100%",
  aspectRatio: "5/4",
  borderRadius: "16px",
}));

const ThumbnailStack = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

const PreviewPic = styled("img")(({ theme }) => ({
  maxWidth: "80px",
  maxHeight: "80px",
  aspectRatio: 1 / 1,
  borderRadius: "8px",
}));

export const ImageSlider = ({ altImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (altImages && altImages.length > 0) {
      setLoading(false);
    }
  }, [altImages]);

  if (loading) {
    return <CircularSpinner />;
  }

  if (!altImages || altImages.length === 0) {
    return <p>No images available</p>;
  }

  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % altImages.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? altImages.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <SliderContainer>
      <DisplyedPic
        src={altImages[currentImageIndex]}
        alt={`Image ${currentImageIndex}`}
      />
      <ThumbnailStack>
        <KeyboardArrowLeft onClick={prevSlide} />
        {altImages.map((image, index) => (
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

