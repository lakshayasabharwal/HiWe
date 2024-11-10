import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MoneyScreen from './MoneyScreen'; // Importing MoneyScreen component

const ParticipateComponent = () => {
  const [participateClicked, setParticipateClicked] = useState(false);

  // Function to switch to MoneyScreen when "Participate" button is clicked
  const handleParticipate = () => {
    setParticipateClicked(true);
  };

  // If the user has clicked "Participate," render MoneyScreen instead
  if (participateClicked) {
    return <MoneyScreen />;
  }

  // Otherwise, render the ParticipateScreen content
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/final logo.png')} // Replace with the correct path to your logo
        style={styles.logo}
      />

      {/* Event Image */}
      <Image
        source={require('../../assets/IMG_20201010_070310.jpg')} // Replace with the correct path to your event image
        style={styles.eventImage}
      />

      {/* Event Details */}
      <View style={styles.eventDetailsContainer}>
        <Text style={styles.eventTitle}>EXPLORING QILA RAI PITHORA; CYCLING</Text>
        <Text style={styles.eventTime}>6AM - 8AM | NOV 2 | SATURDAY</Text>
        <Text style={styles.eventDescription}>
          Cycle through the ruins of the 11th century fortified complex built under Prithviraj Chauhan
          and explore the hidden parts of the city!
        </Text>
        <Text style={styles.startPoint}>Start Point: Qutub Minar</Text>
        <Text style={styles.thingsToRemember}>Things to remember</Text>
        <Text style={styles.bulletPoint}>1. Carry water and a sun cap</Text>
        <Text style={styles.bulletPoint}>2. Wear comfortable clothes and sports shoes</Text>
        <Text style={styles.bulletPoint}>
          3. Bring your cycle, or rent it from MyByk stations nearby
        </Text>
      </View>

      {/* Participate Button */}
      <TouchableOpacity style={styles.participateButton} onPress={handleParticipate}>
        <Text style={styles.participateButtonText}>PARTICIPATE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ece3',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  eventImage: {
    width: '90%',
    height: 140,
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 20,
  },
  eventDetailsContainer: {
    width: '100%',
    backgroundColor: '#f7941e',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  eventTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  startPoint: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  thingsToRemember: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  participateButton: {
    width: '60%',
    height: 50,
    backgroundColor: '#ffcc00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  participateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ParticipateComponent;
