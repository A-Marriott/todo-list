import React, { useState } from 'react';
import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import white_Kõnnect_01 from '../assets/white_Kõnnect_01.png';

import TaskCard from './TaskCard';

const ShowTasks = (props) => {
  const handleViewChange = () => {
    props.onChangeTaskView('NewTask');
  };

  const handleDelete = (id) => {
    props.onDeleteTask(id);
  };

  return(
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <View style={{backgroundColor: 'black'}}>
        <Image source={white_Kõnnect_01} resizeMode={'contain'} style={styles.logo}></Image>
      </View>
      <View style={styles.container}>
        <Text style={styles.standardFontSize}>To Do List</Text>
        <View style={styles.urgentKey}>
          <View style={styles.urgentBox}></View>
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
      </View>
        <TouchableOpacity style={styles.newTaskButton} onPress={handleViewChange}>
          <Text style={styles.newTaskButtonText}>New Task</Text>
        </TouchableOpacity>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  standardFontSize: {
    fontSize: 17
  },
  logo: {
    width: '70%',
    height: 100,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  container: {
    marginRight: 24,
    marginLeft: 24,
    marginTop: 24,
  },
  urgentKey: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 28
  },
  urgentBox: {
    width: 12,
    height: 12,
    lineHeight: 0,
    borderWidth: 1.5,
    borderColor: 'red',
    borderRadius: 2,
    marginTop: 4,
    marginRight: 4
  },
  newTaskButton: {
    height: 40,
    backgroundColor: '#9FB6B1',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 80,
    marginLeft: 24,
    marginRight: 24
  },
  newTaskButtonText: {
    color: 'white',
    fontSize: 18,
  }
});


export default ShowTasks;
