
import React, {Component} from 'react';
import {View, Text, Button, TextInput} from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MedoCanvas from "./../../container/MedoCanvas.js";
import styles from "./LoginScreenStyleSheet.js";
// var {height, width} = Dimensions.get('window');

// *** USE GCanvas to un graphics
// https://alibaba.github.io/GCanvas/docs/Introduction.html

class LoginScreen extends Component {
    static navigationOptions = {}
    constructor(props) {
        super(props);
        this.state = { text: "username" }
    }

    render() {
        // const {navigate} = this.props.navigation
        return (
            <View style={styles.view}>
                {/* <MedoCanvas></MedoCanvas> */}
                <Text style={styles.logo}>MEDO</Text>
                <TextInput style={styles.username}>
                    {/* onChangeText={ (text) =>this.setState({text}) }
                    value={this.state.text}  */}
                </TextInput>
                <TextInput style={styles.password}>
                    {/* onChangeText={ (text) =>this.setState({text}) }
                    value={this.state.text}  */}
                </TextInput>
                <Button style={styles.button}
                    title="Login"
                    onPress={() => this.props.navigation.push('WorkSpace')}
                />
            </View>
            // <Button
            //     title= "go to profile"
            //     onPress={() => navigate('Profile', {name: 'jane'})}
            // />
        );
    }
}

export default LoginScreen;
