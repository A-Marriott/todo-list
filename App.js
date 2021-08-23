import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NewTask from './components/NewTask';

export default function App() {
  return (
    <View style={styles.container}>
      <NewTask></NewTask>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
