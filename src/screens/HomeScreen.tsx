import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Button, Text, View } from 'react-native';

interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Hello there!</Text>
      <Button
        title="Components Screen"
        onPress={event => {
          navigation.navigate("Components");
        }}
      />
      <Button
        title="List Screen"
        onPress={event => {
          navigation.navigate("List");
        }}
      />
    </View>
  )
};

export default HomeScreen;
