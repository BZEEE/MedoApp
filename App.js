/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './src/components/screens/LoginScreen/LoginScreen.js';
import WorkSpaceScreen from "./src/components/screens/WorkSpaceScreen/WorkSpaceScreen.js"
import ViewScanScreen from "./src/components/screens/ViewScanScreen/ViewScanScreen.js"

// class LoginScreen extends React.Component {
//   static navigationOptions = {}

//   render() {
//       // const {navigate} = this.props.navigation
//       return (
//           <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//               <Text>Hello World! from above</Text>
//           </View>
//           // <button
//           //     title= "go to profile"
//           //     onPress={() => navigate('Profile', {name: 'jane'})}
//           // />
//       );
//   }
// }

const appNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    WorkSpace: WorkSpaceScreen,
    screen: ViewScanScreen
  },
  {
    initialRouteName: "Login"
  }
);

const App = createAppContainer(appNavigator);

export default App;
