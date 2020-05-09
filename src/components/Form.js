import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, navigation} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Form () {

    const navigation = useNavigation();

    const { navigate } = navigation;
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email" 
                placeholderTextColor="#fff" />
                
                <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)'   
                placeholder="Password" 
                secureTextEntry={true}
                placeholderTextColor="#fff" />

                <TouchableOpacity style={styles.button} onPress={() => navigate('Intervention')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
}

export default Form;

const styles = StyleSheet.create({
    container : {
        
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    inputBox : {
        width: 300,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#fff',
        marginVertical: 10
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