import React, { useState } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { View, StyleSheet, Button } from 'react-native';

interface ColorScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const ColorScreen: React.FC<ColorScreenProps> = () => {
  const [color, setColor] = useState('rgb(0,0,0)');
  return (
    <View>
      <Button title="Add a color" onPress={() => setColor(randomRgb)}/>
      <View
        style={{ height: 100, width: 100, backgroundColor: color}}
      />
    </View>
  )
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;
