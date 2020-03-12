import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  List,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ButtonAddToCart,
  CartAmount,
  CartAddText,
  CartAmountBox,
  CartAmountText,
} from './styles';

export default function Main() {
  Main.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      title: PropTypes.string,
      priceFormatted: PropTypes.number,
    }).isRequired,
  };

  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    getProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <ButtonAddToCart onPress={() => handleAddProduct(item.id)}>
          <CartAmount>
            <CartAmountBox>
              <Icon name="shopping-cart" size={20} color="#fff" />
              <CartAmountText>{amount[item.id] || 0}</CartAmountText>
            </CartAmountBox>
            <CartAddText>ADICIONAR</CartAddText>
          </CartAmount>
        </ButtonAddToCart>
      </Product>
    );
  }

  return (
    <Container>
      <List
        horizontal
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
    </Container>
  );
}
