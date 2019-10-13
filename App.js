import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

type Props = {};

class App extends Component<Props> {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.body}></View>
        <View style={styles.buttonNavigation}>
          <View style={{backgroundColor:"red", flex: 1}}>
            <Text>Home</Text>
          </View>
          <View style={{backgroundColor:"pink", flex: 1}}>
            <Text>Orders</Text>
          </View>
          <View style={{backgroundColor:"purple", flex: 1}}>
            <Text>Help</Text>
          </View>
          <View style={{backgroundColor:"brown", flex: 1}}>
            <Text>Inbox</Text>
          </View>
          <View style={{backgroundColor:"green", flex: 1}}>
            <Text>Account</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body:{
    flex: 1,
    backgroundColor:"blue"
  },
  buttonNavigation:{
    backgroundColor: "yellow",
    height: 54,
    flexDirection:"row"
  },
 buttonMenu:{
   backgroundColor: "red"
 }
})