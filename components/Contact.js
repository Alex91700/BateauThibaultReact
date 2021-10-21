import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { ThemeContext } from "../ThemeContext";

class Contact extends React.Component {
    render() {
        return(
            <View>
                <Text style={styles.contactStyle}>
                    Toutes les eaux mènent à Thibault
                    06 63 99 99 78
                    lebateaudethibault@gmail.com
                    www.facebook.com/lebateaudethibault
                </Text>
            </View>
        )
    }
}

Contact.contextType = ThemeContext;
export default Contact;

const styles = StyleSheet.create({
    contactStyle: {
        textAlign: "center",
        marginTop: "5%",
        fontSize: "80%"
    }
})