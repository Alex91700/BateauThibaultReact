import React from "react";
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { ThemeContext } from '../ThemeContext';

class Vue22 extends React.Component {
    
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle} >
                    <Text style={styles.Text}>GAST MICHER</Text>
                    <Image source={require('../assets/gastMicher.png')} style={styles.imageStyle}/>
                </ImageBackground>
            </View>
        );
    }

}

Vue22.contextType = ThemeContext;
export default Vue22;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundStyle: {
      flex: 1,
      width: '100%',
      height: '100%'
    },
    imageStyle: {
        alignSelf: "center",
        marginTop: "5%",
        width: '50%',
        height: '40%'
    },
    Text: {
        textAlign: "center",
        marginTop: "5%",
        color: 'white',
        fontSize: '200%'
    }
  });