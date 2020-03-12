import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductList,
  Product,
  ProductInfo,
  ProductImage,
  ProductText,
  ProductTitle,
  ProductPrice,
  ProductAmountValue,
  ProductInputValue,
  ProductTotalPrice,
  Total,
  TotalText,
  TotalPrice,
  FinalizarPedido,
  FinalizarPedidoText,
  ProductDelete,
  ProductDecrement,
  ProductIncrement,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductList>
        {cart.map(product => (
          <Product key={product.id}>
            <ProductInfo>
              <ProductImage
                source={{ uri: product.image }}
                alt={product.title}
              />
              <ProductText>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductText>
              <ProductDelete
                onPress={() => dispatch(CartActions.removeFromCart(product.id))}
              >
                <Icon name="delete-forever" size={25} color="#7159c1" />
              </ProductDelete>
            </ProductInfo>
            <ProductAmountValue>
              <ProductDecrement onPress={() => decrement(product)}>
                <Icon name="remove-circle-outline" size={25} color="#7159c1" />
              </ProductDecrement>
              <ProductInputValue>{product.amount}</ProductInputValue>
              <ProductIncrement onPress={() => increment(product)}>
                <Icon name="add-circle-outline" size={25} color="#7159c1" />
              </ProductIncrement>
              <ProductTotalPrice>{product.subtotal}</ProductTotalPrice>
            </ProductAmountValue>
          </Product>
        ))}
        <Total>
          <TotalText>TOTAL</TotalText>
          <TotalPrice>{total}</TotalPrice>
        </Total>
        <FinalizarPedido>
          <FinalizarPedidoText>FINALIZAR PEDIDO</FinalizarPedidoText>
        </FinalizarPedido>
      </ProductList>
    </Container>
  );
}
