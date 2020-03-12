import { ScrollView } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px 20px 20px 5px;
  background: #000000;
`;

export const Text = styled.Text`
  color: #fff;
`;

export const ListItems = styled(ScrollView)`
  flex: 1;
`;

export const List = styled.FlatList``;

export const Product = styled.View`
  background: #fff;
  width: 220px;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  line-height: 21px;
`;
export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 25px;
  margin-top: 5px;
  margin-bottom: 15px;
`;
export const ButtonAddToCart = styled.TouchableOpacity`
  background: #7159c1;
  margin-top: auto;
  border-radius: 5px;
`;
export const CartAmount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CartAddText = styled.Text`
  color: #fff;
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: 19px;
  align-content: center;
`;

export const CartAmountBox = styled.View`
  background: rgba(0, 0, 0, 0.1);
  flex-direction: row;
  padding: 10px;
`;

export const CartAmountText = styled.Text`
  color: #fff;
  margin-left: 5px;
  font-size: 14px;
  font-weight: bold;
`;
