import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import { SCREEN_LOGIN, SCREEN_HOME } from './src/common/constants/ScreenNames';
import Home from './src/screens/Home';

const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={SCREEN_LOGIN}>
        <MainStack.Screen name={SCREEN_LOGIN} component={Login} options={{ headerShown: false }} />
        <MainStack.Screen name={SCREEN_HOME} component={Home} options={{ headerShown: false }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
