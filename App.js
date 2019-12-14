import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import FindMe from './components/FindMe';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'shaun', id: '1'},
    {name: 'yoshi', id: '2'},
    {name: 'mario', id: '3'},
    {name: 'joko', id: '4'},
    {name: 'kusino', id: '5'},
    {name: 'tampa', id: '6'},
    {name: 'mungkidi', id: '7'},
  ])

  const pressHandler = (id) => {
    // alert(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person =>  person.id != id);
    })
  }

  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id }
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        {
          people.map((item) => {
            return(
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
          })
        }
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    padding: 30,
    backgroundColor: 'gray',
    fontSize: 24,
    color:'white',
    marginHorizontal: 10,
    marginTop: 24,
  }
});
