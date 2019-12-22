import React from 'react';
import {Button, View, Text} from 'react-native';

import {globalStyles} from '../styles/global';

export default function ReviewDetails({navigation}){

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Text>Review Details Screen</Text>
            <Button title="back to home screen" onPress={pressHandler} />
        </View>
    )
}