import { Icon } from '@chakra-ui/react';
import { FaShoppingCart, FaCoffee } from 'react-icons/fa';

export const CartIcon = (props) => (
  <Icon as={FaShoppingCart} boxSize={6} {...props} />
);

export const LogoIcon = (props) => (
  <Icon as={FaCoffee} boxSize={6} {...props} />
);
