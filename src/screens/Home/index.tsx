import React, { useState } from "react";
import { View, Text, FlatList, Alert, Image } from "react-native";

import { CardToDo } from "../../components/CardToDo";
import { Header } from '../../components/Header';
import { InputToDo } from "../../components/InputToDo";

import { styles } from './styles'

interface TaskData {
  id: string;
  task: string;
  checked: boolean;
}

export function Home() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<TaskData[]>([]);

  const taskQuantityCreated = tasks.length;
  const taskQuantityCompleted = tasks.filter(task => task.checked).length;

  function handleAddNewTask() {
    const data = {
      id: String(new Date().getTime()),
      task: newTask,
      checked: false
    }

    setTasks(prevState => [...prevState, data]);
    setNewTask('');
  }

  function handleRemoveTask(description: string) {
    Alert.alert('Remover item', 'Deseja remover esse item?', [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task.id !== description))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleCheckedTask(item: TaskData) {
    const data = tasks.map(task => task.id === item.id ?
    {
      ...task,
      checked: !task.checked
    }:task);

    setTasks(data);
  }


  return (
  <>
    <Header />
    <View style={styles.container}>
      <InputToDo
        placeholder="Adicione uma nova tarefa"
        addTask={handleAddNewTask}
        onChangeTextTask={(text) => setNewTask(text)}
        valueTask={newTask}
      />
      <View style={styles.containerHeaderTasks}>
        <View style={styles.wrapperTasksQuantity}>
          <Text style={styles.textTaskCreated}>Criadas</Text>
          <View style={styles.boxTaskCreated}>
            <Text style={styles.numberTasks}>{taskQuantityCreated}</Text>
          </View>
        </View>
        <View style={styles.wrapperTasksQuantity}>
          <Text style={styles.textTaskCompleted}>Concluidas</Text>
          <View style={styles.boxTaskCreated}>
            <Text style={styles.numberTasks}>{taskQuantityCompleted}</Text>
          </View>
        </View>
      </View>
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({item }) => (
        <CardToDo
          isChecked={item.checked}
          checkedTask={() => handleCheckedTask(item)}
          descriptionTask={item.task}
          removeTask={() => handleRemoveTask(item.id)}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <View style={styles.listEmptyContainer}>
          <Image source={require('../../assets/clipboard.png')} style={styles.listEmpatyImage} />
          <Text style={styles.listEmptyTitle}>Você ainda não tem tarefas cadastradas</Text>
          <Text style={styles.listEmptySubTitle}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
      )}
    />
    </View>
  </>
  );
}