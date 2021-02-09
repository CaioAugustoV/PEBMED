import styled from 'styled-components/native';
import { Colors } from '../../components/utils';

export const Contain = styled.View`
  flex: 1;
  background-color: ${() => Colors.background};
`;

export const SafeArea = styled.SafeAreaView`
  background-color: ${() => Colors.background};
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;