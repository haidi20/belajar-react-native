import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TodoItem({item, pressHandler}) {
    return (
        <TouchableOpacity>
            <Text 
                onPress={() => pressHandler(item.key)}
                style={styles.item}
            >
                {item.text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }
})