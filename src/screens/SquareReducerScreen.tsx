import { View, StyleSheet } from 'react-native';
import React, { Reducer, useReducer } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import ColorCounterForReducer from '../components/ColorCounterForReducer';
import { ACTION_TYPE, ActionType } from '../models';

interface SquareReducerScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const reducer: Reducer<ReducerState, ReducerAction> = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.ChangeToRed:
      return { ...state, red: state.red + action.payload }
    case ACTION_TYPE.ChangeToGreen:
      return { ...state, green: state.green + action.payload }
    case ACTION_TYPE.ChangeToBlue:
      return { ...state, blue: state.blue + action.payload }
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
  type: ActionType;
  payload: number;
}

const SquareReducerScreen: React.FC<SquareReducerScreenProps> = (props) => {

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});

  return (
    <View>
      <ColorCounterForReducer
        title="Red"
        value={state.red}
        onChange={value => dispatch({ type: ACTION_TYPE.ChangeToRed, payload: value })}
      />
      <ColorCounterForReducer
        title="Blue"
        value={state.blue}
        onChange={value => dispatch({ type: ACTION_TYPE.ChangeToBlue, payload: value })}
      />
      <ColorCounterForReducer
        title="Green"
        value={state.green}
        onChange={value => dispatch({ type: ACTION_TYPE.ChangeToGreen, payload: value })}
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
