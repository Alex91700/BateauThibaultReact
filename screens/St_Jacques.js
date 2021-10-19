import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../ThemeContext';

class St_Jaques extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <Text>Tourteau!</Text>
      </View>
    );
  }
}

St_Jaques.contextType = ThemeContext;

export default St_Jaques;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
