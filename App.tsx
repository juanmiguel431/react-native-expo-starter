import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import { SCREEN } from './src/models';
import SquareReducerScreen from './src/screens/SquareReducerScreen';
import CounterReducerScreen from './src/screens/CounterReducerScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
import FlexBoxEx1V1Screen from './src/screens/FlexBoxEx1v1Screen';
import FlexBoxEx1V2Screen from './src/screens/FlexBoxEx1v2Screen';
import FlexBoxEx1TeacherSolutionScreen from './src/screens/FlexBoxEx1TeacherSolutionScreen';
import FlexBoxEx1TeacherSolutionV2Screen from './src/screens/FlexBoxEx1TeacherSolutionV2Screen';

// export function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto"/>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const navigator = createStackNavigator({
  [SCREEN.Home]: HomeScreen,
  [SCREEN.Component]: ComponentScreen,
  [SCREEN.List]: ListScreen,
  [SCREEN.Image]: ImageScreen,
  [SCREEN.Counter]: CounterScreen,
  [SCREEN.CounterReducer]: CounterReducerScreen,
  [SCREEN.Color]: ColorScreen,
  [SCREEN.Square]: SquareScreen,
  [SCREEN.SquareReducer]: SquareReducerScreen,
  [SCREEN.Text]: TextScreen,
  [SCREEN.Box]: BoxScreen,
  [SCREEN.FlexBoxExercise1v1]: FlexBoxEx1V1Screen,
  [SCREEN.FlexBoxExercise1v2]: FlexBoxEx1V2Screen,
  [SCREEN.FlexBoxEx1TeacherSolutionScreen]: FlexBoxEx1TeacherSolutionScreen,
  [SCREEN.FlexBoxEx1TeacherSolutionV2Screen]: FlexBoxEx1TeacherSolutionV2Screen,
}, {
  initialRouteName: SCREEN.Home,
  defaultNavigationOptions: {
    title: 'App'
  }
});

export default createAppContainer(navigator);
