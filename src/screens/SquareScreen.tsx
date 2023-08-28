import { Text, View, StyleSheet } from 'react-native';
import React from "react";
import { NavigationScreenProp, NavigationState } from 'react-navigation';

interface SquareScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const SquareScreen: React.FC<SquareScreenProps> = (props) => {
  return (
    <View>
      <Text>Square Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SquareScreen;
