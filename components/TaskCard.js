import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const TaskCard = (props) => {
  return(
    <View style={styles.container}>
      <View style={[styles.taskNumberIcon, props.urgent && styles.urgentBorder]}>
        <Text style={{color: 'white'}}>Task {props.taskNumber}</Text>
      </View>
      <Text>{props.title}</Text>
      <Text>{props.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 24
  },
  taskNumberIcon: {
    height: 32,
    width: 68,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  urgentBorder: {
    borderWidth: 1,
    borderColor: 'red'
  }
});

export default TaskCard;
