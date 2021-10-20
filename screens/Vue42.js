import React from 'react';
import {  StyleSheet, Text, View, ImageBackground } from 'react-native';
import { ThemeContext } from '../ThemeContext';

class Vue42 extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
         <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle} >
          <Text>Bar rôti au laurier frais</Text>
        </ImageBackground>
      </View>
    );
  }
}

Vue42.contextType = ThemeContext;

export default Vue42;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundStyle: {
    width: '100%',
    height: '100%',
    flex: 1
  }, scrollContainer: {
    flex: 1,
  },
});
