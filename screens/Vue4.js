import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { ThemeContext } from '../ThemeContext';

class Vue4 extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        
        <Button 
          onPress={()=>{
            this.props.navigation.navigate('Homard')
          }}
        ></Button>

        <Button 
          onPress={()=>{
            this.props.navigation.navigate('St_Jacques')
          }}
        ></Button>

        <Button 
          onPress={()=>{
            this.props.navigation.navigate('Bar')
          }}
        ></Button>

        <Button 
          onPress={()=>{
            this.props.navigation.navigate('Tourteau')
          }}
        ></Button>
      </View>
    );
  }
}

Vue4.contextType = ThemeContext;

export default Vue4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    margin:10,
    borderWidth:2,
    borderBottomColor: "black"
  }
});
