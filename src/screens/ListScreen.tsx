import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, StyleSheet, FlatList } from 'react-native';

interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const ListScreen: React.FC<HomeScreenProps> = () => {
  // const friends = [
  //   { name: 'Friend #1', key: '1' },
  //   { name: 'Friend #2', key: '2' },
  //   { name: 'Friend #3', key: '3' },
  //   { name: 'Friend #4', key: '4' },
  //   { name: 'Friend #5', key: '5' },
  //   { name: 'Friend #6', key: '6' },
  //   { name: 'Friend #7', key: '7' },
  //   { name: 'Friend #8', key: '8' },
  //   { name: 'Friend #9', key: '9' },
  //   { name: 'Friend #10', key: '10' },
  // ];

  const friends = [
    { name: 'Friend #1', age: 21 },
    { name: 'Friend #2', age: 22 },
    { name: 'Friend #3', age: 23 },
    { name: 'Friend #4', age: 24 },
    { name: 'Friend #5', age: 25 },
    { name: 'Friend #6', age: 26 },
    { name: 'Friend #7', age: 27 },
    { name: 'Friend #8', age: 28 },
    { name: 'Friend #9', age: 29 },
    { name: 'Friend #10', age: 30 },
  ];

  return (
    <>
      <Text>This is the List Screen</Text>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => {
          return (
            <Text style={styles.text}>
              {item.name} - Age: {item.age}
            </Text>
          );
        }}
      />
    </>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    marginVertical: 50
  }
});


export default ListScreen;
