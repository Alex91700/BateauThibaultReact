import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../ThemeContext';

class Home extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>

        <Button title="Produits et promotions"
          onPress={()=>this.props.navigation.navigate('Vue5')}>
        </Button>

        <Button title="Bateaux"
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
      </View>
    );
  }
}

Home.contextType = ThemeContext;

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
