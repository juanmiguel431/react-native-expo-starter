import React, { useState } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

interface FlexBoxEx1V2ScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const FlexBoxEx1V2Screen: React.FC<FlexBoxEx1V2ScreenProps> = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{
          ...styles.viewSize,
          backgroundColor: '#e1af0a',
        }}/>
        <View style={{
          ...styles.viewSize,
          backgroundColor: '#ce1d1d',
          alignSelf: 'center'
        }}/>
        <View style={{
          ...styles.viewSize,
          backgroundColor: '#33c04a',
          position: 'absolute',
          top: 0,
          right: 0
        }}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewSize: {
    height: 100,
    width: 100
  },
  container: {}
});

export default FlexBoxEx1V2Screen;
