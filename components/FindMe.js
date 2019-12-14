import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';    

async function alertIfRemoteNotificationsDisabledAsync() {
    const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
        alert('gagal akses ijin lokasi');
    }else{        
        let location = await Location.getCurrentPositionAsync({});

        return JSON.stringify(location)
    }
}  

export default class FindMe extends Component{
    constructor(props){
        super(props);

        this.state = {
            location: 'masih kosong'
        }
    }

    async componentDidMount(){
        let location = await alertIfRemoteNotificationsDisabledAsync();
        console.log(location)

        this.setState({
            location: location
        })
    }

    render(){
        return(
            <View>
                <Text>find me</Text>
                <Text>lokasi {this.state.location}</Text>
            </View>
        )
    }
}