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
      <TouchableOpacity
        onPress={handleViewChange}
      >
        <Text style={styles.backButton}>{"<"} Back</Text>
      </TouchableOpacity>
      <View style={styles.addTaskContainer}>
        <Text style={styles.marginBottom}>Add a task</Text>
        <Text style={[styles.marginBottom, styles.boldText]}>Title</Text>
        <TextInput style={[styles.marginBottom, styles.inputBoxTitle]}
          onChangeText={currentText => setTitle(currentText)}
          value={title}/>
        <Text style={[styles.marginBottom, styles.boldText]}>Body</Text>
        <TextInput style={[styles.marginBottom, styles.inputBoxBody
          ]}
          onChangeText={currentText => setBody(currentText)}
          value={body}/>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.submitButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 12
  },
  boldText: {
    fontWeight: "bold"
  },
  backButton: {
    paddingLeft: 16,
    paddingTop: 12,
    fontWeight: "200"
  },
  addTaskContainer: {
    paddingTop: 100,
    padding: 24
  },
  inputBoxTitle: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  inputBoxBody: {
    height: 120,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  submitButton: {
    height: 40,
    color: 'white',
    backgroundColor: '#9FB6B1',
    lineHeight: 40,
    textAlign: 'center',
    borderRadius: 4
  }
});


export default NewTask;
