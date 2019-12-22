import React, {useState} from 'react';
import {Button, View, Text, FlatList, TouchableOpacity} from 'react-native';

import {globalStyles} from '../styles/global';

export default function home({navigation}){

    const [reviews, setReviews] = useState([
        {title: 'buku ekonomi', price: '20 K', key: '1'},
        {title: 'buku gambar', price: '30 K', key: '2'},
        {title: 'buku sejarah', price: '40 K', key: '3'}
    ])

    const pressAction = (data) => {
        navigation.navigate('ReviewDetails', data); 
    }

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => pressAction(item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}