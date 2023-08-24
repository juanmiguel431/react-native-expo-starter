import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, View, StyleSheet } from 'react-native';

interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const ComponentsScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View>
      <Text style={styles.text}>
        This is the components screen
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


export default ComponentsScreen;
