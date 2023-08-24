import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const ComponentScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View>
      <Text style={styles.text}>This is the Image Screen</Text>
      <ImageDetail />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
  }
});

export default ComponentScreen;
