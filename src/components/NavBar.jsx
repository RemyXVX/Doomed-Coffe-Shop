import React, { useContext } from 'react';
import {
  Flex,
  Text,
  Button,
  Box,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { CartIcon, LogoIcon } from './Icon';
import { CartContext } from './CartStore';
import { Link } from 'react-router-dom';

const Navbar = ({ user, online }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <Flex bg="#EFEFEF" p={4} alignItems="center">
      <Container maxW="xl">
        <Flex align="center" justify="space-between">
          <Box>
            <Link to="/">
              <LogoIcon />
            </Link>
          </Box>

          <Box ml={4}>
            <Text fontWeight="bold">Coffee Distro</Text>
          </Box>

          <Spacer />

          <Box display={{ base: 'none', md: 'block' }}>
            <Flex align="center">
              <Link to="/about">
                <Button variant="ghost" mr={2}>
                  About
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" mr={2}>
                  Contact
                </Button>
              </Link>
              {!online ? (
                <>
                  <Link to="/ordering">
                    <Button variant="ghost" mr={2}>
                      Ordering
                    </Button>
                  </Link>

                  <Button variant="ghost" mr={2}>
                    {user.name}
                  </Button>

                  <Link to="/cart">
                    <Button variant="ghost" mr={2} leftIcon={<CartIcon />}>
                      {cartItems.length > 0 && (
                        <span className="cart-count">{cartItems.length}</span>
                      )}
                    </Button>
                  </Link>
                </>
              ) : (
                <Link to="/login">
                  <Button variant="ghost" mr={2}>
                    Sign-in / Login
                  </Button>
                </Link>
              )}
            </Flex>
          </Box>

          <Box display={{ base: 'block', md: 'none' }}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
                Menu
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to="/about">About</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/contact">Contact</Link>
                </MenuItem>
                {!online && (
                  <>
                    <MenuItem>
                      <Link to="/ordering">Ordering</Link>
                    </MenuItem>
                    <MenuItem>{user.name}</MenuItem>
                    <MenuItem>
                      <Link to="/cart">
                        Cart {cartItems.length > 0 && (
                          <span className="cart-count">{cartItems.length}</span>
                        )}
                      </Link>
                    </MenuItem>
                  </>
                )}
                {online && (
                  <MenuItem>
                    <Link to="/login">Sign-in / Login</Link>
                  </MenuItem>
                )}
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
