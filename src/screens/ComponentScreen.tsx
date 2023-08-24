import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, View, StyleSheet } from 'react-native';

interface ComponentScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const ComponentScreen: React.FC<ComponentScreenProps> = () => {
  return (
    <View>
      <Text style={styles.text}>
        This is the Components Screen
      </Text>
      <Text>Hi there</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
  }
});


export default ComponentScreen;
