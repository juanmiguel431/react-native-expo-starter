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

type ObjectValues<T> = T[keyof T];
export type Screen =ObjectValues<typeof SCREEN>;
