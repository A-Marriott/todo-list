import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const TaskCard = (props) => {
  return(
    <View style={styles.container}>
      <View style={[styles.taskNumberIcon, props.urgent && styles.urgentBorder]}>
        <Text style={{color: 'white'}}>Task {props.taskNumber}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={{textDecorationLine: 'underline', marginBottom: 6}}>{props.title}</Text>
        <Text>{props.body}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 24,
    padding: 12,
    borderWidth: 1.3,
    borderRadius: 6
  },
  contentContainer: {
    marginLeft: 24,
    maxWidth: 240
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
