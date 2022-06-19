import  React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity, TouchableHighlight} from 'react-native';
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

    const [state, setState] = useState([ 
      {name : "Paris", key :1},
      {name : "London", key :2},
      {name : "New York", key :3},
      {name : "Tokyo", key :4},
      {name : "Paris", key :5},
      {name : "London", key :6},
      {name : "New York", key :7},
      {name : "Tokyo", key :8},
      {name : "Tokyo", key :9},
      {name : "Berlin", key :10},
      {name : "Paris", key :11}

    ]);

    
    const pressHandler = (id) => {
      setState(prevState => {
        return prevState.filter(item => item.key != id); // filter out the item with the id
      })
    }

  return (

    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" /> 
        <Text>My name is : {name}</Text>
        <Text >His name is {person.name} and he have {person.age} old</Text>
        <TextInput style={styles.input} placeholder="Enter your name" onChangeText={(text) => setName(text)} />
        <Button title="Change Name" onPress={() => clickHandler()} style={styles.button} />
        <Button title="Change Age" onPress={() => handleChangeAge()} style={styles.button} />

        <FlatList 
        data={state}
        keyExtractor={item => item.key.toString()}
        renderItem={({item}) =>         
          <TouchableOpacity style={styles.item} onPress={()=> pressHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        }/>
   
      </View>
    </ScrollView>     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 70,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 30,
 
  },
  button:{
    marginTop: 20,
    marginBottom: 20
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    marginTop: 10,
    marginBottom: 10,
    width: 330

  },
  item:{
    backgroundColor: 'red',
    margin: 10,
    padding: 10,
    fontSize: 20,
    marginHorizontal: 0,
     
  }

});

 