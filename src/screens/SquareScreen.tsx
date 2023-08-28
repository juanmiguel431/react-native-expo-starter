import { Text, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import ColorCounter from '../components/ColorCounter';

interface SquareScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const SquareScreen: React.FC<SquareScreenProps> = (props) => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  return (
    <View>
      <ColorCounter
        title="Red"
        value={red}
        onChange={setRed}
      />
      <ColorCounter
        title="Blue"
        value={blue}
        onChange={setBlue}
      />
      <ColorCounter
        title="Green"
        value={green}
        onChange={setGreen}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default SquareScreen;
