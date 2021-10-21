import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { ThemeContext } from '../ThemeContext';

class Vue41 extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
         <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle} >
            <Text>Noix de Saint-Jacques flambées au cognac</Text>
            </ImageBackground>
      </View>
    );
  }
}

Vue41.contextType = ThemeContext;

export default Vue41;

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
  }, scrollContainer: {
    flex: 1,
  },
});
