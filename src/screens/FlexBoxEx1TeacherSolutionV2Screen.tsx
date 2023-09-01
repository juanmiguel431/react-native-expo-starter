import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { View, StyleSheet, ScrollView } from 'react-native';

interface FlexBoxEx1TeacherSolutionV2ScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const FlexBoxEx1TeacherSolutionV2Screen: React.FC<FlexBoxEx1TeacherSolutionV2ScreenProps> = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.view1}/>
        <View style={styles.view2Container}>
          <View style={styles.view2}/>
        </View>
        <View style={styles.view3}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view1: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  view2: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
  view2Container: {
    height: 100,
    width: 50,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'flex-end'
  },
  view3: {
    height: 50,
    width: 50,
    backgroundColor: 'blue'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    borderColor: 'black',
    borderWidth: 3
  }
});

export default FlexBoxEx1TeacherSolutionV2Screen;
