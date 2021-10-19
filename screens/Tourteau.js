import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../ThemeContext';

class Tourteau extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <Text>Tourteau!</Text>
      </View>
    );
  }
}

Tourteau.contextType = ThemeContext;

export default Tourteau;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
