import React, { useState } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, View, StyleSheet, Platform } from 'react-native';

interface BoxScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const BoxScreen: React.FC<BoxScreenProps> = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textStyle}> {/*Issue if I try to apply this style to a Text Element in Android.*/}
        <Text>Box Screen</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black'
  },
  textStyle: {
    borderWidth: 10,
    borderColor: 'red',
    margin: 20,
  }
});

export default BoxScreen;
