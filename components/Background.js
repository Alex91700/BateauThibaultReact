import React from "react";
import {StyleSheet, View, ImageBackground, Text} from "react-native";
import { ThemeContext } from '../ThemeContext';

class Background extends React.Component {

    render() {
        return (
            <ImageBackground source={require('../assets/background.png')}></ImageBackground>
        )
    }

}

Background.contextType = ThemeContext;
export default Background;

const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        // width: undefined,
        // height: undefined,
        // flexDirection: 'column',
        // backgroundColor:'transparent',
        // justifyContent: 'flex-start',
    
    }
})
