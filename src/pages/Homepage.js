import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../components/Logo'

function Homepage() {
    const navigation = useNavigation();
    const { navigate } = navigation;

    return (

        <View style={styles.container}>
            <Logo />
            <View >
                <TouchableOpacity style={styles.button} onPress={() => navigate('Elevator')}>
                    <Text style={styles.buttonText}>Elevators</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigate('Intervention')}>
                    <Text style={styles.buttonText}>Intervention</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigate('Intervention')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default Homepage;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText : {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        textAlign:'center'
    },
    button : {
        backgroundColor: '#808e95',
        marginVertical: 10,
        borderRadius: 25,
        width: 300,
        height: 50,
        paddingVertical: 13,
    }
})