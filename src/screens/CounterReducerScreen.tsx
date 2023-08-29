import React, { Reducer, useReducer } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, View, StyleSheet, Button } from 'react-native';
import { COUNTER_ACTION_TYPE, CounterActionType } from '../models';

interface CounterReducerScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

type ReducerState = {
  count: number;
}

type ReducerAction = {
  type: CounterActionType;
  payload: {
    quantity: number;
  };
}

const reducer: Reducer<ReducerState, ReducerAction> = (state, action) => {
  switch (action.type) {
    case COUNTER_ACTION_TYPE.Increase:
      return { ...state, count: (state.count + action.payload.quantity) };
    case COUNTER_ACTION_TYPE.Decrease:
      return { ...state, count: (state.count - action.payload.quantity) };
    default:
      return state;
  }
}

const INCREMENT = 10;

const CounterReducerScreen: React.FC<CounterReducerScreenProps> = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Text>Counter</Text>
      <Button
        title="Increase"
        onPress={_ => dispatch({ type: COUNTER_ACTION_TYPE.Increase, payload: { quantity: INCREMENT } })}
      />
      <Button
        title="Decrease"
        onPress={_ => dispatch({ type: COUNTER_ACTION_TYPE.Decrease, payload: { quantity: INCREMENT } })}
      />
      <Text style={styles.text}>{state.count}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 10
  }
});

export default CounterReducerScreen;
