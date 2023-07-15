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
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Login = () => {
  const toast = useToast();

  const navigate = useNavigate();

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
    const value =e.target.value;
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
    console.log("Form submitted");

    if (
      (isLoginForm && (email === "" || password === "")) ||
      (!isLoginForm &&
        (email === "" ||
          password === "" ||
          firstName === "" ||
          lastName === "" ||
          passwordConfirm === ""))
    ) {
      showToast(
        "Error",
        isLoginForm ? "Please provide your email and password." : "Please fill in all fields.",
        "error"
      );
      return;
    }
  
    try {
      console.log("Email:", email);

      if (isLoginForm) {
        console.log("Sign in with email:", email);
        const { user, error } = await supabase.auth.signInWithPassword({
          email: email, 
          password: password
        });
  
        if (error) {
          showToast("Error", error.message, "error");
          return;
        }
  
        showToast("Success", "You have successfully logged in.", "success");
  
        navigate("/user"); // Redirect to the User page
      } else {
        console.log("Sign up with email:", email);
        const { data: existingUser, error: existingUserError } = await supabase
          .from("auth.users")
          .select("*")
          .eq("email", email)
          // .limit(1)
          .single();
  
        if (existingUserError) {
          showToast("Error", existingUserError.message, "error");
          return;
        }
  
        if (existingUser) {
          showToast("Error", "Email already exists. Please use a different email.", "error");
          return;
        }
  
        const { user, error } = await supabase.auth.signUp({ email, password });
  
        if (error) {
          showToast("Error", error.message, "error");
          return;
        }
  
        const { data: newUser, insertError } = await supabase
          .from("auth.users")
          .insert([{ email, firstname: firstName, lastname: lastName }])
          .single();
  
        if (insertError) {
          showToast("Error", insertError.message, "error");
          return;
        }
  
        showToast("Success", "You have successfully signed up.", "success");
  
        navigate("/user"); // Redirect to the User page
      }
    } catch (error) {
      console.log("Error:", error);
      showToast("Error", error.message, "error");
    }
  };

  return (
    <Flex
      minHeight="100vh"
      width="100%"
      align="center"
      justify="center"
      bg="#EFEFEF"
    >
      <Box py={8} px={4} width="sm" bg="white" borderRadius="md" boxShadow="md">
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
                    autoComplete="email"
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

              <Button
                colorScheme="teal"
                type="submit"
                isLoading={isSubmitting}
                loadingText="Submitting..."
              >
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
    </Flex>
  );
};

export default Login;
