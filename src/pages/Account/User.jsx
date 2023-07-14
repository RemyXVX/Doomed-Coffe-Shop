import { useEffect, useState } from "react";
import { useAuth } from "@supabase/supabase-js";
import {
  Box,
  Flex,
  Text,
  VStack,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const User = () => {
  const { user, session } = useAuth();
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase
          .from("auth.users")
          .select("email")
          .eq("id", user.id)
          .single();

        if (error) {
          showToast("Error", error.error_description, "error");
          return;
        }

        setEmail(data.email);
      } catch (error) {
        showToast("Error", error.message, "error");
      }
    };

    if (user) {
      fetchUser();
    }
  }, [user]);

  const showToast = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 3000,
      isClosable: true,
    });
  };

  const handleUpdateEmail = async () => {
    try {
      const { error } = await supabase.auth.updateUser(session.user, {
        email,
      });

      if (error) {
        showToast("Error", error.message, "error");
        return;
      }

      showToast("Success", "Email updated successfully.", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  const handleUpdatePassword = async () => {
    try {
      const { error } = await supabase.auth.updateUser(session.user, {
        password,
      });

      if (error) {
        showToast("Error", error.message, "error");
        return;
      }

      showToast("Success", "Password updated successfully.", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return (
    <>
    <div>hello world</div>
    <Box py={8} px={4}>
      <Flex direction="column" align="center">
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          User Profile
        </Text>
        <VStack spacing={4} align="stretch">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button colorScheme="teal" onClick={handleUpdateEmail}>
            Update Email
          </Button>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button colorScheme="teal" onClick={handleUpdatePassword}>
            Update Password
          </Button>
          {/* Add more sections/components for viewing past orders, etc. */}
        </VStack>
      </Flex>
    </Box>
    </>
  );
};

export default User;
