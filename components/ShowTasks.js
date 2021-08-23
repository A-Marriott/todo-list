import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import white_Kõnnect_01 from '../assets/white_Kõnnect_01.png';

import TaskCard from './TaskCard'

const ShowTasks = (props) => {
  const handleViewChange = () => {
    props.onChangeTaskView(true)
  }

  return(
    <View>
      <View style={{backgroundColor: 'black', }}>
       {/* <Image source={white_Kõnnect_01} style={{width: '100%', height: 100, display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />*/}
      </View>
      <Text>To Do List</Text>
      <Text>Urgent</Text>
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
