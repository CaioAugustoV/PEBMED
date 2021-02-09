import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../../components/utils';

export const Contain = styled.View`
  width: 100%;
  height: 240px;
  background-color: #000;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 100%;
  height: 100%;
`;

export const Mask = styled(LinearGradient).attrs({
  colors: ['#000000d6', '#0000008a', '#0000'],
})`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  border-radius: 10px;
`;

export const SafeArea = styled.SafeAreaView`
  position: absolute;
  top: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Pressable = styled.Pressable`
  margin: 18px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #FFF;
`;

export const Favorite = styled.Pressable`
  z-index: 9999;
  position: absolute;
  top: 190;
  right: 18px;
  background-color: #191847;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  box-shadow: 0px 5px 2px ${() => Colors.shadow};
  elevation: 5;
  transform: translateY(25px);
`;