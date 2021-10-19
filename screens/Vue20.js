import react from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../ThemeContext';

class Vue20 extends React.Component {
    
    render() {
        return(
            <View style={styles.container}>
                <Text>coucou</Text>
            </View>
        );
    }

}

Vue20.contextType = ThemeContext;
export default Vue20;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });