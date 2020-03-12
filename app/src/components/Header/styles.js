import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  background: #000;
  padding: 20px 20px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoLink = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const CartContainer = styled.TouchableOpacity``;

export const ItemCount = styled.Text`
  background: #7159c1;
  color: #fff;
  position: absolute;
  text-align: center;
  font-size: 12px;
  padding: 0px 5px;
  border-radius: 8px;
  right: -5px;
  top: -5px;
`;
