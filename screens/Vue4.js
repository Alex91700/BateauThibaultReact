import React from "react";
import { Button, StyleSheet, View , ImageBackground, Image} from 'react-native';
import Contact from "../components/Contact";
import { ThemeContext } from '../ThemeContext';

class Vue4 extends React.Component {

  render(){
    return (
      <View style={styles.container}>
         <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle} >
            <Image source={require('../assets/recette.png')} style={styles.imageStyle}/>
            <Button title="Homard" onPress={()=>{this.props.navigation.navigate('Vue40')}}>
              </Button>
            <Button title="St Jacques" onPress={()=>{this.props.navigation.navigate('Vue41')}}>
              </Button>
            <Button title="Bar" onPress={()=>{this.props.navigation.navigate('Vue42')}}>
              </Button>
            <Button  title="Tourteau" onPress={()=>{this.props.navigation.navigate('Vue43')}}>
              </Button>
            <Contact/>
         </ImageBackground>
      </View>
    );
  }
}

Vue4.contextType = ThemeContext;

export default Vue4;

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
    height: '50px',
    width: '50px',
    margin: '10px'
  }
});