import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, LogoLink, Logo, CartContainer, ItemCount } from './styles';

export default function Header({ navigation }) {
  Header.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <LogoLink onPress={() => navigation.navigate('Main')}>
        <Logo />
      </LogoLink>
      <CartContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={25} color="#fff" />
        <ItemCount>{cartSize}</ItemCount>
      </CartContainer>
    </Container>
  );
}
