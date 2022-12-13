import React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

type InputToDoProps = {
  placeholder: string;
  addTask: () => void;
  onChangeTextTask: (text: string) => void;
  valueTask: string;
}

export function InputToDo({ placeholder, addTask, onChangeTextTask, valueTask } : InputToDoProps) {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholder && styles.placeholderTextColor.color}
        onChangeText={onChangeTextTask}
        value={valueTask}
      />
      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Image source={require('../../assets/plus.png')} />
      </TouchableOpacity>
    </View>
  );
}