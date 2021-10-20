import React from "react";
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { ThemeContext } from '../ThemeContext';

class Vue23 extends React.Component {
    
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle} >
                    <Text style={styles.Text}>SAPHIR</Text>
                    <Image source={require('../assets/saphir.png')} style={styles.imageStyle}/>
                </ImageBackground>
            </View>
        );
    }

}

Vue23.contextType = ThemeContext;
export default Vue23;

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