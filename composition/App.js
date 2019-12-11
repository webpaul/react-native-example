import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function FancyBorder(props) {
	return (
		<View style={{backgroundColor: props.color}}>
			<Text>Fancy border!</Text>
			{props.children}
		</View>
	);
}

export default function App() {
  return (
    <View style={styles.container}>
		<Text>Open up App.js to start working on your app!</Text>
	  
		<FancyBorder color='green'>
			<Text style={{color: 'white'}}>Composition Text!</Text>
		</FancyBorder>
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
