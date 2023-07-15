import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      bg="#EFEFEF"
      py={8}
    >
      <Box
        maxW="700px"
        bg="#3F2305"
        borderRadius="md"
        textAlign="center"
        px={10}
        py={4}
      >
        <Heading as="h1" fontSize="3xl" mb={4} color="#EFEFEF">
          The beans and the culture of the distros
        </Heading>
      </Box>
      <Box 
  maxW="700px" 
  py={4}
  px={8}
  flexGrow={1} 
  textAlign="justify" 
  bg="#F2EAD3"
  borderRadius="md"
  mt={8}
  display="flex"
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
>
  <Text fontSize="lg" mb={4}>
    Our coffee bean distro has a rich history that dates back to Guatemala, where it all began. We started as honest farmers, cultivating coffee beans with passion and dedication. Through generations of hard work and a deep connection to the land, we were able to grow and establish ourselves as a trusted source of high-quality coffee beans.
  </Text>
  <Text fontSize="lg" mb={4}>
    Over the years, our connections expanded, and we forged partnerships with farmers and suppliers who shared our commitment to excellence. With their support, we were able to source the finest coffee beans from the most renowned coffee-growing regions around the world.
  </Text>
  <Text fontSize="lg" mb={4}>
    Each milestone and achievement along our journey has been a testament to our unwavering dedication. We have tirelessly worked to perfect our craft and ensure that every batch of beans we offer is of exceptional quality. Our mission is to bring the world the best-tasting coffee beans, meticulously selected and roasted to perfection.
  </Text>
  <Text fontSize="lg" mb={4}>
    Today, we take pride in our legacy and continue to innovate and explore new horizons in the world of coffee. With each cup brewed from our beans, we aim to create a memorable and delightful experience for coffee lovers everywhere.
  </Text>
</Box>

    </Flex>
  );
};

export default About;
