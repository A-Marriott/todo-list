import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const TaskCard = (props) => {
  return(
    <View>
      <Text>Task {props.taskNumber}</Text>
      <Text>{props.title}</Text>
      <Text>{props.body}</Text>
    </View>
  )
}

export default TaskCard;
