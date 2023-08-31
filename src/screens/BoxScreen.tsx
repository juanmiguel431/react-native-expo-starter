import React, { useState } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, View, StyleSheet } from 'react-native';

interface BoxScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const BoxScreen: React.FC<BoxScreenProps> = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text>Box Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    fontSize: 35,
    margin: 15,
    height: 60,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default BoxScreen;
