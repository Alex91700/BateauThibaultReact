import React from "react";
import { Button, StyleSheet, Text, TextInput, View, ImageBackground, Image } from 'react-native';
import Contact from "../components/Contact";
import { ThemeContext } from '../ThemeContext';

class Vue2 extends React.Component {

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle} >
                    <Image source={require('../assets/ancre.png')} style ={styles.imageStyle}/>
                    <Button title="Aquilon" onPress={()=>{this.props.navigation.navigate('Vue20')}}>
                    </Button>
                    <Button title="De la Brise" onPress={()=>{this.props.navigation.navigate('Vue21')}}>
                    </Button>
                    <Button title="Gast Micher" onPress={()=>{this.props.navigation.navigate('Vue22')}}>
                    </Button>
                    <Button title="Saphir" onPress={()=>{this.props.navigation.navigate('Vue23')}}>
                    </Button>
                    <Contact/>
                </ImageBackground>
            </View>
        )
    }

}

Vue2.contextType = ThemeContext;
export default Vue2;

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
        margin: '10px',
        width: '50px',
        height: '50px'
    }
  });