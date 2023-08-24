import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { View, StyleSheet, Button } from 'react-native';

interface ColorScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const ColorScreen: React.FC<ColorScreenProps> = () => {
  return (
    <View>
      <Button title="Add a color"/>
    </View>
  )
};

const styles = StyleSheet.create({});

export default ColorScreen;
