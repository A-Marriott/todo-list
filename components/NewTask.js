import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';

const NewTask = (props) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [urgent, setUrgent] = useState(false);
  const [titleEmptyOnSubmit, setTitleEmptyOnSubmit] = useState(false);
  const [bodyEmptyOnSubmit, setBodyEmptyOnSubmit] = useState(false);

  const handleSubmit = () => {
    let allowSubmit = true;
    setBodyEmptyOnSubmit(false)
    setTitleEmptyOnSubmit(false)
    if (!title) {
      setTitleEmptyOnSubmit(true)
      allowSubmit = false
    }
    if (!body) {
      setBodyEmptyOnSubmit(true)
      allowSubmit = false
    }
    if (allowSubmit) {
      props.onAddTask({title: title, body: body, urgent: urgent})
      handleViewChange()
    }
  }

  const handleViewChange = () => {
    props.onChangeTaskView('ShowTasks')
  }

  const changeUrgent = () => {
    urgent ? setUrgent(false) : setUrgent(true)
  }

  return (
    <ScrollView>
      <TouchableOpacity onPress={handleViewChange}>
        <Text style={[styles.backButton, styles.standardFontSize]}>{"<"} Back</Text>
      </TouchableOpacity>
      <View style={styles.addTaskContainer}>
        <Text style={[styles.marginBottom, styles.standardFontSize]}>Add a task</Text>
        <Text style={[styles.marginBottom, styles.boldText, styles.standardFontSize]}>Title</Text>
        <TextInput style={[styles.marginBottom, styles.inputBox, titleEmptyOnSubmit && styles.redBorder]}
          onChangeText={currentText => setTitle(currentText)}
          value={title}
          multiline
          numberOfLines={1}
        />
        <Text style={[styles.marginBottom, styles.boldText, styles.standardFontSize]}>Body</Text>
        <TextInput style={[styles.marginBottom, styles.inputBox, bodyEmptyOnSubmit && styles.redBorder]}
          onChangeText={currentText => setBody(currentText)}
          value={body}
          multiline
          numberOfLines={8}
        />
        <View style={styles.urgentToggle}>
          <Checkbox style={{marginLeft: -7, marginTop: -6}} value={urgent} onChange={changeUrgent} />
          <Text>Urgent</Text>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={{color: 'white', fontSize: 18}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  standardFontSize: {
    fontSize: 17
  },
  marginBottom: {
    marginBottom: 12
  },
  boldText: {
    fontWeight: "bold"
  },
  redBorder: {
    borderColor: 'red'
  },
  backButton: {
    marginLeft: 16,
    marginTop: 12
  },
  addTaskContainer: {
    marginTop: 100,
    margin: 24
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    textAlignVertical: 'top',
    padding: 6
  },
  urgentToggle: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 120
  },
  submitButton: {
    height: 40,
    backgroundColor: '#9FB6B1',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});


export default NewTask;
