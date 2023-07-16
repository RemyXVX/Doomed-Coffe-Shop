import { Box, Heading, Text, Link, Flex, Input, Button, Stack, Textarea } from "@chakra-ui/react";
import { FaInstagram, FaYelp, FaFacebook, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <Box py={8} px={4} minH="100vh">
      <Box
        maxW="700px"
        mx="auto"
        p={4}
        borderRadius="md"
        textAlign="center"
        mb={8}
      >
        <Heading as="h1" fontSize="3xl" mb={4} color="white" bg="#3F2305" py={4} borderRadius="md">
          Contact Us
        </Heading>
        <Box borderBottom="1px" borderColor="gray.500" mb={4}></Box>
        <Text mb={4} color="black">
          Hours of Operation:<br />
          Monday - Friday: 8:00 AM - 6:00 PM<br />
          Saturday: 9:00 AM - 5:00 PM<br />
          Sunday: Closed
        </Text>
        <Box borderTop="1px" borderColor="gray.500" mb={2}></Box>
      </Box>
      <Box maxW="700px" mx="auto" mb={8}>
        <Box p={4} bg="white" borderRadius="md" boxShadow="md">
        <form
          action="https://formsubmit.co/9dfc99f646e2a0b512e65a4238ed0aec"
          method="POST"
        >
          <Stack spacing={4} direction="column">
            <Input type="text" name="name" bg="#F2F2F2" required placeholder="Name" />
            <Input type="email" name="email" bg="#F2F2F2" required placeholder="Email" />
            <Textarea name="message" required placeholder="Message" bg="#F2F2F2" />
            <Button type="submit" colorScheme="yellow" variant="solid">Send</Button>
          </Stack>
        </form>
        </Box>
      </Box>
      <Flex justify="center" mt={4}>
        <Link href="https://www.instagram.com" target="_blank" mx={4}>
          <FaInstagram size={32} />
        </Link>
        <Link href="https://www.yelp.com" target="_blank" mx={4}>
          <FaYelp size={32} />
        </Link>
        <Link href="https://www.facebook.com" target="_blank" mx={4}>
          <FaFacebook size={32} />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" mx={4}>
          <FaTwitter size={32} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Contact;
