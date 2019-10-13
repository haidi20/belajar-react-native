import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
} from 'react-native';

type Props = {};

class App extends Component<Props> {
  render(){
    return(
      <View style={styles.container}>
        {/* search bar */}
        <View style={styles.header}>
          <View style={{position:"relative", flex: 1}}>
            <TextInput placeholder="what do you want to eat ? " style={styles.inputSearch} />
            <Image source={require('./assets/icon/search.png')} style={styles.iconSearch} />
          </View>
          <View style={styles.positionPromo}>
            <Image source={require('./assets/icon/promo.png')} />
          </View>
        </View>
        {/* gopay */}
        <View style={{marginHorizontal: 17, marginTop: 4}}>
          <View style={styles.infoGopay}>
            <Image source={require('./assets/icon/gopay.png')} />
            <Text style={styles.nominalGopay}>Rp. 50.000</Text>
          </View>
          <View></View>
        </View>
        <View style={styles.body}>
          
        </View>
        <View style={styles.buttonNavigation}>
          <View style={styles.buttonMenu}>
            <Image style={styles.buttonMenuIcon} source={require('./assets/icon/home-active.png')} />
            <Text style={{color:"#43AB4A", ...styles.buttonMenuText}}>Home</Text>
          </View>
          <View style={styles.buttonMenu}>
            <Image style={styles.buttonMenuIcon} source={require('./assets/icon/order.png')} />
            <Text style={styles.buttonMenuText}>Orders</Text>
          </View>
          <View style={styles.buttonMenu}>
            <Image style={styles.buttonMenuIcon} source={require('./assets/icon/help.png')} />
            <Text style={styles.buttonMenuText}>Help</Text>
          </View>
          <View style={styles.buttonMenu}>
            <Image style={styles.buttonMenuIcon} source={require('./assets/icon/inbox.png')} />
            <Text style={styles.buttonMenuText}>Inbox</Text>
          </View>
          <View style={styles.buttonMenu}>
            <Image style={styles.buttonMenuIcon} source={require('./assets/icon/account.png')} />
            <Text style={styles.buttonMenuText}>Account</Text>
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
  header:{
    flexDirection: "row",
    marginHorizontal: 17,
    paddingTop: 15,
  },
  body:{
    flex:1,
    marginHorizontal: 17,
    flexDirection: "row"
  },
  iconSearch:{
    position: "absolute",
    top: 5,
    left: 12
  },
  inputSearch: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 25,
    height: 40,
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 15,
    marginRight: 5,
    backgroundColor:"white"
  },
  positionPromo:{
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "blue"
  },
  infoGopay:{
    flexDirection: "row", 
    justifyContent:"space-between",
    backgroundColor: '#2A5DB3',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 14,
  },
  nominalGopay:{
    fontSize: 17,
    fontWeight: "bold",
    color:"white"
  },  
  // styles menu below
  buttonNavigation:{
    height: 54,
    flexDirection:"row"
  },
 buttonMenu:{
    flex: 1,
    alignItems: "center", // posisi tengah secara vertical
    justifyContent:"center" // posisi tengah secara horizontal
 },
 buttonMenuText:{
  fontSize: 10,
  marginTop: 4
 }, 
 buttonMenuIcon:{
   width: 26,
   height: 26,
 }
})