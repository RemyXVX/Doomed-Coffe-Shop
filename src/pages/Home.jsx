import { Box, Flex, Image, Text, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import coffeeBackground from './../assets/images/coffeebackground.jpg';

const Home = () => {
  return (
    <Box height="400px">
      {/* Big Image */}
      <Image src={coffeeBackground} alt="A brown background with a stencil of a table and a coffee cup on it" />

      {/* Content */}
      <Flex justify="center" align="center" py={8}>
        <VStack spacing={6}>
          {/* Row 1 */}
          <Flex direction="column" align="center">
            <Text fontSize="xl" fontWeight="bold">
              About Our Beans
            </Text>
            <Text textAlign="center">
              Short information about our beans goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              condimentum, libero a fermentum dapibus, leo sem vestibulum lacus, sed dapibus velit diam a justo.
            </Text>
            <ChakraLink as={Link} to="/another-page" fontSize="lg" fontWeight="bold" mt={4}>
              Learn More <ArrowForwardIcon ml={2} />
            </ChakraLink>
          </Flex>

          {/* Row 2 */}
          <Flex direction="column" align="center">
            <Text fontSize="xl" fontWeight="bold">
              Hours of Operation
            </Text>
            <Text textAlign="center">
              Monday - Friday: 8:00 AM - 6:00 PM <br />
              Saturday: 9:00 AM - 5:00 PM <br />
              Sunday: Closed
            </Text>
            <ChakraLink as={Link} to="/contact" fontSize="lg" fontWeight="bold" mt={4}>
              Contact Us <ArrowForwardIcon ml={2} />
            </ChakraLink>
          </Flex>

          {/* Row 3 */}
          <Flex direction="column" align="center">
            <Text fontSize="xl" fontWeight="bold">
              Sign up for Hot Deals!
            </Text>
            <Text textAlign="center">
              Sign up for our newsletter to receive hot deals and ensure your coffee shops never run out of coffee.
            </Text>
            <ChakraLink as={Link} to="/Login" fontSize="lg" fontWeight="bold" mt={4}>
              Sign Up Now <ArrowForwardIcon ml={2} />
            </ChakraLink>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Home;
