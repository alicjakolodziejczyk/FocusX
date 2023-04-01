import { StyleSheet, Text, View, TouchableOpacity, Image, Screen} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();
  return (
    <>
    <View style={styles.container}>
    <View style={styles.bubble} >
      <Text style={styles.bubbleText}>Hi, I'm FocusX, register and let's have fun learning!</Text>
    </View>
    <Image style={styles.image} source={require('../assets/robot3d.png')} />
    <View>
      <Text style={styles.heading}>Welcome to <Text style={{color:'blue'}}>FocusX</Text>, an app that will help you gain knowledge</Text>
    </View>
    
        <TouchableOpacity
          onPress={() => {navigation.navigate('Login');}}
          style={styles.button}
        ><View style={styles.buttonContainer}>
          <Text style={styles.button}>Login</Text>
        
      </View></TouchableOpacity>
      
        <TouchableOpacity
          onPress={() => {navigation.navigate("Register") } }
          style={styles.buttonOutline}
        ><View style={[styles.buttonContainer, styles.buttonContainerOutline]}>
          <Text style={styles.buttonOutline}>Register</Text>
        
      </View></TouchableOpacity></View>
      </>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonContainerOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'blue',
  },
  button: {
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonOutline: {
    fontWeight: 'bold',
    color: 'blue',
  },
  image: {
    resizeMode: 'contain',
    height: '40%',

  },
  bubble: {
    backgroundColor: 'blue',
    padding: 15,
    width: '50%',
    borderRadius: 50,
    marginLeft: 'auto',
    marginTop: 50,
  },
  bubbleText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})