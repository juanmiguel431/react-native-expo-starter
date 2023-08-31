import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { View, StyleSheet, ScrollView } from 'react-native';

interface FlexBoxEx1V1ScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const FlexBoxEx1V1Screen: React.FC<FlexBoxEx1V1ScreenProps> = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{
          ...styles.viewSize,
          backgroundColor: '#e1af0a',
          alignSelf: 'flex-start'
        }}/>
        <View style={{
          ...styles.viewSize,
          backgroundColor: '#ce1d1d',
          top: 100
        }}/>
        <View style={{
          ...styles.viewSize,
          backgroundColor: '#33c04a',
        }}/>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  viewSize: {
    height: 100,
    width: 100
  },
  container: {
    height: 400,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default FlexBoxEx1V1Screen;
