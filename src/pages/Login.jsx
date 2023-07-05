import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  FormControl,
  FormErrorMessage,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
  const toast = useToast();

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setEmail("");
    setFullName("");
    setPassword("");
    setPasswordConfirm("");
    setShowPassword(false);
    setShowPasswordConfirm(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (isLoginForm) {
      // Handle login submission
      if (email === "" || password === "") {
        toast({
          title: "Error",
          description: "Please provide your email and password.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        // Perform login logic
        setIsSubmitting(true);
        // Simulating login process
        setTimeout(() => {
          setIsSubmitting(false);
          toast({
            title: "Logged in",
            description: "You have successfully logged in.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }, 2000);
      }
    } else {
      // Handle signup submission
      if (email === "" || fullName === "" || password === "" || passwordConfirm === "") {
        toast({
          title: "Error",
          description: "Please fill in all fields.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else if (password !== passwordConfirm) {
        toast({
          title: "Error",
          description: "Passwords do not match.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        // Perform signup logic
        setIsSubmitting(true);
        // Simulating signup process
        setTimeout(() => {
          setIsSubmitting(false);
          toast({
            title: "Signed up",
            description: "You have successfully signed up.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }, 2000);
      }
    }
  };

  return (
    <Box py={8} px={4}>
      <Flex direction="column" align="center">
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          {isLoginForm ? "Login" : "Sign Up"}
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired isInvalid={email === ""}>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  disabled={isSubmitting}
                />
              </InputGroup>
            </FormControl>

            {!isLoginForm && (
              <FormControl isRequired isInvalid={fullName === ""}>
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={handleFullNameChange}
                  disabled={isSubmitting}
                />
              </FormControl>
            )}

            <FormControl isRequired isInvalid={password === ""}>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<LockIcon />} />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  disabled={isSubmitting}
                />
                <InputRightElement>
                  <IconButton
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    variant="ghost"
                    onClick={handleShowPassword}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            {!isLoginForm && (
              <FormControl isRequired isInvalid={passwordConfirm === ""}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<LockIcon />} />
                  <Input
                    type={showPasswordConfirm ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    onChange={handlePasswordConfirmChange}
                    disabled={isSubmitting}
                  />
                  <InputRightElement>
                    <IconButton
                      icon={showPasswordConfirm ? <ViewOffIcon /> : <ViewIcon />}
                      variant="ghost"
                      onClick={handleShowPasswordConfirm}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            )}

            <Button colorScheme="teal" type="submit" isLoading={isSubmitting} loadingText="Submitting...">
              {isLoginForm ? "Login" : "Sign Up"}
            </Button>
          </VStack>
        </form>
        <Text fontSize="lg" mt={4}>
          {isLoginForm ? "Don't have an account?" : "Already have an account?"}
          <Button variant="link" colorScheme="teal" size="sm" onClick={toggleForm} mx={1}>
            {isLoginForm ? "Sign Up" : "Login"}
          </Button>
        </Text>
      </Flex>
    </Box>
  );
};

export default Login;
