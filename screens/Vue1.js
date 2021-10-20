import React from "react";
import {View, ImageBackground, Text, StyleSheet, Image} from "react-native";
import {ThemeContext} from '../ThemeContext';

class Vue1 extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle} >
                    <Text style={styles.Text}>Le bateau de Thibault</Text>
                    <Image source={require('../assets/TIG.png')} style={styles.ImageStyle}/>
                    <Text style={styles.contactStyle}>
                        06 63 99 99 78
                        lebateaudethibault@gmail.com
                        www.facebook.com/lebateaudethibault
                    </Text>
                </ImageBackground>
            </View>
        )
    }
}

Vue1.contextType = ThemeContext;
export default Vue1;

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
    },
    Text: {
        textAlign: "center",
        color: "white",
        marginTop: "5%",
        fontSize: "200%"
    },
    ImageStyle: {
        alignSelf: "center",
        marginTop: "5%",
        width: '50%',
        height: '40%'
    },
    contactStyle: {
        textAlign: "center",
        marginTop: "5%",
        fontSize: "120%"
    }
  });