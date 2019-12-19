import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.restServer = 'http://172.20.50.240';

    this.state = {
      user: '',
      pass: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login screen</Text>
        <TextInput autoCapitalize="none"
                   autoCorrect={false} 
                   autoFocus
                   keyboardType="default" 
                   maxLength={ 20 }
                   placeholder="Username"
                   returnKeyType="done"
                   enablesReturnKeyAutomatically
                   style={styles.username}
                   onChangeText={(user) => this.setState({user})}
                   />
        <TextInput autoCapitalize="none"
                   autoCorrect={false} 
                   autoFocus
                   keyboardType="default" 
                   maxLength={ 20 }
                   placeholder="Pass"
                   returnKeyType="done"
                   enablesReturnKeyAutomatically
                   style={styles.username}
                   onChangeText={(pass) => this.setState({pass})}
                   />

        <Button
          title="Let me innnnn"
          onPress={() => {
            console.log(this.state);

            const payload = { ...this.state };

            fetch(`${this.restServer}/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            }).then(x => {
              console.log(payload);
              console.log(x);
              this.props.navigation.navigate('App')
            }).catch(error => console.log(error));

          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});