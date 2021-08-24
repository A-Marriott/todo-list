import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, TextInput } from 'react-native';

const NewTask = (props) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = () => {
    props.onAddTask(title, body)
    handleViewChange()
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
    <TouchableOpacity
      onPress={handleViewChange}
    >
      <Text style={styles.backButton}>{"<"} Back</Text>
    </TouchableOpacity>
      <Text>Add a task</Text>
      <Text>Title</Text>
      <TextInput style={{height: 40}}
        onChangeText={currentText => setTitle(currentText)}
        value={title}/>
      <Text>Body</Text>
      <TextInput style={{height: 40}}
        onChangeText={currentText => setBody(currentText)}
        value={body}/>
      <Button title="Submit" onPress={handleSubmit}/>
    </View>
  )
}

const styles = StyleSheet.create({
  backButton: {

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default NewTask;
