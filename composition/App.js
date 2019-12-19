import React from 'react';
import { Text, View } from 'react-native';
import styles from './global/styles'
import { render } from 'react-dom';

class FancyBorder extends React.Component {
  render() {
    return (
      <View style={this.props.mystuff}>
        <Text>Fancy border!</Text>
        {this.props.children}
        <Text style={{color: 'white'}}>
          {this.props.left}
          {this.props.right}
        </Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.pageStyle}>
        <FancyBorder mystuff={{backgroundColor: 'green'}} left={
          <Text style={{color: 'yellow'}}>test!</Text>
        } right="test2">
          <Text style={{color: 'white'}}>Composition Text!</Text>
          <Text style={{color: 'red'}}>Composition Text2!</Text>
        </FancyBorder>
      </View>
    );
  }
}
