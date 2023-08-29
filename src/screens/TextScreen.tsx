import React, { useState } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, View, StyleSheet, TextInput } from 'react-native';

interface TextScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const TextScreen: React.FC<TextScreenProps> = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text>Text Screen</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChange={e => {
          setName(e.nativeEvent.text);
        }}
      />
      <Text>Hello, {name}</Text>
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

export default TextScreen;
