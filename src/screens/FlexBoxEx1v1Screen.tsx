import React, { useState } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

interface FlexBoxEx1V1ScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const FlexBoxEx1V1Screen: React.FC<FlexBoxEx1V1ScreenProps> = () => {
  const [name, setName] = useState('');
  return (
    <ScrollView>
      <View>
        <Text>Juan Miguel</Text>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({});

export default FlexBoxEx1V1Screen;
