import React, { useState } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

interface CounterScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const CounterScreen: React.FC<CounterScreenProps> = () => {
  const [counter, setCounter] = useState(0)
  return (
    <View>
      <Text>Counter</Text>
      <Button
        title="Increase"
        onPress={_ => setCounter(() => counter + 1)}
      />
      <Button
        title="Decrease"
        onPress={_ => setCounter(() => counter - 1)}
      />
      <Text style={styles.text}>{counter}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 10
  }
});

export default CounterScreen;
