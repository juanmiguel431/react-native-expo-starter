import { Text, View, StyleSheet, Button } from 'react-native';
import React from 'react';

interface ColorCounterProps {
  title: string;
  value?: number;
  onChange?: (value: number) => void;
}

const ColorCounter: React.FC<ColorCounterProps> = ({ title, value, onChange }) => {

  return (
    <View>
      <Text>{`${title} - ${value}`}</Text>
      <Button
        title="Increase"
        onPress={() => onChange && onChange((value || 0) + 1)}
      />
      <Button
        title="Decrease"
        onPress={() => onChange && onChange((value || 0) - 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ColorCounter;
