
import React from "react";
import { View, ImageBackground, StyleSheet } from 'react-native';
import { ThemeContext } from "../ThemeContext";

class Vue54 extends React.Component {

    render() {
        console.log(this.props.panier);
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../assets/background@2x.png')} style={styles.backStyle}/>
            </View>
        )
    }

}

export default Vue54;
Vue54.contextType = ThemeContext;

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    backStyle: {
      width: '100%',
      height: '100%',
      flex: 1
    }
})