import styled from 'styled-components/native';
import { Colors } from '../utils'

export const Contain = styled.View`
  background-color: ${() => Colors.background};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 18px;
  box-shadow: 0px 5px 2px ${() => Colors.shadow};
`;

export const Icon = styled.Pressable`
  position: absolute;
  left: 18px;
`;

export const TextLogo = styled.Text`
  font-size: 20px;
  ${({ bold }) => bold && "font-weight: bold;"}
`;