import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, View, StyleSheet, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';

interface ImageScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const ImageScreen: React.FC<ImageScreenProps> = () => {
  return (
    <View>
      <Text style={styles.text}>This is the Image Screen</Text>
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} />
      <ImageDetail title="Forest"  imageSource={require('../../assets/forest.jpg')} />
      <ImageDetail title="Mountain"  imageSource={require('../../assets/mountain.jpg')} />
    </View>
  )
};

const styles = StyleSheet.create({
  text: { fontSize: 35 }
});

export default ImageScreen;
