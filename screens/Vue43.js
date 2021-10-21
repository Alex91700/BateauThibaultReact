import React from 'react';
import { Button, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { ThemeContext } from '../ThemeContext';
import Contact from '../components/Contact'

class Vue43 extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle} >
          <Text style={styles.textStyle}>Tourteau linguine</Text>
          <Image source={require('../assets/tourteauLinguine.png')} style={styles.imageStyle}/>
          <Contact/>
        </ImageBackground>
      </View>
    );
  }
}

Vue43.contextType = ThemeContext;

export default Vue43;

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
