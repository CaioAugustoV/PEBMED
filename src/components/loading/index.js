import * as React from 'react';
import * as Styles from './styles';
import LottieView from 'lottie-react-native';

const Loading = () => (
  <Styles.Contain>
    <LottieView
      loop
      autoPlay
      source={require('../../lottiefiles/loading.json')}
    />
  </Styles.Contain>
);

export default Loading;
