import React, {useState} from 'react';
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

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Greeting', 'hello world!')
    } catch (e) {
      console.log('error storing')
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Greeting')
      if(value !== null) {
      }
    } catch(e) {
      console.log('error getting')
    }
  }

  const addTaskHandler = (title, body, urgent) => {
    // Add to db, must retrieve from DB on open as well
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
        <TouchableOpacity onPress={storeData}>
          <Text>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getData}>
          <Text>Read</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
