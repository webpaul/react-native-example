import React from 'react';
import { Text, View } from 'react-native';
import styles from './global/styles'

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
    <View style={styles.pageStyle}>
      <FancyBorder color='green'>
        <Text style={{color: 'white'}}>Composition Text!</Text>
      </FancyBorder>
    </View>
  );
}
