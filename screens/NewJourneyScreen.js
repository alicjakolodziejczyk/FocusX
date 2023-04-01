import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { auth, db } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from 'firebase/firestore';


const NewJourneyScreen = () => {
  const [title, setTitle] = React.useState('');
  const [materials, setMaterials] = React.useState('');

  const navigation = useNavigation();

  const dataLocation = collection(db, 'users', auth.currentUser.uid, 'journeys');

  const newJourney = {
    title: title,
    materials: materials,
  };
  const handleCreate = async () => {
    const docRef = await addDoc(dataLocation, newJourney).then(() => {
      setMaterials('');
      setTitle('');
      navigation.navigate('Journeys');
    }).catch((error) => {
      console.error("Error adding document: ", error);
    });
   
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.box}>
        <Image style={styles.image} source={require('../assets/journey-icon.png')} />
        <Text style={styles.pageTitle}>Create a new learning journey</Text>
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={text => setTitle(text)}
          style={styles.input}
        />
        
        <TextInput
          placeholder="Your learning materials"
          value={materials}
          onChangeText={text => setMaterials(text)}
          multiline={true}
          style={[styles.input, styles.multilineInput]}
        />
      
      
      
        <TouchableOpacity
          onPress={handleCreate}
          style={styles.button}
        ><View style={styles.buttonContainer}>
          <Text style={styles.button}>Create</Text>
        
      </View></TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default NewJourneyScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 0,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',

  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 18,
    color: '#000',

  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
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
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
  multilineInput: {
    maxHeight: 200,
  },
  
})