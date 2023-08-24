import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Button, Text, TouchableOpacity, View } from 'react-native';

interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Hello there!</Text>
      <Button
        title="Component Screen"
        onPress={event => {
          navigation.navigate("Component");
        }}
      />
      <Button
        title="List Screen"
        onPress={event => {
          navigation.navigate("List");
        }}
      />
      <Button
        title="Image Screen"
        onPress={event => {
          navigation.navigate("Image");
        }}
      />
      <Button
        title="Counter Screen"
        onPress={event => {
          navigation.navigate("Counter");
        }}
      />
      <Button
        title="Color Screen"
        onPress={event => {
          navigation.navigate("Color");
        }}
      />
      <TouchableOpacity
        onPress={event => {
          console.log('Touchable Opacity component pressed.')
        }}
      >
        <Text>You can click on me</Text>
      </TouchableOpacity>
    </View>
  )
};

export default HomeScreen;
