import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  useToast,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { createClient } from '@supabase/supabase-js';

const Login = () => {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const toast = useToast();

  const history = useNavigate();

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setPasswordConfirm("");
    setShowPassword(false);
    setShowPasswordConfirm(false);
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const showToast = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 3000,
      isClosable: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      (isLoginForm && (email === "" || password === "")) ||
      (!isLoginForm && (email === "" || password === "" || firstName === "" || lastName === "" || passwordConfirm === ""))
    ) {
      showToast("Error", isLoginForm ? "Please provide your email and password." : "Please fill in all fields.", "error");
      return;
    }

    try {
      let error;
      if (isLoginForm) {
        ({ error } = await supabase.auth.signIn({ email, password }));
      } else {
        ({ error } = await supabase.auth.signUp({ email, password }));
        if (!error) {
          const { user, error } = await supabase
            .from('userprofile')
            .insert([
              { email, firstname: firstName, lastname: lastName }
            ]);
          if (error) {
            showToast("Error", error.message, "error");
            return;
          }
        }
      }
      if (error) {
        showToast("Error", error.message, "error");
        return;
      }
      showToast("Success", isLoginForm ? "You have successfully logged in." : "You have successfully signed up.", "success");
      history.push("/user");
    } catch (error) {
      showToast("Error", error.message, "error");
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
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => handleInputChange(e, setEmail)}
                  disabled={isSubmitting}
                />
              </InputGroup>
            </FormControl>

            {!isLoginForm && (
              <>
                <FormControl isRequired>
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => handleInputChange(e, setFirstName)}
                      disabled={isSubmitting}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => handleInputChange(e, setLastName)}
                      disabled={isSubmitting}
                    />
                  </InputGroup>
                </FormControl>
              </>
            )}

            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<LockIcon />} />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => handleInputChange(e, setPassword)}
                  disabled={isSubmitting}
                  autoComplete="current-password"
                />
                <InputRightElement>
                  <Button
                    variant="ghost"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            {!isLoginForm && (
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<LockIcon />} />
                  <Input
                    type={showPasswordConfirm ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    onChange={(e) => handleInputChange(e, setPasswordConfirm)}
                    disabled={isSubmitting}
                  />
                  <InputRightElement>
                    <Button
                      variant="ghost"
                      onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                    >
                      {showPasswordConfirm ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
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
