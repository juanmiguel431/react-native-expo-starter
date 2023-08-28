type ObjectValues<T> = T[keyof T];

export const SCREEN = {
  Home: 'Home',
  Component: 'Component',
  List: 'List',
  Image: 'Image',
  Counter: 'Counter',
  Color: 'Color',
  Square: 'Square',
  SquareReducer: 'Square Reducer',
} as const;


export type Screen = ObjectValues<typeof SCREEN>;

export const ACTION_TYPE = {
  ChangeToRed: 'change_to_red',
  ChangeToGreen: 'change_to_Green',
  ChangeToBlue: 'change_to_blue',
} as const;

export type ActionType = ObjectValues<typeof ACTION_TYPE>;
