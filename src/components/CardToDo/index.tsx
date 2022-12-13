import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

type CardToDoProps = {
  checkedTask: () => void;
  isChecked: boolean;
  descriptionTask: string;
  removeTask: () => void;
}

export function CardToDo({ checkedTask, isChecked, descriptionTask, removeTask }: CardToDoProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonCheck} onPress={checkedTask}>
        {
          isChecked ? (
            <Image source={require('../../assets/checked.png')} style={styles.checkIcon} />
          ) : (
            <Image source={require('../../assets/unchecked.png')} style={styles.checkIcon} />
          )
        }
      </TouchableOpacity>
      <Text
        style={isChecked ? styles.textDescriptionChecked : styles.textDescriptionUnChecked}
        numberOfLines={2}
      >
        {descriptionTask}
      </Text>
      <TouchableOpacity style={styles.buttonDelete} onPress={removeTask}>
        <Image source={require('../../assets/trash.png')} style={styles.trashIcon} />
      </TouchableOpacity>
    </View>
  );
}