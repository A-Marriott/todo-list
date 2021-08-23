import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const NewTask = (props) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = () => {
    props.onAddTask(title, body)
  }

  const handleViewChange = () => {
    props.onChangeTaskView(false)
  }

  return (
    <View>
      <Button
      onPress={handleViewChange}
      title="Back"
      color="#841584"
    />
      <Text>Add a task</Text>
      <Text>Title</Text>
      <TextInput style={{height: 40}}
        onChangeText={currentText => setTitle(currentText)}
        value={title}/>
      <Text>Body</Text>
      <TextInput style={{height: 40}}
        onChangeText={currentText => setBody(currentText)}
        value={body}/>
      <Button onPress={handleSubmit}/>
    </View>
  )
}

export default NewTask;
