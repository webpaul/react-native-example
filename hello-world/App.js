import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mystuff2}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mystuff: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mystuff2: {
    height: '70%',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
