import React from "react";
import { Button, StyleSheet, Text, TextInput, View , ImageBackground, ScrollView} from 'react-native';
import { ThemeContext } from '../ThemeContext';

class Vue4 extends React.Component {

  render(){
    return (
      <View style={styles.container}>
         <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle} >
            <Button title="Homard" onPress={()=>{this.props.navigation.navigate('Vue40')}}>
              </Button>
            <Button title="St Jacques" onPress={()=>{this.props.navigation.navigate('Vue41')}}>
              </Button>
            <Button title="Bar" onPress={()=>{this.props.navigation.navigate('Vue42')}}>
              </Button>
            <Button  title="Tourteau" onPress={()=>{this.props.navigation.navigate('Vue43')}}>
              </Button>
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
});