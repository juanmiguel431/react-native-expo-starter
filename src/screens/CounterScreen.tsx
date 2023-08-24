import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, View, StyleSheet, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';

interface CounterScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const CounterScreen: React.FC<CounterScreenProps> = () => {
  return (
    <View>
      <Text>Counter</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: { fontSize: 35 }
});

export default CounterScreen;
