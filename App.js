import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NewTask from './components/NewTask';
import ShowTasks from './components/ShowTasks';

export default function App() {
  const [newTaskView, setNewTaskView] = useState(false)
  const [tasks, setTasks] = useState([])
  const [count, setCount] = useState(0)

  const addTaskHandler = (title, body) => {
    // Add to db, must retrieve from DB on open as well
    setTasks((prevState) => {
      return [ ...prevState, {id: count, title: title, body: body} ];
    })
    setCount(prevState => prevState + 1)
  };

  const changeViewHandler = (givenBoolean) => {
    setNewTaskView(givenBoolean)
  }

  if (newTaskView) {
    return(
      <NewTask onAddTask={addTaskHandler} onChangeTaskView={changeViewHandler}></NewTask>
    )
  } else {
    return(
      <ShowTasks items={tasks} onChangeTaskView={changeViewHandler}></ShowTasks>
    )
  }

  // return (
  //   <View style={styles.container}>
  //     <NewTask onAddTask={addTaskHandler}></NewTask>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
