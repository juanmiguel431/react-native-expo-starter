import React, { useState } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, View, StyleSheet, Platform, ScrollView } from 'react-native';

interface BoxScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const BoxScreen: React.FC<BoxScreenProps> = () => {
  const [name, setName] = useState('');
  return (
    <ScrollView>
      <View style={styles.viewStyle}>
        <View style={styles.textStyle}>
          <Text>Box Screen</Text>
        </View>
      </View>

      {/*Flex Align property*/}
      <View style={flexAlignStyles.viewStyle}>
        <View style={flexAlignStyles.textOneStyle}>
          <Text>Child 1</Text>
        </View>
        <View style={flexAlignStyles.textTwoStyle}>
          <Text>Child 2</Text>
        </View>
        <View style={flexAlignStyles.textThreeStyle}>
          <Text>Child 3</Text>
        </View>
      </View>

      {/*Flex Direction property*/}
      <View style={flexDirectionStyles.viewStyle}>
        <View style={flexDirectionStyles.textStyle}>
          <Text>Child 1</Text>
        </View>
        <View style={flexDirectionStyles.textStyle}>
          <Text>Child 2</Text>
        </View>
        <View style={flexDirectionStyles.textStyle}>
          <Text>Child 3</Text>
        </View>
      </View>

      {/*Flex JustifyContent property*/}
      <View style={flexJustifyContentStyles.viewStyle}>
        <View style={flexJustifyContentStyles.textStyle}>
          <Text>Child 1</Text>
        </View>
        <View style={flexJustifyContentStyles.textStyle}>
          <Text>Child 2</Text>
        </View>
        <View style={flexJustifyContentStyles.textStyle}>
          <Text>Child 3</Text>
        </View>
      </View>

      <View style={flexJustifyContentStyles.viewStyle}>
        <View style={flexJustifyContentStyles.textStyle}>
          <Text>Child 1</Text>
        </View>
        <View style={flexJustifyContentStyles.textStyle}>
          <Text>Child 2</Text>
        </View>
        <View style={flexJustifyContentStyles.textStyle}>
          <Text>Child 3</Text>
        </View>
      </View>
    </ScrollView>
  )
};

// Issue if I try to apply this style to a Text Element in Android.
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black'
  },
  textStyle: {
    borderWidth: 10,
    borderColor: 'red',
    margin: 20,
  }
});


// Flex Align property
const flexAlignStyles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',
    // flexDirection: 'row',
    height: 200
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: '#1c467e',
    // flex: 4,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: '#3eb23e',
    // flex: 4,
    // alignSelf: 'flex-end',

    zIndex: 99,
    ...StyleSheet.absoluteFillObject,

    // position: 'absolute',
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: '#cfde71',
    // flex: 2
  },
});

// Flex Direction property
const flexDirectionStyles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row',
    height: 200,
    alignItems: 'center'
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
  }
});

// Flex JustifyContent property
const flexJustifyContentStyles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    justifyContent: 'center'
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
  }
});

export default BoxScreen;
