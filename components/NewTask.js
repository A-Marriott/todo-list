import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { TouchableOpacity, StyleSheet, Text, View, Button, TextInput } from 'react-native';

const NewTask = (props) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [urgent, setUrgent] = useState(false);

  const handleSubmit = () => {
    props.onAddTask(title, body, urgent)
    handleViewChange()
  }

  const handleViewChange = () => {
    props.onChangeTaskView(false)
  }

  const changeUrgent = () => {
    urgent ? setUrgent(false) : setUrgent(true)
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
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 120}}>
          <Checkbox style={{marginLeft: -7, marginTop: -6}} value={urgent} onChange={changeUrgent} />
          <Text>Urgent</Text>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={{color: 'white'}}>Submit</Text>
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
    textAlignVertical: 'top'
  },
  inputBoxBody: {
    height: 120,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    textAlignVertical: 'top'
  },
  submitButton: {
    height: 40,
    backgroundColor: '#9FB6B1',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default NewTask;
