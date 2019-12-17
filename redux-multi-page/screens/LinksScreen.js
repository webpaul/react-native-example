import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { redux } from '../redux';

class LinksScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
        <ExpoLinksView />

        <View style={styles.container}>
          <Button onPress={this.props.testAction} title="Test!" />
          <Text>
            {this.props.testReducer.content || "No current state to display"}
            {this.props.testReducer.count} times
          </Text>
        </View>

      </ScrollView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

export default redux.connect(LinksScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
