import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import FindMe from './components/FindMe';
import Header from './components/Header';

export default function App() {
  const [todos, sestTodos] = useState([
    {text: 'buy coffe', key: '1'},
    {text: 'buy milk', key: '2'},
    {text: 'buy wafer', key: '3'},
  ])

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
