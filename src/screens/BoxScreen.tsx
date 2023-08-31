import React, { useState } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, View, StyleSheet, Platform } from 'react-native';

interface BoxScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const BoxScreen: React.FC<BoxScreenProps> = () => {
  const [name, setName] = useState('');
  return (
    <>
      <View style={styles.viewStyle}>
        <View style={styles.textStyle}>
          <Text>Box Screen</Text>
        </View>
      </View>

      {/*Flex start*/}
      <View style={flexStyles.viewStyle}>
        <View style={flexStyles.textStyle}>
          <Text>Child 1</Text>
        </View>
        <View style={flexStyles.textStyle}>
          <Text>Child 2</Text>
        </View>
        <View style={flexStyles.textStyle}>
          <Text>Child 3</Text>
        </View>
      </View>
    </>
  )
};

// Issue if I try to apply this style to a Text Element in Android.
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


// Flex start
const flexStyles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center'
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
  }
});

export default BoxScreen;
