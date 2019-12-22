import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {globalStyles} from '../styles/global';

export default function home(){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
        </View>
    )
}