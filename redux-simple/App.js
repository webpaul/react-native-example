import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { redux } from './redux';
import { Provider } from 'react-redux';

class AppInner extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Button onPress={this.props.testAction} title="Test!" />
          <Text>{this.props.testReducer.content || "No current state to display, press button!"} {this.props.testReducer.count} times</Text>
        </View>
    );
  }
}

const AppWithRedux = redux.connect(AppInner);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={redux.store}>
        <AppWithRedux />
      </Provider>
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