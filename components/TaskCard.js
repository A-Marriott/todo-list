import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const TaskCard = (props) => {
  const handleDelete = (id) => {
    props.handleDelete(props.id)
  }

  return(
    <View style={styles.container}>
      <View style={[styles.taskNumberIcon, props.urgent && styles.urgentBorder]}>
        <Text style={{color: 'white'}}>Task {props.taskNumber}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={{textDecorationLine: 'underline', marginBottom: 6, fontSize: 16}}>{props.title}</Text>
        <Text>{props.body}</Text>
      </View>
      <TouchableOpacity style={{position: 'absolute', top: 0, right: 7}} onPress={handleDelete}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>✖</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1.3,
    borderRadius: 6,
    marginBottom: 12,
    position: 'relative',
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
  },
  deleteTask: {

  }
});

export default TaskCard;
