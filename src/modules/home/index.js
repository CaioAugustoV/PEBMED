import * as React from 'react';
import {View, Text} from 'react-native';
import {Icons} from '../../components/utils';

const HomeScreen = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Icons name="arrow" color="#000" size={20} />
    <Text>Home Screen</Text>
  </View>
);

export default HomeScreen;
