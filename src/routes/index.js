import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../modules/home';
import Details from '../modules/details';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
