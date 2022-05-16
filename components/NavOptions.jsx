import { StyleSheet, Text, View, FlatList, Touchable, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Icon } from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";

const data = [
  {
    id: 123,
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: 456,
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
]

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList 
      data={data}
      horizontal
      keyExtractor={item => item.id}
      renderItem={( {item} ) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`bg-gray-200 p-2 pl-6 pb-8 pt-4 m-2 w-40 h-60 `}
        >
          <View>
            <Image 
              style={{
                resizeMode: 'contain',
                width: 120,
                height: 120,
              }}
              source={{
                uri: item.image,
              }}
            />
            <Text
              style={tw` mt-2 text-lg font-semibold`}
            >
              {item.title}
            </Text>
            <Icon 
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions;