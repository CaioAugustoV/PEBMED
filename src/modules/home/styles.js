import styled from 'styled-components/native';
import { Colors } from '../../components/utils';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${() => Colors.background};
`;