import * as React from 'react';
import * as Styles from './styles';
import {Icons} from '../utils';

const Header = () => (
  <Styles.Contain>
    <Styles.Icon>
      <Icons name="menu" color="#000" size={20} />
    </Styles.Icon>
    <Styles.TextLogo>
      WHITE<Styles.TextLogo bold>BOOK</Styles.TextLogo>
    </Styles.TextLogo>
  </Styles.Contain>
);

export default Header;
