import React, {useState} from 'react';
import { 
    StyleSheet, Text, 
    TextInput, View
} from 'react-native';

export default function Sanbox(){
    return(
        <View
            style={styles.container}
        >
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd'
    },
    boxOne: {
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo: {
        backgroundColor: 'gold',
        padding: 10,
    },
    boxThree: {
        backgroundColor: 'coral',
        padding: 10,
    }
})