import React, { useState, useEffect } from "react";
import { Box, Button, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const imageMaxHeight = useBreakpointValue({ base: "250px", sm: "400px" });
  const imageBorderRadius = useBreakpointValue({ base: "6px", sm: "8px" });

  return (
    <Box position="relative">
      <Button
        position="absolute"
        left="0"
        top="50%"
        transform="translateY(-50%)"
        onClick={handlePrevImage}
      >
        <ChevronLeftIcon boxSize={6} />
      </Button>
      <Button
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
        onClick={handleNextImage}
      >
        <ChevronRightIcon boxSize={6} />
      </Button>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex}`}
        style={{
          width: "100%",
          objectFit: "cover",
          maxHeight: imageMaxHeight,
          height: "auto",
          borderRadius: imageBorderRadius,
        }}
      />
    </Box>
  );
};

export default Carousel;
