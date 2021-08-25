import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import white_Kõnnect_01 from '../assets/white_Kõnnect_01.png';

import TaskCard from './TaskCard'

const ShowTasks = (props) => {
  const handleViewChange = () => {
    props.onChangeTaskView('NewTask')
  }

  const handleDelete = (id) => {
    props.onDeleteTask(id)
  }

  return(
    <View>
      <View style={{backgroundColor: 'black'}}>
        <Image source={white_Kõnnect_01} resizeMode={'contain'} style={{width: '70%', height: 100, marginLeft: 'auto', marginRight: 'auto'}}></Image>
      </View>
      <View style={styles.container}>
        <Text style={{fontSize: 18}}>To Do List</Text>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 4, marginBottom: 28}}>
          <View style={{width: 12, height: 12, lineHeight: 0, borderWidth: 1.5, borderColor: 'red', borderRadius: 2, marginTop: 4, marginRight: 4}}></View>
          <Text>Urgent</Text>
        </View>
        {props.items.map((task, index) => (
          <TaskCard
            key={task.id}
            id={task.id}
            taskNumber={index + 1}
            title={task.title}
            body={task.body}
            urgent={task.urgent}
            handleDelete={handleDelete}
          />
        ))}
        <View style={{marginBottom: 120}}></View>
        <TouchableOpacity style={styles.newTaskButton} onPress={handleViewChange}>
          <Text style={{color: 'white', fontSize: 18}}>New Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 24
  },
  newTaskButton: {
    height: 40,
    backgroundColor: '#9FB6B1',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});


export default ShowTasks;
