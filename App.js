import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import FindMe from './components/FindMe';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';
import Sanbox from './components/sanbox';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffe', key: '1'},
    {text: 'buy milk', key: '2'},
    {text: 'buy wafer', key: '3'},
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
            {text: text, key: Math.random().toString()},
            ...prevTodos
        ]
      })
    }else{
      Alert.alert('OOPS!', 'maaf, kata di masukkan kurang', [
        {text: 'mengerti', onPress: () => console.log('alert tutup') }
      ])
    }
  }


  return (
    // <Sanbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo 
            submitHandler={submitHandler}
          />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem 
                  pressHandler={pressHandler}
                  item={item}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
