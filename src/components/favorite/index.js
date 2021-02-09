import React from 'react';
import {Animated, Easing} from 'react-native';
import LottieView from 'lottie-react-native';
import {useSelector} from 'react-redux';

const Favorite = ({id}) => {
  const favorite = useSelector((state) => state.books.favorite || {});
  const [initalValue, setInitalValue] = React.useState(favorite[id] ? 1 : 0);
  const animation = new Animated.Value(initalValue);

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: favorite[id] ? 1 : 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => setInitalValue(favorite[id] ? 1 : 0));
  }, [favorite[id]]);

  return (
    <LottieView
      style={{
        width: 40,
        height: 40,
      }}
      progress={animation}
      source={require('../../lottiefiles/favorite.json')}
    />
  );
};

export default React.memo(Favorite);
