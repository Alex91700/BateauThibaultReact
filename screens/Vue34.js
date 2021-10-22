import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { ThemeContext } from '../ThemeContext';

class Vue34 extends React.Component {
  
  render(){
    return (
        <View style={styles.container}>
        <ImageBackground source={require('../assets/background.png')}  style={styles.image}>
        <View style={{ flex: 2, justifyContent: 'center'}}>
               <Text style={styles.title}>Bistrot Landais </Text>
        </View>
        <View style={{ flex: 3 }}>
               <Image style={styles.image}  source={require('../assets/bistrotLandais.png')} />
        </View>
        <View style={{ flex: 2, fontSize: 30, justifyContent: 'flex-end'}}> 
               <Text style={styles.text}>XXXYYYZZZ </Text>
        </View>
        <View style={{ flex: 5,justifyContent: 'center'}}>
                <Text style={styles.text}>Quand il est chaud le soleil</Text>
                <Text style={styles.text}>Quand nous sommes en vacances</Text>
                <Text style={styles.text}>Y a d'la joies, des hirondelles</Text>
                <Text style={styles.text}>C'est le sud de la France</Text>
                <Text style={styles.text}>Papa bricole au garage</Text>
                <Text style={styles.text}>Maman lit dans la chaise longue</Text>
                <Text style={styles.text}>Dans ce jolie paysage</Text>
                <Text style={styles.text}>Moi, je me balade en tongs</Text>
                <Text style={styles.text}> </Text>
                <Text style={styles.text}>Que du bonheure!</Text>
                <Text style={styles.text}>Que du bonheure!</Text>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

Vue34.contextType = ThemeContext;

export default Vue34;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%'
  },
  title:{
  color: "white",
  fontSize: 36,
  fontWeight: "bold",
  textAlign: "center",
  //backgroundColor: "#000000c0"
},
  text:{
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    //backgroundColor: "#000000c0"
  }
});
