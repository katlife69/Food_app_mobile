import React from 'react';
import HomeHeader from './components/HomeHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CategoryList from './components/CategoryList';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View className="bg-white flex-1">
      <View style={{height: insets.top}} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="p-2 flex-1">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <HomeHeader />
            <View className="mt-2">
              <CategoryList />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={{height: insets.bottom}} />
    </View>
  );
};

export default HomeScreen;
