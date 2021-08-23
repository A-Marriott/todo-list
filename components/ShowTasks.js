import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ShowTasks = (props) => {
  const handleViewChange = () => {
    props.onChangeTaskView(true)
  }

  return(
    <View>
      <Text>Hey</Text>
        <Button
        onPress={handleViewChange}
        title="New Task"
        color="#841584"
      />
    </View>
  )
}

export default ShowTasks;
