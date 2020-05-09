import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';



export default class Login extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Logo />
                <Form type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <Text style={styles.signupButton}> Sign up</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        padding: 50,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent:'center', 
        width: 300,
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }
})