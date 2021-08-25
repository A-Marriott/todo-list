import React, {useState, useEffect} from 'react';
import { StatusBar, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

import NewTask from './components/NewTask';
import ShowTasks from './components/ShowTasks';

export default function App() {
  const [view, setView] = useState('ShowTasks');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    storeTasks();
  }, [tasks]);

  const storeTasks = async () => {
    try {
      await AsyncStorage.setItem('@tasklist', JSON.stringify(tasks));
    } catch (e) {
      console.log('error storing');
    }
  };

  const getTasks = async () => {
    try {
      const value = await AsyncStorage.getItem('@tasklist');
      if(value !== null) {
        setTasks(JSON.parse(value));
      }
    } catch(e) {
      console.log('error getting');
    }
  };

  const addTaskHandler = (taskInfoObject) => {
    const largestid = tasks.length === 0 ? 0 : Math.max(...tasks.map(task => task.id));
    setTasks((prevState) => {
      return [ ...prevState, {id: largestid + 1, title: taskInfoObject.title, body: taskInfoObject.body, urgent: taskInfoObject.urgent} ];
    })
  };

  const deleteTaskHandler = (id) => {
    setTasks(prevState => prevState.filter(task => task.id !== id));
  };

  const changeViewHandler = (string) => {
    setView(string);
  };

  let pageDisplay;
  if (view === 'NewTask') {
    pageDisplay = <NewTask onAddTask={addTaskHandler} onChangeTaskView={changeViewHandler}></NewTask>
  } else if (view === 'ShowTasks') {
    pageDisplay = <ShowTasks onDeleteTask={deleteTaskHandler} items={tasks} onChangeTaskView={changeViewHandler}></ShowTasks>
  }

  return(
    <View style={{paddingTop: StatusBar.currentHeight}}>
    {Platform.OS === 'ios' && <View style={{marginTop: 50}}><StatusBar barStyle={'dark-content'}/></View>}
      {pageDisplay}
    </View>
  )
};
