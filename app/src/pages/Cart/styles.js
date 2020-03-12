import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 30px 20px 20px 20px;
  padding: 15px;
  border-radius: 4px;
  background: #fff;
`;

export const ProductList = styled.ScrollView``;

export const Product = styled.View`
  margin-bottom: 10px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductText = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 15px;
`;

export const ProductDelete = styled.TouchableOpacity``;

export const ProductTitle = styled.Text`
  font-size: 14px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDecrement = styled.TouchableOpacity``;
export const ProductIncrement = styled.TouchableOpacity``;

export const ProductAmountValue = styled.View`
  background: #eee;
  flex-direction: row;
  border-radius: 4px;
  padding: 10px;
  align-items: center;
`;

export const ProductInputValue = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  height: auto;
  padding: 0px;
  text-align: center;
  width: 80px;
  margin: 0px 10px;
`;

export const ProductTotalPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: center;
`;

export const Total = styled.View`
  margin: 10px 0 30px 0;
  align-items: center;
`;

export const TotalText = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 18px;
`;
export const TotalPrice = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 28px;
`;
export const FinalizarPedido = styled.TouchableOpacity`
  background: #7159c1;
  padding: 20px;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 4px;
`;
export const FinalizarPedidoText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
