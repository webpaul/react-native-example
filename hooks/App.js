import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function doStuff(myState) {
  const [obj, setObj] = myState;
  console.log('hello');
  
  //don't do this
  //obj.x = obj.x+1;
  //setObj(obj);

  setObj({x: obj.x + 1, y: 4});
}

export default function App() {
  const myState = useState({ x: 1, y: 2});
  
  console.log('render');

  return (
    <View style={styles.container}>
      <Text>Hook {myState[0].x}!</Text>
      <Button title="One more" onPress={doStuff.bind(this, myState)}/>
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
