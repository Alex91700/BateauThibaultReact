import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { ThemeContext } from '../ThemeContext';
import Contact from '../components/Contact'

class Vue41 extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
         <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle} >
            <Text style={styles.textStyle}>Noix de Saint-Jacques flambées au cognac</Text>
            <Image source={require('../assets/NoixDeStJacques.png')} style={styles.backgroundStyle}/>
            <Contact/>
          </ImageBackground>
      </View>
    );
  }
}

Vue41.contextType = ThemeContext;

export default Vue41;

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
  textStyle: {
    textAlign: 'center',
    fontSize: '180%',
    color: 'white'
  },
  imageStyle: {
    alignSelf: "center",
    marginTop: "5%",
    width: '300px',
    height: '400px'
  },
});
