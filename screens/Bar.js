import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../ThemeContext';

class Bar extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <Text>Bar!</Text>
      </View>
    );
  }
}

Bar.contextType = ThemeContext;

export default Bar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
