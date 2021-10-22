
import React from "react";
import { ImageBackground, View, StyleSheet, Button } from "react-native";
import { ThemeContext } from "../ThemeContext";

class Vue5 extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle}>
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
    }
  });