import React from 'react';
import HomeHeader from './components/HomeHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View style={{height: insets.top}} />
      <HomeHeader />
    </>
  );
};

export default HomeScreen;
