import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

const NewTask = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [urgent, setUrgent] = useState(false);
  const [titleEmptyOnSubmit, setTitleEmptyOnSubmit] = useState(false);
  const [bodyEmptyOnSubmit, setBodyEmptyOnSubmit] = useState(false);

  const handleSubmit = () => {
    let allowSubmit = true;
    setBodyEmptyOnSubmit(false);
    setTitleEmptyOnSubmit(false);
    if (!title) {
      setTitleEmptyOnSubmit(true);
      allowSubmit = false;
    }
    if (!body) {
      setBodyEmptyOnSubmit(true);
      allowSubmit = false;
    }
    if (allowSubmit) {
      props.onAddTask({title: title, body: body, urgent: urgent});
      handleViewChange();
    }
  };

  const handleViewChange = () => {
    props.onChangeTaskView('ShowTasks');
  };

  const changeUrgent = () => {
    setUrgent(!urgent);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
      <TouchableOpacity onPress={handleViewChange}>
        <Text style={[styles.backButton, styles.standardFontSize]}>{'<'} Back</Text>
      </TouchableOpacity>
      <Text style={[styles.marginBottom, styles.standardFontSize]}>Add a task</Text>
      <Text style={[styles.marginBottom, styles.boldText, styles.standardFontSize]}>Title</Text>
      <TextInput style={[styles.marginBottom, styles.inputBox, titleEmptyOnSubmit && styles.redBorder]}
        onChangeText={currentText => setTitle(currentText)}
        value={title}
        multiline
        numberOfLines={1}
      />
      <Text style={[styles.marginBottom, styles.boldText, styles.standardFontSize]}>Body</Text>
      <TextInput style={[styles.marginBottom, styles.inputBox, {height: 160}, bodyEmptyOnSubmit && styles.redBorder]}
        onChangeText={currentText => setBody(currentText)}
        value={body}
        multiline
        numberOfLines={8}
      />
      <View style={styles.urgentToggle}>
        <Pressable style={styles.checkbox} onPress={changeUrgent} hitSlop={30}>
          {urgent && <Text style={styles.tick}>✔</Text>}
        </Pressable>
        <Text>Urgent</Text>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  standardFontSize: {
    fontSize: 17
  },
  marginBottom: {
    marginBottom: 12
  },
  boldText: {
    fontWeight: 'bold'
  },
  redBorder: {
    borderColor: 'red'
  },
  container: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24
  },
  backButton: {
    marginTop: 12,
    marginBottom: 100,
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
  checkbox: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
    borderRadius: 2,
    borderWidth: 1,
  },
  tick: {
    fontSize: 12,
    marginBottom: 2
  },
  submitButton: {
    height: 40,
    backgroundColor: '#9FB6B1',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 80,
  },
  submitText: {
    color: 'white',
    fontSize: 18
  }
});

export default NewTask;
