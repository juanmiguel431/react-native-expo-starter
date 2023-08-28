import { View, StyleSheet } from 'react-native';
import React, { Reducer, useReducer } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import ColorCounterForReducer from '../components/ColorCounterForReducer';

interface SquareReducerScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const reducer: Reducer<ReducerState, ReducerAction> = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount }
    case 'green':
      return { ...state, green: state.green + action.amount }
    case 'blue':
      return { ...state, blue: state.blue + action.amount }
    default:
      return state;
  }
}

type ReducerState = {
  red: number;
  green: number;
  blue: number;
}

type ReducerAction = {
  colorToChange: string;
  amount: number;
}

const SquareReducerScreen: React.FC<SquareReducerScreenProps> = (props) => {

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});

  return (
    <View>
      <ColorCounterForReducer
        title="Red"
        value={state.red}
        onChange={value => dispatch({ colorToChange: 'red', amount: value })}
      />
      <ColorCounterForReducer
        title="Blue"
        value={state.blue}
        onChange={value => dispatch({ colorToChange: 'blue', amount: value })}
      />
      <ColorCounterForReducer
        title="Green"
        value={state.green}
        onChange={value => dispatch({ colorToChange: 'green', amount: value })}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default SquareReducerScreen;
