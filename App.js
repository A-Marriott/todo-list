import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';

import NewTask from './components/NewTask';
import ShowTasks from './components/ShowTasks';

export default function App() {
  const [view, setView] = useState('ShowTasks')
  const [tasks, setTasks] = useState([{id: 1, title: 'Laundry', body: 'take the laundry out', urgent: true}, {id: 2, title: 'Laundry', body: 'take the laundry out', urgent: false}])
  const [count, setCount] = useState(0)

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  const addTaskHandler = (title, body, urgent) => {
    // Add to db, must retrieve from DB on open as well
    setTasks((prevState) => {
      return [ ...prevState, {id: count, title: title, body: body, urgent: urgent} ];
    })
    setCount(prevState => prevState + 1)
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
