import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../ThemeContext';

class Homard extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <Text>Homard!</Text>
      </View>
    );
  }
}

Homard.contextType = ThemeContext;

export default Homard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
