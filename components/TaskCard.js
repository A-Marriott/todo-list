import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const TaskCard = (props) => {
  return(
    <View style={styles.container}>
      <Text>Task {props.taskNumber}</Text>
      <Text>{props.title}</Text>
      <Text>{props.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default TaskCard;
