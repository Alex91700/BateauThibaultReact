import React from 'react';
import { Button, StyleSheet, Text, View , ImageBackground} from 'react-native';
import { ThemeContext } from '../ThemeContext';

class Vue40 extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/background@2x.png')} style={styles.backgroundStyle} >
          <Text>Homard en chaud froid</Text>
          </ImageBackground>
      </View>
    );
  }
}

Vue40.contextType = ThemeContext;

export default Vue40;

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
