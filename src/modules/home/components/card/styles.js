import styled from 'styled-components/native';
import {Colors} from '../../../../components/utils';
import LinearGradient from 'react-native-linear-gradient';

export const Contain = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Card = styled.View`
  width: 48%;
  margin: 10px 0;
`;

export const ContainImage = styled.View`
  width: 100%;
  height: 100px;
  box-shadow: 0px 0px 4px ${() => Colors.shadow};
  elevation: 4;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100px;
  border-radius: 10px;
`;

export const Text = styled.Text`
  color: ${() => Colors.text};
  font-size: 14px;
  margin-top: 6px;
`;

export const Mask = styled(LinearGradient).attrs({
  colors: ['#0000', '#0000', '#000000ab'],
})`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
`;
