import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
 

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Welcom to Home page</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    paddingTop: 100,
    fontSize: 90,
    fontWeight: 'bold',
    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});












export default Home