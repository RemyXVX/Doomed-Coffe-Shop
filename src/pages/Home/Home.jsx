import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  Link as ChakraLink,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

import coffeeBackground from './../../assets/images/coffeebackground.jpg';
import pourover from './../../assets/images/pourover.png';
import scoopbagbean from './../../assets/images/scoopbagbean.png';
import cupwbean from './../../assets/images/cupwbeans.png';
import express from './../../assets/images/express.png';
import basiccoffee from './../../assets/images/basiccoffee.png'

const Home = () => {
  const images = [pourover, scoopbagbean, cupwbean, express];

  const imageMaxHeight = useBreakpointValue({ base: "150px", sm: "250px" });
  const imageBorderRadius = useBreakpointValue({ base: "6px", sm: "8px" });

  return (
    <Flex direction="column" align="center">
      <Image src={coffeeBackground} maxW="100%" h="550px" objectFit="cover" alt="A brown background with a stencil of a table and a coffee cup on it" />
      <Container maxW="xl" bg="#EFEFEF" borderRadius="md" p={1} mt={4}>
        <VStack spacing={4} align="stretch">
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              About Our Beans
            </Text>
            <Box
              mt={2}
              style={{
                textIndent: 20,
                overflow: "auto",
                maxHeight: "370px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <Text mt={2} style={{ textIndent: 20 }}>
                Welcome to our Coffee Distribution Spot! At our company, we take pride in sourcing and supplying the finest coffee beans to local coffee shops. We believe that great coffee starts with exceptional beans. Explore our selection of carefully curated beans from around the world. Whether you prefer the rich flavors of Guatemalan beans, the vibrant notes of Ethiopian coffee, the boldness of Indonesian brews, or the smoothness of Colombian roasts, we have something to satisfy every coffee enthusiast. Choose your desired roast level - from the light, delicate profiles of our Light Roast, to the balanced and full-bodied Medium Roast, or indulge in the deep, intense flavors of our Dark Roast. Select the quantity and size that suits your needs, and get ready to experience coffee like never before. Our beans are available in various package sizes, including Small, Medium, Large, and even the CHONK bag for the true coffee connoisseurs. Start your coffee journey with us today! Fill out the form below to place your order and savor the taste of exceptional coffee. Cheers to the perfect cup!
              </Text>
            </Box>
            <ChakraLink as={Link} to="/Story" fontSize="lg" fontWeight="bold" mt={4}>
              Learn More <ArrowForwardIcon ml={2} />
            </ChakraLink>
          </Box>

          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Hours of Operation
            </Text>
            <Text mt={2} textAlign="center">
              <Image
                src={basiccoffee}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  maxHeight: imageMaxHeight,
                  height: "auto",
                  borderRadius: imageBorderRadius,
                }}
                alt="Basic Coffee"
              />
              Monday - Friday: 8:00 AM - 6:00 PM <br />
              Saturday: 9:00 AM - 5:00 PM <br />
              Sunday: Closed
            </Text>
            <ChakraLink as={Link} to="/Contact" fontSize="lg" fontWeight="bold" mt={4}>
              Contact Us <ArrowForwardIcon ml={2} />
            </ChakraLink>
          </Box>

          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Sign up for Hot Deals!
            </Text>
            <Text mt={2} textAlign="center">
              Sign up for our newsletter to receive hot deals and ensure your coffee shops never run out of coffee.
            </Text>
            <Carousel images={images} />
            <ChakraLink as={Link} to="/Login" fontSize="lg" fontWeight="bold" mt={4}>
              Sign Up Now <ArrowForwardIcon ml={2} />
            </ChakraLink>
          </Box>
        </VStack>
      </Container>
    </Flex>
  );
};

export default Home;
