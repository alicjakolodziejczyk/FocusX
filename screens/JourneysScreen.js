import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import JourneyTile from '../components/JourneyTile'
import { auth, db } from '../firebase'
import {collection, getDocs} from 'firebase/firestore'
import { useEffect } from 'react'
import PreloadedJourneyTile from '../components/PreloadedJourneyTile'

const JourneysScreen = () => {
  const [journeys, setJourneys] = React.useState([])

  useEffect(() => {
    const fetchJourneys = async () => {
      const collectionRef = collection(db, 'users', auth.currentUser.uid, 'journeys');
      const querySnapshot = await getDocs(collectionRef);
      const items = [];
      
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setJourneys(items);
    };
    fetchJourneys();
  }, []);
      return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Learning Journeys</Text>
      <ScrollView >
        <PreloadedJourneyTile title="Lithium batteries" />
        {journeys.map((journey, index) => (
          <JourneyTile key={index} title={journey.title} />
        ))}
      <View style={{height: 100}}></View>
      </ScrollView>
    </View>
  )
}

export default JourneysScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

})