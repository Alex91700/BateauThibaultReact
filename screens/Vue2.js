import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { ThemeContext } from '../ThemeContext';

class Vue2 extends React.Component {

    render() {
        return(
            <View style={styles.container}>
                <Button title="Bateau1" onPress={()=>{this.props.navigation.navigate('Vue20')}}>
                </Button>
                <Button title="Bateau2" onPress={()=>{this.props.navigation.navigate('Vue21')}}>
                </Button>
                <Button title="Bateau3" onPress={()=>{this.props.navigation.navigate('Vue22')}}>
                </Button>
                <Button title="Bateau4" onPress={()=>{this.props.navigation.navigate('Vue23')}}>
                </Button>
            </View>
        )
    }

}

Vue2.contextType = ThemeContext;
export default Vue2;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'cyan',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });