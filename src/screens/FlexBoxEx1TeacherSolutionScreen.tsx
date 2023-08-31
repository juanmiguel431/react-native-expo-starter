import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { View, StyleSheet, ScrollView } from 'react-native';

interface FlexBoxEx1TeacherSolutionScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const FlexBoxEx1TeacherSolutionScreen: React.FC<FlexBoxEx1TeacherSolutionScreenProps> = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.view1}/>
        <View style={styles.view2}/>
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
    alignSelf: 'flex-end'
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

export default FlexBoxEx1TeacherSolutionScreen;
