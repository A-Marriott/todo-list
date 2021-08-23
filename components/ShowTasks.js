import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import TaskCard from './TaskCard'

const ShowTasks = (props) => {
  const handleViewChange = () => {
    props.onChangeTaskView(true)
  }

  return(
    <View>
      {props.items.map((task) => (
        <TaskCard
          key={task.id}
          taskNumber={task.id + 1}
          title={task.title}
          body={task.body}
        />
      ))}
        <Button
        onPress={handleViewChange}
        title="New Task"
        color="#841584"
      />
    </View>
  )
}

export default ShowTasks;
