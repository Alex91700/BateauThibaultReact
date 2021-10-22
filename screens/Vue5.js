
import React from "react";
import { ImageBackground, View, StyleSheet, Button, Image } from "react-native";
import Contact from "../components/Contact";
import { ThemeContext } from "../ThemeContext";

class Vue5 extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle}>
                    <Image source={require('../assets/poisson.png')} style={styles.imageStyle}/>
                    <Button title="Poissons"
                        onPress={()=>this.props.navigation.navigate('Vue50')}>
                    </Button>

                    <Button title="Coquillages"
                        onPress={()=>this.props.navigation.navigate('Vue51')}>
                    </Button>

                    <Button title="Crustacés"
                        onPress={()=>this.props.navigation.navigate('Vue52')}>
                    </Button>

                    <Button title="Promotions !"
                        onPress={()=>this.props.navigation.navigate('Vue53')}>
                    </Button>
                    <Contact/>
                </ImageBackground>
            </View>
        )
    }
}

export default Vue5;
Vue5.contextType = ThemeContext;

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
    imageStyle: {
        alignSelf: "center",
        width: '50px',
        height: '50px',
        margin: '10px'
    }
  });