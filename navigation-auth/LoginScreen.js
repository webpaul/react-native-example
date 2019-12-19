import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login screen</Text>
        <Button
          title="Let me innnnn"
          onPress={() =>
            this.props.navigation.navigate('App')
          }
        />
      </View>
    );
  }
}

// const payload = {
//   message: text
// };
// fetch(`${pusherConfig.restServer}/users/${this.props.name}/messages`, {
// method: 'POST',
// headers: {
//   'Content-Type': 'application/json'
// },
// body: JSON.stringify(payload)
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});