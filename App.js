import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';

import NewTask from './components/NewTask';
import ShowTasks from './components/ShowTasks';

export default function App() {
  const [newTaskView, setNewTaskView] = useState(true)
  const [tasks, setTasks] = useState([])
  const [count, setCount] = useState(0)

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  const addTaskHandler = (title, body, urgent) => {
    // Add to db, must retrieve from DB on open as well
    setTasks((prevState) => {
      return [ ...prevState, {id: count, title: title, body: body, urgent: urgent} ];
    })
    console.log(urgent)
    setCount(prevState => prevState + 1)
  };

  const changeViewHandler = (givenBoolean) => {
    setNewTaskView(givenBoolean)
  }

  let pageDisplay;

  if (newTaskView) {
    pageDisplay = <NewTask onAddTask={addTaskHandler} onChangeTaskView={changeViewHandler}></NewTask>
  } else {
    pageDisplay = <ShowTasks items={tasks} onChangeTaskView={changeViewHandler}></ShowTasks>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
