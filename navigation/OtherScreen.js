import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function doThings(props) {
  debugger;
  console.log(props.navigation);
  props.navigation.navigate('HomeScreen');
}

class OtherScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Other screen</Text>
        <Button
          title="Take me home"
          onPress={() => 
            doThings(this.props)
          }
        />
      </View>
    );
  }
}

export default OtherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});