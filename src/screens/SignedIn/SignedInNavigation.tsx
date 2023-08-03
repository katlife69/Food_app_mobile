import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import HomeScreen from './Home';
import {SignedInStackParamList} from '@common/interfaces/SignedInNavigationInterface';
import {Home} from '@common/router';
const Stack = createNativeStackNavigator<SignedInStackParamList>();
const SignedInNavigation = () => {
  const options: NativeStackNavigationOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Home} component={HomeScreen} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignedInNavigation;
