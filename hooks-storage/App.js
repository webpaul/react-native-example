import React, { useState } from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  AsyncStorage.getItem('count').then((value) => {
    if(!count)
      console.log("Initializing count from storage: " + value);

    if(value)
      setCount(parseInt(value));
  });

  return (
    <View style={styles.container}>
      <Text style={count % 3 == 0 ? styles.color1 : styles.color2}>Hooks {count}!</Text>
      <Button title="One more" onPress={() => {
        var newCount = count + 1;
        setCount(newCount);
        AsyncStorage.setItem('count', newCount+"").catch(reason => console.log("Error saving count: " + reason));
      }}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  color1: {
    backgroundColor: 'yellow'
  },
  color2: {
    backgroundColor: 'red',
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
