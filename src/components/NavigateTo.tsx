import React from 'react';
import { Button } from 'react-native';
import { Screen } from '../models';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

interface NavigateToProps {
  title: string;
  screen: Screen;
  navigation: NavigationScreenProp<NavigationState>;
}

const NavigateTo: React.FC<NavigateToProps> = (props) => {
  return (
    <Button
      title={props.title}
      onPress={event => {
        props.navigation.navigate(props.screen);
      }}
    />
  );
};

export default NavigateTo;
