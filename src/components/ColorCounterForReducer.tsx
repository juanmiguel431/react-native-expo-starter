import { Text, View, StyleSheet, Button } from 'react-native';
import React from 'react';

interface ColorCounterForReducerProps {
  title: string;
  value?: number;
  onChange?: (value: number) => void;
}

const COLOR_INCREMENT = 20;

const ColorCounterForReducer: React.FC<ColorCounterForReducerProps> = ({ title, value, onChange }) => {

  return (
    <View>
      <Text>{`${title} - ${value}`}</Text>
      <Button
        title="Increase"
        onPress={() => {
          if (!onChange) return;
          const result = (value || 0) + COLOR_INCREMENT;
          if (result > 255) return;
          onChange(COLOR_INCREMENT);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          if (!onChange) return;
          const result = (value || 0) - COLOR_INCREMENT;
          if (result < 0) return;
          onChange(-COLOR_INCREMENT)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ColorCounterForReducer;
