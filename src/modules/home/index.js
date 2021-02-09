import * as React from 'react';
import * as Styles from './styles';
import Header from '../../components/header';
import Sessions from './components/sessions';

const HomeScreen = () => (
  <Styles.Contain>
    <Header />
    <Styles.Scroll>
      <Sessions />
      <Sessions />
    </Styles.Scroll>
  </Styles.Contain>
);

export default HomeScreen;
