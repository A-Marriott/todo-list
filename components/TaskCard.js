import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable } from 'react-native';

const TaskCard = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = (id) => {
    props.handleDelete(props.id);
  };

  return(
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Delete task?</Text>
            <View style={{flexDirection: 'row'}}>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.modalButtonText}>No</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  handleDelete();
                }}
              >
                <Text style={styles.modalButtonText}>Yes</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={[styles.taskNumberIcon, props.urgent && styles.urgentBorder]}>
        <Text style={{color: 'white'}}>Task {props.taskNumber}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text>{props.body}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.deleteButtonText}>✖</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  urgentBorder: {
    borderWidth: 1,
    borderColor: 'red'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1.3,
    borderRadius: 6,
    marginBottom: 12,
    position: 'relative',
  },
  taskNumberIcon: {
    height: 32,
    width: 68,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  contentContainer: {
    marginLeft: 24,
    maxWidth: 240
  },
  title: {
    textDecorationLine: 'underline',
    marginBottom: 6,
    fontSize: 16
  },
  deleteButton: {
    position: 'absolute',
    top: -7,
    right: 0
  },
  deleteButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 8
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    elevation: 3
  },
  button: {
    borderRadius: 5,
    padding: 8,
    margin: 10,
    width: 50,
    backgroundColor: '#9FB6B1'
  },
  modalButtonText: {
    color: 'white',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center'
  }
});

export default TaskCard;
