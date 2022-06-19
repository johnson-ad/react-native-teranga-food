import  React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Home from './screens/Home';
 



export default function App() {

  const [name, setName] = useState('John');
  const clickHandler = () => {
    setName('Jane');
  }
  
  const [person, setPerson] = useState({
    name: 'Johnson',
    age: 30
  });

  const handleChangeAge = () => { 
    setPerson({
      ...person,
      age: person.age + 1
    })};

  return (
    <View style={styles.container}>
      <StatusBar style="auto" /> 
      <Text>My name is : {name}</Text>
      <Text >His name is {person.name} and he have {person.age} old</Text>
      <TextInput style={styles.input} placeholder="Enter your name" onChangeText={(text) => console.log(text)} />
      <Button title="Change Name" onPress={() => clickHandler()} style={styles.button} />
      <Button title="Change Age" onPress={() => handleChangeAge()} style={styles.button} />


    </View>      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 90,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button:{
    marginBottom: 20
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    marginTop: 10,
    width: 200,
    marginBottom: 10
  }
});

 