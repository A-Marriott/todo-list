import React, {useState, useEffect} from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import AsyncStorage from '@react-native-async-storage/async-storage';

import NewTask from './components/NewTask';
import ShowTasks from './components/ShowTasks';

export default function App() {
  const [view, setView] = useState('ShowTasks')
  const [tasks, setTasks] = useState([])

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    storeTasks();
  }, [tasks]);

  const storeTasks = async () => {
    try {
      await AsyncStorage.setItem('@tasklist', JSON.stringify(tasks))
    } catch (e) {
      console.log('error storing')
    }
  }

  const getTasks = async () => {
    try {
      const value = await AsyncStorage.getItem('@tasklist')
      if(value !== null) {
        setTasks(JSON.parse(value))
      }
    } catch(e) {
      console.log('error getting')
    }
  }

  const addTaskHandler = (title, body, urgent) => {
    const largestid = tasks.length === 0 ? 0 : Math.max(...tasks.map(task => task.id))
    setTasks((prevState) => {
      return [ ...prevState, {id: largestid + 1, title: title, body: body, urgent: urgent} ];
    })
  };

  const changeViewHandler = (string) => {
    setView(string)
  }

  const deleteTaskHandler = (id) => {
    setTasks(prevState => prevState.filter(task => task.id !== id))
  }

  let pageDisplay;

  if (view === 'NewTask') {
    pageDisplay = <NewTask onAddTask={addTaskHandler} onChangeTaskView={changeViewHandler}></NewTask>
  } else if (view === 'ShowTasks') {
    pageDisplay = <ShowTasks onDeleteTask={deleteTaskHandler} items={tasks} onChangeTaskView={changeViewHandler}></ShowTasks>
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <View>
        {pageDisplay}
        <StatusBar style="auto" />
      </View>
    )
  }
}
