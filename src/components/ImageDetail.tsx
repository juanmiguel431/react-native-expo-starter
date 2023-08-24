import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';

type ImageDetailProps = {
  title: string;
  imageSource:  ImageSourcePropType;
};

const ImageDetail: React.FC<ImageDetailProps> = ({ imageSource, title }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Image source={imageSource}/>
    </View>
  );
}

export default ImageDetail;
