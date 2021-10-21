
import React from "react";
import { Button, View, TouchableOpacity, ImageBackground, StyleSheet, Image, Text } from "react-native";
import { ThemeContext } from "../ThemeContext";

const data = require('../data.json');

class Vue50 extends React.Component {

    render() {

        const poissons = [];
        const panier = [];

        data.forEach(element => {
            if(element.category == 0) {
                poissons.push(<Button onPress={()=> panier.push({nom: element.name, prix:element.price, id: element.id})}
                title={element.name + ' ' + element.price + ' €'} key={element.id}/>);
            }
        })

        return(
            <View style={styles.container}>
                <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Vue54', panier)}>
                        <Image source={require('../assets/shop.png')} style={styles.shopStyle}/>
                    </TouchableOpacity>
                    {poissons}               
                </ImageBackground>
            </View>
        )
    }

}

export default Vue50;
Vue50.contextType = ThemeContext;

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
    shopStyle: {
        width: '50px',
        height: '50px',
        marginLeft: '80%'
    }
  });