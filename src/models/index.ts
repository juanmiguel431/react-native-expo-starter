type ObjectValues<T> = T[keyof T];

export const SCREEN = {
  Home: 'Home',
  Component: 'Component',
  List: 'List',
  Image: 'Image',
  Counter: 'Counter',
  CounterReducer: 'Counter Reducer',
  Color: 'Color',
  Square: 'Square',
  SquareReducer: 'Square Reducer',
  Text: 'Text',
  Box: 'Box',
  FlexBoxExercise1v1: 'FlexBox Exercise1 v1',
  FlexBoxExercise1v2: 'FlexBox Exercise1 v2', FlexBoxEx1TeacherSolutionScreen: 'Flex Box Ex1 Teacher Solution'

} as const;
export type Screen = ObjectValues<typeof SCREEN>;

export const ACTION_TYPE = {
  ChangeToRed: 'change_to_red',
  ChangeToGreen: 'change_to_Green',
  ChangeToBlue: 'change_to_blue',
} as const;
export type ActionType = ObjectValues<typeof ACTION_TYPE>;

export const COUNTER_ACTION_TYPE = {
  Increase: 'Increase',
  Decrease: 'Decrease'
} as const;
export type CounterActionType = ObjectValues<typeof COUNTER_ACTION_TYPE>;
