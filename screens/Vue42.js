import React from 'react';
import {  StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { ThemeContext } from '../ThemeContext';
import Contact from '../components/Contact'

class Vue42 extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
         <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle} >
          <Text style={styles.textStyle}>Bar rôti au laurier frais</Text>
          <Image source={require('../assets/barRoti.png')} style={styles.imageStyle}/>
          <Contact/>
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
  imageStyle: {
    alignSelf: "center",
    marginTop: "5%",
    width: '50%',
    height: '40%'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: '180%',
    color: 'white'
  },
});
