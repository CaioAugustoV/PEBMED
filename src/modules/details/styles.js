import styled from 'styled-components/native';
import {Colors} from '../../components/utils';

export const Contain = styled.View`
  flex: 1;
  background-color: ${() => Colors.background};
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Texts = styled.View`
  padding: 25px 18px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const Text = styled.Text`
  margin-bottom: ${({margin}) => (margin ? 12 : 0)}px;
`;
