import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from './ThemeContext';
import Home from './screens/Home';
import Vue2 from './screens/Vue2';
import Vue20 from './screens/Vue20';
import Vue21 from './screens/Vue21';
import Vue22 from './screens/Vue22';
import Vue23 from './screens/Vue23';
import Bar from './screens/Bar';
import Homard from './screens/Homard';
import St_Jacques from './screens/St_Jacques';
import Tourteau from './screens/Tourteau';
import Vue4 from './screens/Vue4';

const Stack = createStackNavigator();

export default class App extends React.Component {
 
  constructor(props){
    super(props)
    this.state= { friends: ["Toto", "Tati", "Tonton"]}
  }

  render() {
    return(
      <ThemeContext.Provider>
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen 
                    name="Home"
                    component={Home}
                  />
                <Stack.Screen 
                name="Bar"
                component={Bar}
              /> 
              <Stack.Screen 
                name="Homard"
                component={Homard}
              />
              <Stack.Screen 
                name="St_Jacques"
                component={St_Jacques}
              />
              <Stack.Screen 
                name="Tourteau"
                component={Tourteau}
              />
              <Stack.Screen 
                name="Vue4"
                component={Vue4}
              />
              <Stack.Screen
                name ="Vue2"
                component={Vue2}
              />
              <Stack.Screen
                name = "Vue20"
                component = {Vue20}
              />
              <Stack.Screen
                name = "Vue21"
                component = {Vue21}
              />
              <Stack.Screen
                name = "Vue22"
                component = {Vue22}
              />
              <Stack.Screen
                name = "Vue23"
                component = {Vue23}
              />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
