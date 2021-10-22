import React from 'react';
import { Button, StyleSheet, View, ImageBackground, Text  } from 'react-native';
import { ThemeContext } from '../ThemeContext';

class Vue3 extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/background.png')}  style={styles.image}>
        <View style={{ flex: 2, justifyContent:'center' }}>
              <Text style={styles.title}>Restaurants partenaires </Text>
        </View>
        <View style={{ flex: 3 }}>
                <Text style={[styles.text,{fontWeight:'bold'}]}>Tous les restaurants partenaires avec le bateau de Thibault.</Text>
                <Text style={styles.text}>06.63.99.99.78</Text>
                <Text style={styles.text}>lebateaudethibault@gmail.com</Text>
                <Text style={styles.text}>www.facebook.com/lebateaudethibault</Text>
        </View>
        <View style={[styles.row, {flex: 5}]}>
          <View style={styles.button} >
              <Button title="Bistrot Des Gascons"  onPress={()=>{ this.props.navigation.navigate('Vue30') }}> </Button>
          </View>

          <View style={styles.button}>
              <Button  title="Les fous de l'île" onPress={()=>{ this.props.navigation.navigate('Vue31') }} ></Button>
          </View>

          <View style={styles.button}>
              <Button title="Villa 9-Trois" onPress={()=>{ this.props.navigation.navigate('Vue32') }} > </Button>
          </View>

          <View style={styles.button}>
             <Button title="Bistrot Du Sommelier" onPress={()=>{ this.props.navigation.navigate('Vue33') }} ></Button>
          </View>
          <View style={styles.button}>
             <Button title="Bistrot Landais" onPress={()=>{this.props.navigation.navigate('Vue34') }}></Button>
          </View>
          <View style={styles.button}>
             <Button title="Devenez Partenaire!" onPress={()=>{this.props.navigation.navigate('') }}></Button>
          </View>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

Vue3.contextType = ThemeContext;

export default Vue3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "CENTER",
    width: '100%',
    height: '100%'
  },
 button:{
    backgroundColor: '#000000c0',
    alignSelf: 'flex-start',
    marginHorizontal: "1%",
    marginBottom: 5,
    minWidth: "48%",
    textAlign: "center",
 },
 row: {
  flexDirection: "row",
  flexWrap: "wrap",
},
title:{
  color: "white",
  fontSize: 32,
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
