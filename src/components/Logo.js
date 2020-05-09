import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export default class Logo extends Component {
    render() {
        return(
                <View style={styles.container}>
                    <Image 
                        style={{width: 215, height: 75}} 
                        source={require('../images/R2.png') }
                    />
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent: 'flex-end',
        
    }
})