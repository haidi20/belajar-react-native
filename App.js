import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('nata');
  const [person, setPerson] = useState({name: 'andi', age: 20})

  const clickHandler = () => {
    setName('haidi');
    setPerson({name: 'risky', age: '23'})
  }

  return (
    <View style={styles.container}>
      <Text>My Name is {name}</Text>
      <Text>His Name is {person.name} and his age is {person.age} </Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  }
});
