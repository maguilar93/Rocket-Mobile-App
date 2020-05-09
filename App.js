import React, { Component } from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/pages/Login';
import Intervention from './src/pages/Intervention';
import Homepage from './src/pages/Homepage';
import Elevator from './src/pages/Elevator'

function StartupScreen() {
  return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor="#808e95"
          barStyle="light-content"
          />
          <Login />
      </View>
  );
};

const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Startup" >
          <Stack.Screen name="Startup" children={StartupScreen} />
          <Stack.Screen name="Intervention" component={Intervention} />
          <Stack.Screen name="Homepage" component={Homepage} />
          <Stack.Screen name="Elevator" component={Elevator} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default App;

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#b0bec5', 
    flex: 1,
    padding: 50,
    //alignItems: 'center',
    justifyContent: 'center'
  }
})

