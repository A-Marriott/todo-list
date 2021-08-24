import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
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
        <Text>To Do List</Text>
        <Text>Urgent</Text>
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
        <Button
          onPress={handleViewChange}
          title="New Task"
          color="#841584"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 24
  }
});


export default ShowTasks;
