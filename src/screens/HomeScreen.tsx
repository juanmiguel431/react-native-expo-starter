import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, TouchableOpacity, View } from 'react-native';
import NavigateTo from '../components/NavigateTo';
import { SCREEN } from '../models';

interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Hello there!</Text>

      {Object.entries(SCREEN)
        .filter(([key, value]) => value !== 'Home')
        .map(([key, value]) => {
        return (
          <NavigateTo key={key} title={`${value} Screen`} screen={value} navigation={navigation} />
        );
      })}

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
