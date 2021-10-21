import React from 'react';
import { Button, StyleSheet, Text, View , ImageBackground, Image} from 'react-native';
import { ThemeContext } from '../ThemeContext';
import Contact from '../components/Contact'

class Vue40 extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle} >
          <Text style={styles.textStyle}>Homard en chaud froid</Text>
          <Image source={require('../assets/homardImage.png')} style={styles.imageStyle}/>
          <Contact/>
        </ImageBackground>
      </View>
    );
  }
}

Vue40.contextType = ThemeContext;

export default Vue40;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: '180%',
    color: 'white'
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
});
