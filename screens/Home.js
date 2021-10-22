import React from 'react';
import { Button, StyleSheet, View, ImageBackground, Text } from 'react-native';
import { ThemeContext } from '../ThemeContext';
import Contact from '../components/Contact';

class Home extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle} >
          <Text style={styles.textStyle}>Le bateau de Thibault</Text>
          <Button title="Produits et promotions"
            onPress={()=>this.props.navigation.navigate('Vue5')}>
          </Button>

          <Button title="Nos bateaux partenaires !"
            onPress={()=>this.props.navigation.navigate('Vue2')}>
          </Button>

          <Button title="Restaurants"
            onPress={()=>this.props.navigation.navigate('Vue3')}>
          </Button>

          <Button title="Recettes"
            onPress={()=>this.props.navigation.navigate('Vue4')}>
          </Button>

          <Button title="Contact"
            onPress={()=>this.props.navigation.navigate('Vue1')}>
          </Button>
          <Contact/>
        </ImageBackground>  
      </View>
      
    );
  }
}

Home.contextType = ThemeContext;

export default Home;

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
  textStyle: {
    textAlign: 'center',
    fontSize: '200%',
    color: 'white',
    margin: '10px',
    fontStyle: 'italic'
  }
});
